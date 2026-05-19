"use client"
import React from 'react';
import DeleteAddedCar from './DeleteAddedCar';
import { Button } from '@heroui/react';

const MyAddedCarItem = ({ id, imageUrl }) => {




    return (
        <div className="w-full mx-auto card-primary  shadow-md overflow-hidden p-4  flex flex-col md:flex-row gap-6">

            {/* LEFT SIDE: Image Section */}
            <div className=" w-full  h-64 md:h-auto rounded-xl overflow-hidden">
                {/* Car Image */}
                <img
                    src={imageUrl}
                    alt="Toyota Corolla 2022"
                    className="w-full h-full object-cover"
                />

                {/* Available Badge */}
                {/* <span className="  bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-md">
                    Available
                </span> */}

            </div>

            {/* RIGHT SIDE: Details Section */}
            <div className="w-full  flex flex-col justify-between">

                {/* Header (Title & Three Dots) */}
                <div>
                    <div className="flex justify-between items-start">
                        <h2 className="text-2xl font-bold text-primary">Toyota Corolla 2022</h2>

                    </div>

                    {/* Price */}
                    <div className="text-primary text-xl font-bold mt-1">
                        $45 <span className=" text-primary text-sm font-normal">/ day</span>
                    </div>

                    {/* Key Features Grid */}
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 my-4 text-sm text-primary">
                        <div className="flex items-center space-x-2">
                            <span>⛽</span> <span>Petrol</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>👤</span> <span>5 Seats</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>⚙️</span> <span>Automatic</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>⏱️</span> <span>28 KM/L</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-secondary text-sm leading-relaxed mb-4 border-b  pb-4">
                        A comfortable and fuel-efficient sedan perfect for city drives and long trips.
                    </p>

                    {/* Metadata (Added on, Category, etc.) */}
                    <div className="space-y-1.5 text-xs text-secondary font-medium mb-6">
                        <div className="flex items-center space-x-2">
                            <span>📅</span> <span>Added on: May 28, 2025</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>🏷️</span> <span>Category: Sedan</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>🪪</span> <span>License: ABC-1234</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>📍</span> <span>Location: Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="flex gap-2">
                    <Button className="button-outline bg-transparent">Edit</Button>

                    <DeleteAddedCar id={id} />

                </div>

            </div>
        </div>
    );
}

export default MyAddedCarItem