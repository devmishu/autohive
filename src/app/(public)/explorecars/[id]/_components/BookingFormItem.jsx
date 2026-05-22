"use client"
import { revalidateAnyPath } from '@/actions/revalidate';
import { authClient, useSession } from '@/lib/auth-client';
import { bookingService } from '@/services/bookingService';
import { Button, Label, ListBox, Select, TextArea, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

export default function BookingFormItem({ carDetail }) {
    const { carName, carType, availabilityStatus, dailyRentPrice, description,
        imageUrl, pickupLocation, seatCapacity, userId, bookingCount,
        _id: carId } = carDetail;

    const router = useRouter();
    const session = useSession();

    const user = session?.data?.user;
    console.log("Book user:", user);


    const handlaBookedCar = async (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(e.target);

        const { data: tokenData } = await authClient.token()

        const bookedData = {
            ...Object.fromEntries(formData.entries()),
            userId: user?.id,
            bookingDte: new Date().toLocaleDateString(),
            carName,
            carType,
            availabilityStatus,
            dailyRentPrice,
            description,
            imageUrl,
            pickupLocation,
            seatCapacity,
            bookingCount,
            carId
        };



        try {

            const data = await bookingService.cretaeBooking(bookedData, tokenData);

            console.log(data);

            form.reset();
            toast.success(`${data.message}`);

            revalidateAnyPath("/manage-cars/mybookings");
            router.push('/manage-cars/mybookings');

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }

    };

    return (
        <div className=" space-y-4 w-full lg:w-1/3 card-primary rounded-none p-6   h-fit ">
            <h2 className="text-xl font-bold text-primary mb-4">Book This Car</h2>

            <form
                onSubmit={handlaBookedCar}
                className='space-y-4'
            >
                <Select
                    name='availabilityStatus'
                    type="select"

                    placeholder="Select Driver Option ">
                    <Label>Need a Driver?</Label>
                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item id="available" textValue="Available">
                                Yes
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="unavailable" textValue="Unavailable">
                                No
                                <ListBox.ItemIndicator />
                            </ListBox.Item>

                        </ListBox>
                    </Select.Popover>
                </Select>

                <TextField
                    name="specialNote"
                    type="text"
                >
                    <Label>SpecialNote</Label>
                    <TextArea
                        name="description"
                        aria-label="Quick project update"
                        className="h-32 w-full"
                        placeholder="Write any special note about the car..."
                    />
                </TextField>


                <Button
                    type='submit'
                    className="mt-3 w-full button-primary ">
                    Book Now
                </Button>
            </form>


            <p className="text-center text-[11px] text-secondary">
                ✓ Secure Booking. No Hidden Charges.
            </p>
        </div>
    );
}