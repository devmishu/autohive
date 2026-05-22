import Image from 'next/image';
import React from 'react';
import { FaCar, FaCheckSquare } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosCheckmark } from 'react-icons/io';
import { PiSeatFill } from 'react-icons/pi';
import { SlCalender } from 'react-icons/sl';
import { TbFileDescriptionFilled } from 'react-icons/tb';

const MyBookingCard = ({ carName, imageUrl, carType, bookingDte, pickupLocation, seatCapacity, dailyRentPrice, description }) => {
    return (
        <div className="card-primary  flex flex-col md:flex-row items-stretch gap-0 w-full md:max-w-5xl mx-auto overflow-hidden shadow-sm">


            <div className="w-full md:w-1/4 h-56 md:h-auto relative overflow-hidden min-h-55 shrink-0">
                <div className='absolute inset-0 w-full h-full'>
                    <Image
                        src={imageUrl}
                        alt={carName}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className='object-cover object-center'
                        priority={true}
                    />
                </div>
            </div>


            <div className="w-full md:w-1/2 flex flex-col justify-center p-6">

                <div className="flex items-center space-x-3 mb-4">
                    <h2 className="text-xl font-bold text-primary">{carName}</h2>
                    <span className="bg-emerald-50 dark:bg-emerald-950/50 text-secendary  text-xs px-2.5 py-0.5 rounded-md font-medium border border-emerald-100 dark:border-emerald-900/30">
                        {carType}
                    </span>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm">

                    <div className="flex items-start space-x-2.5">
                        <div className='text-lg mt-2'>
                            <SlCalender /> 
                        </div>
                        <div>
                            <p className="text-secondary text-xs font-medium">Booking Date</p>
                            <p className="text-primary font-semibold">{bookingDte}</p>
                        </div>
                    </div>


                    <div className="flex items-start space-x-2.5">
                        <div className='text-lg mt-2'>
                            <FaCar />
                        </div>
                        <div>
                            <p className="text-secondary text-xs font-medium">Car Type</p>
                            <p className="text-primary font-semibold">{carType}</p>
                        </div>
                    </div>


                    <div className="flex items-start space-x-2.5">
                     
                         <div className='text-lg mt-2'>
                           <FaLocationDot />
                        </div>
                        <div>
                            <p className="text-secondary text-xs font-medium">Pickup Location</p>
                            <p className="text-primary font-semibold">{pickupLocation}</p>
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="flex items-start space-x-2.5">

                        <div className='text-lg mt-2'>
                            <FaCheckSquare />
                        </div>
                        <div>
                            <p className="text-secondary text-xs font-medium">Availability</p>
                            <p className="text-primary font-semibold">Driver Included</p>
                        </div>
                    </div>


                    <div className="flex items-start space-x-2.5">
                        <div className='text-lg mt-2'>
                           <PiSeatFill />
                        </div>
                        
                        <div>
                            <p className="text-secondary text-xs font-medium">Seat Capacity</p>
                            <p className="text-primary font-semibold">{seatCapacity} Seats</p>
                        </div>
                    </div>


                    <div className="flex items-start space-x-2.5">
                       <div className='text-lg mt-2'>
                            <TbFileDescriptionFilled />
                        </div>
                        <div>
                            <p className="text-secondary text-xs font-medium">Description</p>
                            <p className="text-primary font-semibold tracking-wider">{description}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full md:w-1/4 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-zinc-200 dark:border-zinc-700 p-6 shrink-0 self-stretch bg-zinc-50/50 dark:bg-zinc-800/30">

                <div className="text-center w-full mb-5">
                    <p className="text-secondary text-xs font-medium mb-0.5">Total Price</p> 
                    <p className="text-2xl font-bold text-secondary">${dailyRentPrice}</p>
                    <p className="text-secondary text-xs">(3 Days)</p>
                </div>


                <div className="w-full max-w-45">
                    <div className="bg-emerald-50 dark:bg-emerald-950/30 text-secondary  border border-emerald-100 dark:border-emerald-900/40 text-xs font-semibold py-2 px-4  flex items-center justify-center space-x-1.5 w-full">
                        <IoIosCheckmark size='20'/>
                        <span>Confirmed</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MyBookingCard 