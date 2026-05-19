import { Button, Label, ListBox, Select, TextArea, TextField } from '@heroui/react';
import React from 'react';

export default function BookingFormItem() {
    return (
        <div className=" space-y-4 w-full lg:w-1/3 card-primary p-6   h-fit ">
            <h2 className="text-xl font-bold text-primary mb-4">Book This Car</h2>

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
                name="pickupLocation"
                type="text"
            >
                <Label>Spesial Note</Label>
                <TextArea
                    name="description"
                    aria-label="Quick project update"
                    className="h-32 w-full"
                    placeholder="Share a car description."
                />
            </TextField>



            {/* <button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold py-3 rounded-xl flex items-center justify-center space-x-2 transition-all cursor-pointer mb-3">
                <span>📅</span> <span>Book Now</span>
            </button> */}

            <Button className="w-full button-outline bg-transparent">
                Book Now
            </Button>

            {/* Security Info */}
            <p className="text-center text-[11px] text-secondary">
                ✓ Secure Booking. No Hidden Charges.
            </p>
        </div>
    );
}