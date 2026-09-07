import React from 'react';
import { HiTrendingUp, HiUserGroup, HiGlobeAlt, HiStar } from 'react-icons/hi';
import { montserrat } from '@/app/layout.js';

const StatsSection = () => {
    const stats = [
        {
            id: 1,
            icon: <HiTrendingUp className="w-6 h-6 text-red-600 dark:text-red-500" />,
            value: "500+",
            label: "Verified Cars Available"
        },
        {
            id: 2,
            icon: <HiUserGroup className="w-6 h-6 text-red-600 dark:text-red-500" />,
            value: "10,000+",
            label: "Successful Rentals"
        },
        {
            id: 3,
            icon: <HiGlobeAlt className="w-6 h-6 text-red-600 dark:text-red-500" />,
            value: "50+",
            label: "Cities Covered"
        },
        {
            id: 4,
            icon: <HiStar className="w-6 h-6 text-red-600 dark:text-red-500" />,
            value: "99%",
            label: "Customer Satisfaction"
        }
    ];

    return (
        <section className="py-24 main-bg text-primary transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center max-w-xl mx-auto mb-16">
                    <span className={`${montserrat.className} font-bold tracking-widest text-red-600 dark:text-red-500 uppercase`}>Our Milestones</span>
                    <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold mt-2 tracking-tight text-primary`}>
                        Trusted by Drivers Nationwide
                    </h2>
                    <p className="text-secondary mt-4 text-sm leading-relaxed">
                        Explore our growth and the community milestones that make AutoHive your premier car rental choice.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="group p-6 card-primary transition-all duration-300 shadow-sm hover:shadow-md rounded-xl"
                        >
                            <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                                {stat.icon}
                            </div>

                            <h3 className={`${montserrat.className} text-3xl font-bold tracking-tight text-primary`}>
                                {stat.value}
                            </h3>

                            <p className="text-secondary text-sm mt-2 leading-relaxed">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default StatsSection;