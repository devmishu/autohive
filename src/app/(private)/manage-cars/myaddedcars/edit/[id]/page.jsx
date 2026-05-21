// app/manage-cars/edit-[id]/page.jsx
"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";
import { carService } from "@/services/carService";
import { revalidateAnyPath } from "@/actions/revalidate";
import { Button, Input, Label, Surface, TextField, FieldError, ListBox, Select, TextArea } from "@heroui/react";

const EditCarPage = ({ params }) => {
    // URL থেকে আইডি পাওয়ার জন্য Next.js-এর use() হুক ব্যবহার করা হয়েছে
    const { id } = use(params);
    const router = useRouter();

    const handleEditMyCar = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedData = Object.fromEntries(formData.entries());

        try {
            const data = await carService.editMyCar(id, updatedData);
            alert(`${data.message}`);

            // ডাটা আপডেট শেষে আগের পেজে ব্যাক করবে এবং রিভ্যালিডেট করবে
            revalidateAnyPath("/manage-cars/myaddedcars");
            router.push("/manage-cars/myaddedcars");
        } catch (error) {
            console.error(error);
            alert(error.message || "Something went wrong!");
        }
    };

    return (
        <div className="p-5">
            <div className=" w-full max-w-xl mx-auto my-10 p-3 card-primary  shadow-lg">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">Edit Your Car</h1>
                    <p className="text-sm text-muted mt-1">Update the car details below.</p>
                </div>

                <Surface className="rounded p-4 bg-transparent">
                    <form onSubmit={handleEditMyCar} className="flex flex-col gap-5">
                        <TextField className="w-full" name="dailyRentPrice" type="number">
                            <Label>Daily Rent Price</Label>
                            <Input placeholder="Enter price" />
                        </TextField>

                        <div className="flex flex-col gap-1.5">
                            <Label className="text-sm font-medium">Description</Label>
                            <TextArea
                                name="description"
                                className="h-32"
                                placeholder="Share a car description."
                            />
                        </div>

                        <Select name='availabilityStatus' placeholder="Select Availability Status">
                            <Label>Availability Status</Label>
                            <Select.Trigger><Select.Value /><Select.Indicator /></Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="available" textValue="Available">Available</ListBox.Item>
                                    <ListBox.Item id="unavailable" textValue="Unavailable">Unavailable</ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        <TextField isRequired name="imageUrl" type="url">
                            <Label>Image URL</Label>
                            <Input placeholder="Image url" />
                            <FieldError />
                        </TextField>

                        <Select name='carType' placeholder="Select car type">
                            <Label>Car Type</Label>
                            <Select.Trigger><Select.Value /><Select.Indicator /></Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="suv" textValue="SUV">SUV</ListBox.Item>
                                    <ListBox.Item id="sedan" textValue="Sedan">Sedan</ListBox.Item>
                                    <ListBox.Item id="hatchback" textValue="Hatchback">Hatchback</ListBox.Item>
                                    <ListBox.Item id="luxury" textValue="Luxury">Luxury</ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        <TextField isRequired name="pickupLocation" type="text">
                            <Label>Pickup Location</Label>
                            <Input placeholder="Pickup Location" />
                            <FieldError />
                        </TextField>

                        {/* Form Actions */}
                        <div className="flex justify-end gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                            <Button
                                type="button"
                                onClick={() => router.back()}
                                className="button-outline bg-transparent"
                            >
                                Cancel
                            </Button>
                            <Button type="submit" className="button-primary">
                                Update Car
                            </Button>
                        </div>
                    </form>
                </Surface>
            </div>
        </div>
    );
};

export default EditCarPage;