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
        <div className="w-full max-w-md flex flex-col gap-1.5">
            {/* Label */}
            <label htmlFor="carType" className="text-xs font-semibold text-primary">
                Filter by Car Type
            </label>

            {/* Select Wrapper */}
            <div className="relative w-full">
                <select
                    id="carType"
                    name="carType"
                    value={filter}
                    onChange={handleFilterChange}
                    className="input-primary w-full pr-10 text-sm appearance-none cursor-pointer"
                >
                    <option value="" className="bg-white dark:bg-zinc-900 text-primary">All Categories</option>
                    <option value="suv" className="bg-white dark:bg-zinc-900 text-primary">SUV</option>
                    <option value="sedan" className="bg-white dark:bg-zinc-900 text-primary">Sedan</option>
                    <option value="hatchback" className="bg-white dark:bg-zinc-900 text-primary">Hatchback</option>
                    <option value="luxury" className="bg-white dark:bg-zinc-900 text-primary">Luxury</option>
                    <option value="sports" className="bg-white dark:bg-zinc-900 text-primary">Sports</option>
                    <option value="electric" className="bg-white dark:bg-zinc-900 text-primary">Electric</option>
                    <option value="offroad" className="bg-white dark:bg-zinc-900 text-primary">Offroad</option>
                </select>

                {/* Custom Premium Dropdown Arrow Icon */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-secondary text-xs">
                    ▼
                </div>
            </div>
        </div>
    );
};

export default FilterBar;