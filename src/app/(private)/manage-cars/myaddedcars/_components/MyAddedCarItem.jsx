import React from 'react';
import DeleteAddedCar from './DeleteAddedCar';
import EditAddedCar from './EditAddedCar';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { FaCar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

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
                                <span>Seat Capacity:</span> <span>{seatCapacity} Seats</span>
                            </div>

                        </div>


                        <p className="text-secondary text-sm leading-relaxed mb-4 border-b pb-4">
                            {description}
                        </p>


                        <div className="space-y-1.5 text-xs text-secondary font-medium mb-6">
                            <div className="flex items-center space-x-2">

                            </div>
                            <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                                <li className="flex items-center gap-2">
                                    
                                    <FaCar className="text-base text-zinc-500 dark:text-zinc-500 flex-shrink-0" />
                                    <span className="leading-none">
                                        Category: <strong className="font-medium text-zinc-800 dark:text-zinc-200">{carType}</strong>
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    
                                    <IoLocationSharp className="text-base text-zinc-500 dark:text-zinc-500 flex-shrink-0" />
                                    <span className="leading-none">
                                        Location: <strong className="font-medium text-zinc-800 dark:text-zinc-200">{pickupLocation}</strong>
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="flex gap-2">

                        <Link href={`/manage-cars/myaddedcars/edit/${id}`}>
                            <Button className="button-outline text-black bg-transparent dark:text-white">
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