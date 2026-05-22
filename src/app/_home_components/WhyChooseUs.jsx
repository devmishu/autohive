import React from 'react';
import { HiShieldCheck, HiBadgeCheck, HiClock, HiCurrencyDollar } from 'react-icons/hi';
import { montserrat } from '@/app/layout.js';

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            icon: <HiBadgeCheck className="w-6 h-6 text-red-500" />,
            title: "Premium Fleet",
            desc: "Only the finest and most well-maintained luxury cars to ensure a class-apart driving experience."
        },
        {
            id: 2,
            icon: <HiShieldCheck className="w-6 h-6 text-red-500" />,
            title: "Secure Booking",
            desc: "Your data and payments are protected by our advanced enterprise-grade security protocols."
        },
        {
            id: 3,
            icon: <HiCurrencyDollar className="w-6 h-6 text-red-500" />,
            title: "No Hidden Fees",
            desc: "Transparent upfront pricing. What you see is exactly what you pay, with absolutely zero surprises."
        },
        {
            id: 4,
            icon: <HiClock className="w-6 h-6 text-red-500" />,
            title: "24/7 Premium Support",
            desc: "Our dedicated expert team is always available to assist you at any hour, anywhere on the road."
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">

                
                <div className="text-center max-w-xl mx-auto mb-16">
                    <span className={`${montserrat.className}  font-bold tracking-widest text-red-500 uppercase`}>Why Choose Us</span>
                    <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold mt-2 tracking-tight`}>
                        Our Commitment to Premium Quality
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-sm leading-relaxed">
                        We blend luxury, convenience, and absolute transparency to redefine your car-renting experience.
                    </p>
                </div>

               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="group p-6  border border-zinc-100 dark:border-zinc-900 bg-zinc-50/40 dark:bg-zinc-900/20 hover:bg-white dark:hover:bg-zinc-900/60 hover:border-zinc-200 dark:hover:border-zinc-800 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            
                            <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                                {feature.icon}
                            </div>

                           
                            <h3 className="text-lg font-semibold tracking-wide transition-colors group-hover:text-red-500 duration-200">
                                {feature.title}
                            </h3>

                            
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2.5 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;