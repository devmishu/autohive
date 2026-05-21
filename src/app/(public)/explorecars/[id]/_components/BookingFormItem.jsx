"use client"
import { revalidateAnyPath } from '@/actions/revalidate';
import { authClient, useSession } from '@/lib/auth-client';
import { bookingService } from '@/services/bookingService';
import { Button, Label, ListBox, Select, TextArea, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

export default function BookingFormItem({ carDetail }) {
    // গাড়ির ডাটা থেকে ওনারের আইডিকে 'carOwnerId' নাম দিয়ে আলাদা করছি যেন জটলা না পাকায়
    const { carName, carType, availabilityStatus, dailyRentPrice, description,
        imageUrl, pickupLocation, seatCapacity, userId: carOwnerId, bookingCount,
        _id: carId } = carDetail;

    const router = useRouter();
    const session = useSession();

    const user = session?.data?.user;
    console.log("Book user:", user);

    const handlaBookedCar = async (e) => {
        e.preventDefault();
        const form = e.target;

        if (!user?.id) {
            toast.error("Please login to book this car!");
            return;
        }

        const formData = new FormData(form);
        const { data: tokenData } = await authClient.token();

        // ফর্ম থেকে স্পেশাল নোটের ডাটা সঠিকভাবে নেওয়া
        const formEntries = Object.fromEntries(formData.entries());

        const bookedData = {
            // ড্রাইভার অপশন এবং স্পেশাল নোটের ভ্যালু এর ভেতরে আসবে
            needDriver: formEntries.needDriver,
            specialNote: formEntries.specialNote,

            // আইডি লজিক ফিক্স:
            userId: user.id,          // এটি হলো বুকিং করা ইউজারের আইডি (যে লগইন আছে)
            carOwnerId: carOwnerId,   // এটি হলো যে গাড়িটি আপলোড করেছে তার আইডি
            carId: carId,             // মূল গাড়ির আইডি

            // বাকি গাড়ির ইনফরমেশন
            bookingDte: new Date().toLocaleDateString(),
            carName,
            carType,
            availabilityStatus,
            dailyRentPrice,
            description,
            imageUrl,
            pickupLocation,
            seatCapacity,
            bookingCount
        };

        try {
            const data = await bookingService.cretaeBooking(bookedData, tokenData);
            console.log("Booking Success Response:", data);

            form.reset();
            toast.success(`${data.message || "Car booked successfully!"}`);

            revalidateAnyPath("/manage-cars/mybookings");
            router.push('/manage-cars/mybookings');

        } catch (error) {
            console.log(error);
            toast.error(error.message || "Failed to book car");
        }
    };

    return (
        <div className=" space-y-4 w-full lg:w-1/3 card-primary rounded-none p-6   h-fit ">
            <h2 className="text-xl font-bold text-primary mb-4">Book This Car</h2>

            <form
                onSubmit={handlaBookedCar}
                className='space-y-4'
            >
                {/* ১. Select এর নাম 'needDriver' করা হলো (আগে availabilityStatus ছিল যা কনফিউশন তৈরি করছিল) */}
                <Select
                    name='needDriver'
                    type="select"
                    placeholder="Select Driver Option">
                    <Label>Need a Driver?</Label>
                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <Select.Listbox>
                            <ListBox.Item id="yes" textValue="Yes">
                                Yes
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="no" textValue="No">
                                No
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        </Select.Listbox>
                    </Select.Popover>
                </Select>

                {/* ২. TextArea এর নাম 'specialNote' করা হলো (আগে description ছিল) */}
                <TextField name="specialNote">
                    <Label>Special Note</Label>
                    <TextArea
                        name="specialNote"
                        aria-label="Special note for booking"
                        className="h-32 w-full"
                        placeholder="Write any special note about the car..."
                    />
                </TextField>

                <Button
                    type='submit'
                    className="mt-3 w-full button-outline bg-transparent">
                    Book Now
                </Button>
            </form>

            <p className="text-center text-[11px] text-secondary">
                ✓ Secure Booking. No Hidden Charges.
            </p>
        </div>
    );
}