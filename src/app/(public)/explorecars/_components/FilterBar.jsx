"use client"
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';

const FilterBar = ({ sp }) => {
    const router = useRouter();

    // সার্ভার থেকে আসা sp.carType অনুযায়ী স্টেট ইনিশিয়ালাইজ হবে
    const [filter, setFilter] = useState(sp?.carType || "");

    // URL পরিবর্তন হলে স্টেটের ভ্যালুও যাতে সিঙ্ক থাকে
    useEffect(() => {
        setFilter(sp?.carType || "");
    }, [sp?.carType]);

    const handleFilterChange = (e) => {
        const selectedValue = e.target.value;
        setFilter(selectedValue);

        const params = new URLSearchParams(sp);

        if (selectedValue) {
            params.set("carType", selectedValue);
        } else {
            params.delete("carType");
        }

        router.push(`explorecars?${params.toString()}`);
    };

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="carType" className="text-sm font-medium text-gray-700">
                Filter by car type
            </label>
            <select
                id="carType"
                name="carType"
                value={filter}
                onChange={handleFilterChange}
                className="w-[280px] p-2 border border-gray-300 rounded-lg shadow-sm text-sm outline-none bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
                <option value="">Select car type</option>
                <option value="suv">suv</option>
                <option value="sedan">sedan</option>
                <option value="hatchback">hatchback</option>
                <option value="luxury">luxury</option>
                <option value="sports">sports</option>
                <option value="electric">electric</option>
                <option value="offroad">offroad</option>
            </select>
        </div>
    );
};

export default FilterBar;