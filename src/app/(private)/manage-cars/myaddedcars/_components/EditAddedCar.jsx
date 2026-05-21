"use client"
import { revalidateAnyPath } from "@/actions/revalidate";
import { carService } from "@/services/carService";
import { Button, Input, Label, Modal, Surface, TextField, FieldError, ListBox, Select, TextArea } from "@heroui/react";
import toast from "react-hot-toast";

const EditAddedCar = ({ id, imageUrl }) => {

    const handleEditMyCar = async (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(e.target);
        const updatedData = Object.fromEntries(formData.entries());
        console.log(updatedData);

        console.log("Edit data:", updatedData);

        try {

            const data = await carService.editMyCar(id, updatedData);

            console.log(data);

            form.reset();

            toast.success(`${data.message}`);
            revalidateAnyPath("/manage-cars/myaddedcars");

        } catch (error) {
            console.log(error);
            alert(error.message);
            toast.error(error.message);
        }
    }


    return (
        <div>
            <Modal>
                <Button className="button-outline bg-transparent">Edit</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">

                        <Modal.Dialog className="sm:max-w-md w-full max-h-[85vh] flex flex-col card-primary rounded-none">
                            <Modal.CloseTrigger />

                            <Modal.Header className="flex-shrink-0">
                                <Modal.Heading>Edit Your Car</Modal.Heading>
                                <p className="mt-1.5 text-sm leading-5 text-muted">
                                    Fill out the form below and we'll get back to you. The modal adapts automatically
                                    when the keyboard appears on mobile.
                                </p>
                            </Modal.Header>


                            <Modal.Body className="p-6 card-primary border-none overflow-y-auto flex-1">
                                <Surface className="rounded border-6" >
                                    <form
                                        onSubmit={handleEditMyCar}
                                        className="flex flex-col gap-4 card-primary border-none">
                                        <TextField className="w-full" name="dailyRentPrice" type="number">
                                            <Label>Daily Rent Price</Label>
                                            <Input placeholder="Enter your name" />
                                        </TextField>
                                        <TextArea
                                            name="description"
                                            aria-label="Quick project update"
                                            className="h-32 "
                                            placeholder="Share a car description."
                                        />
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

                                        <TextField
                                            isRequired
                                            name="imageUrl"
                                            type="url"
                                            defaultValue={imageUrl}
                                        >
                                            <Label>Image URL</Label>
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
                                                    <ListBox.Item id="suv" textValue="SUV">SUV<ListBox.ItemIndicator /></ListBox.Item>
                                                    <ListBox.Item id="sedan" textValue="Sedan">Sedan<ListBox.ItemIndicator /></ListBox.Item>
                                                    <ListBox.Item id="hatchback" textValue="Hatchback">Hatchback<ListBox.ItemIndicator /></ListBox.Item>
                                                    <ListBox.Item id="luxury" textValue="Luxury">Luxury<ListBox.ItemIndicator /></ListBox.Item>
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>

                                        <TextField
                                            isRequired
                                            name="pickupLocation"
                                            type="text"
                                        >
                                            <Label>Pickup Location</Label>
                                            <Input placeholder="Pickup Location" />
                                            <FieldError />
                                        </TextField>
                                    </form>
                                </Surface>
                            </Modal.Body>


                            <Modal.Footer className="flex-shrink-0">
                                <Button slot="close" className="button-outline bg-transparent"> Cancel</Button>
                                <Button type="submit" onClick={handleEditMyCar} className="button-primary">Update Car</Button>
                            </Modal.Footer>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};


export default EditAddedCar;



