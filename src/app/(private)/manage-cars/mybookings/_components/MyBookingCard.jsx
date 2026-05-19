import React from 'react';

const MyBookingCard = ({ carName }) => {
    return (
        <div className="card-primary p-4 flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto">

            {/* 1. Image Section */}
            <div className="w-full md:w-1/4 h-40 rounded-xl overflow-hidden shrink-0">
                <img
                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=600"
                    alt="Toyota Land Cruiser"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 2. Details Section */}
            <div className="w-full md:w-2/3 flex flex-col justify-center">
                {/* Title and Badge */}
                <div className="flex items-center space-x-3 mb-4">
                    <h2 className="text-xl font-bold text-primary">{carName}</h2>
                    <span className="bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs px-2.5 py-0.5 rounded-md font-medium border border-emerald-100 dark:border-emerald-900/30">
                        SUV
                    </span>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
                    {/* Booking Date */}
                    <div className="flex items-start space-x-2.5">
                        <span className="text-lg mt-0.5">📅</span>
                        <div>
                            <p className="text-secondary text-xs">Booking Date</p>
                            <p className="text-primary font-semibold">18 May 2025</p>
                        </div>
                    </div>

                    {/* Car Type */}
                    <div className="flex items-start space-x-2.5">
                        <span className="text-lg mt-0.5">🚗</span>
                        <div>
                            <p className="text-secondary text-xs">Car Type</p>
                            <p className="text-primary font-semibold">SUV</p>
                        </div>
                    </div>

                    {/* Pickup Location */}
                    <div className="flex items-start space-x-2.5">
                        <span className="text-lg mt-0.5">📍</span>
                        <div>
                            <p className="text-secondary text-xs">Pickup Location</p>
                            <p className="text-primary font-semibold">Dhaka Airport</p>
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="flex items-start space-x-2.5">
                        <span className="text-lg mt-0.5">✅</span>
                        <div>
                            <p className="text-secondary text-xs">Availability</p>
                            <p className="text-primary font-semibold">Driver Included</p>
                        </div>
                    </div>

                    {/* Seat Capacity */}
                    <div className="flex items-start space-x-2.5">
                        <span className="text-lg mt-0.5">👥</span>
                        <div>
                            <p className="text-secondary text-xs">Seat Capacity</p>
                            <p className="text-primary font-semibold">7 Seats</p>
                        </div>
                    </div>

                    {/* Booking ID */}
                    <div className="flex items-start space-x-2.5">
                        <span className="text-lg mt-0.5">#</span>
                        <div>
                            <p className="text-secondary text-xs">Booking ID</p>
                            <p className="text-primary font-semibold tracking-wider">BK-682415</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Action & Pricing Section */}
            <div className="w-full md:w-1/4 flex flex-col items-center md:items-end justify-between border-t md:border-t-0 md:border-l border-zinc-200 dark:border-zinc-700 pt-4 md:pt-0 md:pl-6 shrink-0 self-stretch">
                {/* Pricing */}
                <div className="text-center md:text-right mb-4 md:mb-0">
                    <p className="text-secondary text-xs mb-0.5">Total Price</p>
                    <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">$240.00</p>
                    <p className="text-secondary text-xs">(3 Days)</p>
                </div>

                {/* Buttons and Status */}
                <div className="w-full flex flex-col space-y-2 mt-auto">
                    {/* Confirmed Status Badge */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40 text-xs font-semibold py-1.5 px-3 rounded-xl flex items-center justify-center space-x-1.5">
                        <span>✓</span>
                        <span>Confirmed</span>
                    </div>

                    {/* View Details Button */}
                    <button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-medium py-2 px-3 rounded-xl flex items-center justify-center space-x-1 transition-all cursor-pointer">
                        <span>👁️</span>
                        <span>View Details</span>
                    </button>

                    {/* Cancel Booking Button */}
                    <button className="w-full bg-transparent border border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-950/20 text-red-600 dark:text-red-400 text-xs font-medium py-2 px-3 rounded-xl flex items-center justify-center space-x-1 transition-all cursor-pointer">
                        <span>✕</span>
                        <span>Cancel Booking</span>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default MyBookingCard