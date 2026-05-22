import Image from 'next/image';
import React from 'react';
import { FaCar, FaCarAlt } from 'react-icons/fa';
import { PiSeatFill } from 'react-icons/pi';

export default function CarDetailItem({ imageUrl, carName, carType, seatCapacity, description, availabilityStatus, bookingCount, dailyRentPrice, pickupLocation }) {
    return (
        <div className=" w-full lg:w-2/3 card-primary rounded-none ">



            <div className="relative w-full h-56 sm:h-72 md:h-[500px] lg:h-[650px] bg-gray-900 overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={carName}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                    priority
                />
            </div>



            <div className='p-6 space-y-3'>

                <h1 className="text-2xl md:text-3xl font-bold text-primary mb-3 ">{carName}</h1>

                <div className={`my-3 w-fit px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md
                            ${availabilityStatus === 'available' ? 'bg-green-600' : 'bg-red-600'}`}
                >
                    {availabilityStatus}
                </div>



                <p className='py-1 text-primary text-sm md:text-base font-medium'>
                    <span className='text-secondary'>Daily Rent Price: </span>${dailyRentPrice}
                </p>
                <p className='py-1 text-primary text-sm md:text-base font-medium'>
                    <span className='text-secondary '>Pickup Location: </span>{pickupLocation}
                </p>

                <p className='text pt-1 pb-2 text-secondary'>{bookingCount} happy customers booked this car</p>



                <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-center gap-2">

                        <FaCar className="text-base text-zinc-500 dark:text-zinc-500 flex-shrink-0" />
                        <span className="leading-none">
                            Category: <strong className="font-medium text-zinc-800 dark:text-zinc-200">{carType}</strong>
                        </span>
                    </li>
                    <li className="flex items-center gap-2">

                        <PiSeatFill className="text-base text-zinc-500 dark:text-zinc-500 flex-shrink-0" />
                        <span className="leading-none">
                            Seat Capacity: <strong className="font-medium text-zinc-800 dark:text-zinc-200">{seatCapacity} Seats</strong>
                        </span>
                    </li>
                </ul>


                <p className="text-secondary text-sm leading-relaxed mb-6">
                    {description}
                </p>
            </div>
        </div>
    );
}