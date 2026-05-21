"use client";

import React from "react";
import { motion } from "framer-motion";

const CompanyStats = () => {
    const stats = [
        { id: 1, value: "50+", label: "Premium Brands" },
        { id: 2, value: "2,500+", label: "Happy Customers" },
        { id: 3, value: "150+", label: "Cars Fleets" },
        { id: 4, value: "99.8%", label: "Satisfaction Rate" },
    ];

    return (
        <section className="py-20 bg-transparent border-b border-zinc-200/50 dark:border-zinc-800/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col items-center lg:items-start text-center lg:text-left"
                        >
                            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-red-500 mb-2">
                                {stat.value}
                            </h2>
                            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 tracking-wide uppercase">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyStats;