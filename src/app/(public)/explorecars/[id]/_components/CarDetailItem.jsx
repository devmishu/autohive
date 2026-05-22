import Image from 'next/image';
import React from 'react';

export default function CarDetailItem({ imageUrl, carName, carType, seatCapacity, description, availabilityStatus, bookingCount, dailyRentPrice, pickupLocation }) {
    return (
        <div className="w-full lg:w-2/3 card-primary rounded-none ">



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



            <div className='p-6'>

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

                <div className="flex flex-wrap gap-4 text-sm text-secondary mb-6 border-b border-zinc-200 dark:border-zinc-700 pb-4">
                    <span>🚙 {carType}</span>
                    <span>👤 {seatCapacity} Seats</span>
                </div>


                <p className="text-secondary text-sm leading-relaxed mb-6">
                    {description}
                </p>
            </div>
        </div>
    );
}