import { Label, ListBox, Select } from '@heroui/react';
import React from 'react';

const FilterBar = ({ className }) => {
    return (
        <Select className={`className`}
            name='carType'
            type="select"

            placeholder="Select car type ">
            <Label>Filter by car type</Label>
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
    );
};

export default FilterBar;