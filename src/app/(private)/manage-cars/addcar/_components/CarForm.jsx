"use client"
import { useSession } from '@/lib/auth-client';
import { carService } from '@/services/carService';
import { FieldError, Form, Input, Label, TextField, ListBox, Select, TextArea } from "@heroui/react";
import React from 'react';
import ActionButton from './ActionButton';
import { useRouter } from 'next/navigation';
import { revalidateAnyPath } from '@/actions/revalidate';

const CarForm = () => {
    const router = useRouter();
    const session = useSession();

    const user = session?.data?.user;
    console.log("add car user:", user);

    const handleAddCar = async (e) => {
        e.preventDefault();
        const form = e.target;


        const formData = new FormData(e.target);

        // Convert FormData to a readable object
        const carData = Object.fromEntries(formData.entries());

        carData.userId = user?.id;
        carData.bookingCount = 0;

        console.log("CarData:", carData);

        try {

            const data = await carService.addCar(carData);

            console.log(data);
            alert(`${data.message}`);
            form.reset();

            revalidateAnyPath("explorecars");
            router.push('/explorecars');

        } catch (error) {
            console.log(error);
            alert(error.message);
        }

    };

    return (
        <Form
            onSubmit={handleAddCar}
            className="flex min-w-100  flex-col gap-4 "
            render={(props) => <form {...props} data-custom="foo" />}

        >
            <TextField
                isRequired
                name="carName"
                type="text"
                className="rounded-full "

            >
                <Label>Car Name</Label>
                <Input placeholder="Toyota" className="w-auto" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="dailyRentPrice"
                type="number"
            >
                <Label>Daily Rent Price</Label>
                <Input placeholder="Daily Rent Price" className="rounded-none" />
                <FieldError />
            </TextField>

            <Select
                name='carType'
                type="select"

                placeholder="Select car type ">
                <Label>Car Type</Label>
                <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                    <ListBox> 
                        <ListBox.Item id="suv" textValue="suv">
                            suv
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="sedan" textValue="sedan">
                            sedan
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="hatchback" textValue="hatchback">
                            hatchback
                            <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="luxury" textValue="luxury">
                            luxury
                            <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="sports" textValue="sports">
                            sports
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="electric" textValue="electric">

                            electric
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="offroad" textValue="electric">
                            offroad
                            <ListBox.ItemIndicator />
                        </ListBox.Item>

                    </ListBox>
                </Select.Popover>
            </Select>

            <TextField
                isRequired
                name="imageUrl"
                type="url"
            >
                <Label>Image URL</Label>
                <Input placeholder="Image url" className="rounded-none" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="seatCapacity"
                type="text"
            >
                <Label>Seat Capacity</Label>
                <Input placeholder="Seat Capacity" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="pickupLocation"
                type="text"
            >
                <Label>Pickup Location</Label>
                <Input placeholder="Pickup Location" />
                <FieldError />
            </TextField>

            <TextField>
                <Label>Description</Label>
                <TextArea
                    name="description"
                    aria-label="Quick project update"
                    className="h-32 "
                    placeholder="Share a car description."
                />
            </TextField>


            <Select
                name='availabilityStatus'
                type="select"

                placeholder="Select Availability Status ">
                <Label>Availability Status</Label>
                <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                    <ListBox>
                        <ListBox.Item id="available" textValue="Available">
                            Available
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="unavailable" textValue="Unavailable">
                            Unavailable
                            <ListBox.ItemIndicator />
                        </ListBox.Item>

                    </ListBox>
                </Select.Popover>
            </Select>


            <ActionButton />

        </Form>
    );
};

export default CarForm;