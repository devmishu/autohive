import React from 'react';
import DeleteAddedCar from './DeleteAddedCar';
import EditAddedCar from './EditAddedCar';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@heroui/react';

const MyAddedCarItem = ({ id, imageUrl, carName, carType, seatCapacity, description, availabilityStatus, bookingCount, dailyRentPrice, pickupLocation }) => {




    return (
        <div className="w-full mx-auto card-primary shadow-md overflow-hidden flex flex-col md:flex-row gap-10">


            <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden min-h-75">

                <div className='absolute inset-0 w-full h-full'>
                    <Image
                        src={imageUrl}
                        alt={carName}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className='object-cover object-center'
                        priority={true}
                    />
                </div>
            </div>


            <div className='p-4 w-full md:w-1/2 flex flex-col justify-between'>
                <div>

                    <div>
                        <div className="flex justify-between items-start">
                            <h2 className="text-2xl font-bold text-primary">{carName}</h2>
                        </div>


                        <div className="text-primary text-xl font-bold mt-1">
                            ${dailyRentPrice} <span className="text-primary text-sm font-normal">/ day</span>
                        </div>


                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 my-4 text-sm text-primary">
                            <div className="flex items-center space-x-2">
                                <span>⛽</span> <span>Petrol</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>👤</span> <span>{seatCapacity} Seats</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>⚙️</span> <span>Automatic</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>⏱️</span> <span>28 KM/L</span>
                            </div>
                        </div>


                        <p className="text-secondary text-sm leading-relaxed mb-4 border-b pb-4">
                            {description}
                        </p>


                        <div className="space-y-1.5 text-xs text-secondary font-medium mb-6">
                            <div className="flex items-center space-x-2">
                                <span>🏷️</span> <span>Category: {carType}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>🪪</span> <span>License: ABC-1234</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>📍</span> <span>Location: {pickupLocation}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <EditAddedCar id={id} imageUrl={imageUrl} />

                        <Link href={`/manage-cars/myaddedcars/edit/${id}`}>
                            <Button className="button-outline text-black bg-transparent">
                                Edit
                            </Button> 
                        </Link>

                        <DeleteAddedCar id={id} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyAddedCarItem 