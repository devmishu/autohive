import React from 'react';

import { montserrat } from '@/app/layout.js';
import { HiCheckCircle, HiShieldCheck, HiTruck } from 'react-icons/hi';
import { HiWrench } from 'react-icons/hi2';


const RentalSafetyGuidelines = () => {
    const safetyFeatures = [
        {
            id: 1,
            icon: <HiShieldCheck className="w-6 h-6 text-red-600 dark:text-red-500" />,
            title: "Rigorous Inspection",
            desc: "Every vehicle undergoes a strict multi-point mechanical and safety assessment before each key handover."
        },
        {
            id: 2,
            icon: <HiWrench className="w-6 h-6 text-red-600 dark:text-red-500" />,
            title: "Sanitized & Detailed",
            desc: "Interiors, steering controls, and high-touch cabin surfaces are meticulously cleaned and detailed after every trip."
        },
        {
            id: 3,
            icon: <HiCheckCircle className="w-6 h-6 text-red-600 dark:text-red-500" />,
            title: "24/7 Roadside Help",
            desc: "Drive with absolute peace of mind knowing our emergency assistance and support crew are always available."
        },
        {
            id: 4,
            icon: <HiTruck className="w-6 h-6 text-red-600 dark:text-red-500" />,
            title: "Fully Insured & Equipped",
            desc: "All cars are backed by comprehensive insurance policies and equipped with mandatory safety gear like emergency kits."
        }
    ];

    return (
        <section className="py-24 section-bg text-primary transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center max-w-xl mx-auto mb-16">
                    <span className={`${montserrat.className} font-bold tracking-widest text-red-500  uppercase`}>Safety First</span>
                    <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold mt-2 tracking-tight`}>
                        Your Safety, Our Ultimate Priority
                    </h2>
                    <p className="text-secondary mt-4 text-sm leading-relaxed">
                        We adhere to strict driving safety standards and vehicle maintenance guidelines to ensure a secure journey on the road.
                    </p>
                </div>

                

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {safetyFeatures.map((item) => (
                        <div
                            key={item.id}
                            className="group p-6 card-primary transition-all duration-300 shadow-sm hover:shadow-md rounded-xl"
                        >
                            <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                                {item.icon}
                            </div>

                            <h3 className="text-lg font-semibold tracking-wide transition-colors group-hover:text-red-600 dark:group-hover:text-red-500 duration-200 text-primary">
                                {item.title}
                            </h3>

                            <p className="text-secondary text-sm mt-2.5 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default RentalSafetyGuidelines; 