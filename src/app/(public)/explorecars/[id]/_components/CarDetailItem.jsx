import React from 'react';

export default function CarDetailItem({ imageUrl, carName, carType, seatCapacity, description, availabilityStatus, bookingCount, dailyRentPrice, pickupLocation }) {
    return (
        <div className="w-full lg:w-2/3 card-primary rounded-none ">

            <div className="w-full h-80 md:h-100  overflow-hidden mb-4 ">
                <img
                    src={imageUrl}
                    alt="Toyota RAV4"
                    className="w-full h-full object-cover"
                />
            </div>



            <div className='p-6'>

                <h1 className="text-2xl md:text-3xl font-bold text-primary mb-3 ">{carName}</h1>

                <div className="inline-block button-outline  px-4 py-1 rounded mb-2 bg-transparent">
                    <span
                        className={` py-2 rounded-full text-sm md:text-base font-semibold text-primary`}
                    >
                        {availabilityStatus} 
                    </span>
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
                    <span>⚙️ Automatic</span>
                    <span>👤 {seatCapacity} Seats</span>
                    <span>⛽ Petrol</span>
                    <span>❄️ AC</span>
                </div>


                <p className="text-secondary text-sm leading-relaxed mb-6">
                    {description}
                </p>


                <div className="mb-6">
                    <h3 className="text-base font-bold text-primary mb-3">Features</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {['Bluetooth', 'Backup Camera', 'Cruise Control', 'USB Charger', 'Air Conditioning', 'Power Windows'].map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2 p-2.5 section-bg rounded-lg text-sm text-primary">
                                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="border-t border-zinc-200 dark:border-zinc-700 pt-4">
                    <h3 className="text-base font-bold text-primary mb-3">Car Specifications</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                            <span className="text-secondary block text-xs mb-0.5">Engine</span>
                            <span className="font-semibold text-primary">2.5L Petrol</span>
                        </div>
                        <div>
                            <span className="text-secondary block text-xs mb-0.5">Mileage</span>
                            <span className="font-semibold text-primary">12 km/l</span>
                        </div>
                        <div>
                            <span className="text-secondary block text-xs mb-0.5">Transmission</span>
                            <span className="font-semibold text-primary">Automatic</span>
                        </div>
                        <div>
                            <span className="text-secondary block text-xs mb-0.5">Fuel Type</span>
                            <span className="font-semibold text-primary">Petrol</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}