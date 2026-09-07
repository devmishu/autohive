import React from 'react';
import { montserrat } from '@/app/layout.js';

const BrandLogos = () => {
    const brands = [
        {
            id: 1,
            name: "Toyota",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg"
        },
        {
            id: 2,
            name: "Honda",
            logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg"
        },
        {
            id: 3,
            name: "BMW",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
        },
        {
            id: 4,
            name: "Nissan",
            logo: "https://w0.peakpx.com/wallpaper/817/465/HD-wallpaper-nissan-logo-logo-nissan.jpg"
        },
        {
            id: 5,
            name: "Hyundai",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg"
        },
        {
            id: 6,
            name: "Mercedes-Benz",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg"
        }
    ];

    return (
        <section className="py-24 main-bg text-primary transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center max-w-xl mx-auto mb-16">
                    <span className={`${montserrat.className} font-bold tracking-widest text-red-500  uppercase`}>Trusted Fleet Partners</span>

                    <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold mt-2 tracking-tight`}>
                        Featuring World-Class Car Brands
                    </h2>
                    <p className="text-secondary mt-4 text-sm leading-relaxed">
                        Drive with confidence in vehicles from the world&apos;s leading and most reliable automotive manufacturers.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {brands.map((brand) => (
                        <div
                            key={brand.id}
                            className="group p-6 card-primary flex flex-col items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md rounded-xl h-32"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="max-h-12 w-auto object-contain opacity-80 dark:invert dark:opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                            />
                            <span className="text-xs text-secondary mt-3 font-medium tracking-wide">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BrandLogos;