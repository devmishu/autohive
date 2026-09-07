import React from 'react';
import { HiLocationMarker, HiVolumeUp, HiLightningBolt, HiChip } from 'react-icons/hi';
import { montserrat } from '@/app/layout.js';

const CarFeatureHighlights = () => {
    const carFeatures = [
        {
            id: 1,
            icon: <HiLocationMarker className="w-6 h-6 text-red-600 dark:text-red-500" />,
            title: "Real-Time GPS Tracking",
            desc: "Stay navigated with built-in advanced GPS systems equipped in all our rental vehicles for safe and secure route planning."
        },
        {
            id: 2,
            icon: <HiVolumeUp className="w-6 h-6 text-red-600 dark:text-red-500" />,
            title: "Premium Sound System",
            desc: "Enjoy your favorite road trip playlists with high-definition surround sound audio and seamless smartphone integration."
        },
        {
            id: 3,
            icon: <HiLightningBolt className="w-6 h-6 text-red-600 dark:text-red-500" />,
            title: "Smart Climate Control",
            desc: "Experience ultimate comfort on any terrain with automated dual-zone climate control and ventilated plush seating."
        },
        {
            id: 4,
            icon: <HiChip className="w-6 h-6 text-red-600 dark:text-red-500" />,
            title: "Keyless Entry & Start",
            desc: "Skip the hassle with modern smart keys, push-button ignition, and automated security lockdown features."
        }
    ];

    return (
        <section className="py-24 main-bg text-primary transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center max-w-xl mx-auto mb-16">
                    <span className={`${montserrat.className} font-bold tracking-widest text-red-500  uppercase`}>Modern Comforts</span>
                    <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold mt-2 tracking-tight`}>
                        Engineered for Modern Driving Pleasure
                    </h2>
                    <p className="text-secondary mt-4 text-sm leading-relaxed">
                        Discover the smart tech, luxury amenities, and safety features built right into our elite car selection.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {carFeatures.map((feature) => (
                        <div
                            key={feature.id}
                            className="group p-6 card-primary transition-all duration-300 shadow-sm hover:shadow-md rounded-xl border border-zinc-200 dark:border-zinc-800"
                        >
                            <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                                {feature.icon}
                            </div>

                            <h3 className="text-lg font-semibold tracking-wide transition-colors group-hover:text-red-600 dark:group-hover:text-red-500 duration-200 text-primary">
                                {feature.title}
                            </h3>

                            <p className="text-secondary text-sm mt-2.5 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CarFeatureHighlights;