"use client"
import React from 'react';
import { Button, Description, FieldError, Form, Input, Label, TextField, ListBox, Select, TextArea } from "@heroui/react";

const AddCarPage = () => {

    const addCar = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        // Convert FormData to a readable object
        const carData = Object.fromEntries(formData.entries());

        console.log(carData);

        // const { name, userImage, email, password } = signupData


        const { data, error } = await authClient.signUp.email({
            name,
            userImage,
            email,
            password
        });

        console.log({ data, error });

        if (data) {
            alert('Acount created Sessufully')
        }
        if (error) {
            alert(error.message);
        }

    };


    return (
        <div className='app-container mt-20'>
            Add Car :

            <div className='card-primary p-10 max-w-[600px] mx-auto'>
                <Form
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
                        name="price"
                        type="number"
                    >
                        <Label>Daily Rent Price</Label>
                        <Input placeholder="Image url" className="rounded-none" />
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
                                <ListBox.Item id="florida" textValue="Florida">
                                    SUV
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="delaware" textValue="Delaware">
                                    Sedan
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="california" textValue="California">
                                    Hatchback
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="texas" textValue="Texas">
                                    Luxury
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="new-york" textValue="New York">
                                    New York
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="washington" textValue="Washington">
                                    Washington
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <TextField
                        isRequired
                        name="imageURL"
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

                    <TextArea
                        aria-label="Quick project update"
                        className="h-32 "
                        placeholder="Share a quick project update..."
                    />

                    <Select
                        name='carType'
                        type="select"

                        placeholder="Select car type ">
                        <Label>Availability Status</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="florida" textValue="Florida">
                                    Available
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="delaware" textValue="Delaware">
                                    Unavailable
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                            </ListBox>
                        </Select.Popover>
                    </Select>


                    <div className="flex gap-2">
                        <button type="submit" className="button-primary">
                            Add Cars
                        </button>

                        <button type="reset" className="button-outline">
                            Reset
                        </button>

                    </div>

                </Form>
            </div>

        </div>
    );
};

export default AddCarPage;