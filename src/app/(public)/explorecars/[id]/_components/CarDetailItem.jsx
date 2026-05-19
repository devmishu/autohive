import React from 'react';

export default function CarDetailItem() {
    return (
        <div className="w-full lg:w-2/3 card-primary p-6">
            {/* Main Image */}
            <div className="w-full h-80 md:h-[400px] rounded-xl overflow-hidden mb-4">
                <img
                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200"
                    alt="Toyota RAV4"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-5 gap-2 mb-6">
                <div className="border-2 border-emerald-600 dark:border-emerald-500 rounded-lg overflow-hidden cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=200" className="object-cover h-14 w-full" />
                </div>
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden cursor-pointer opacity-70 hover:opacity-100">
                        <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=200" className="object-cover h-14 w-full" />
                    </div>
                ))}
            </div>

            {/* Title & Core Specs */}
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-3">Toyota RAV4 Adventure 2023</h1>
            <div className="flex flex-wrap gap-4 text-sm text-secondary mb-6 border-b border-zinc-200 dark:border-zinc-700 pb-4">
                <span>🚙 SUV</span>
                <span>⚙️ Automatic</span>
                <span>👤 5 Seats</span>
                <span>⛽ Petrol</span>
                <span>❄️ AC</span>
            </div>

            {/* Description */}
            <p className="text-secondary text-sm leading-relaxed mb-6">
                The Toyota RAV4 Adventure 2023 is built for those who love adventure and comfort.
                It offers a powerful engine, spacious interior, and advanced safety features.
            </p>

            {/* Features Grid */}
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

            {/* Car Specifications */}
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
    );
}