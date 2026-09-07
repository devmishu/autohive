"use client";

import React, { useState } from 'react';

const NewsletterSection = ({ fontClassName }) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <section className="py-24 section-bg text-primary transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6">
                <div className="card-primary p-8 md:p-12 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 text-center">

                   
                    <span className={`${fontClassName}  font-bold tracking-widest text-red-500 uppercase`}> Stay Updated</span>

                    <h2 className={` ${fontClassName} font-montserrat text-3xl md:text-4xl font-bold mt-2 tracking-tight`}>
                        Get Exclusive Car Rental Deals & Travel TipsQ
                    </h2>

                    <p className="text-secondary mt-3 text-sm max-w-lg mx-auto leading-relaxed">
                        Subscribe to our newsletter and be the first to know about special weekend discounts, new fleet arrivals, and road trip guides.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="input-primary flex-1 w-full text-sm"
                        />
                        <button
                            type="submit"
                            className="button-primary text-sm font-medium whitespace-nowrap"
                        >
                            Subscribe
                        </button>
                    </form>

                    {submitted && (
                        <p className="text-green-600 dark:text-green-400 text-xs mt-3 font-medium">
                            Thank you for subscribing! Check your inbox soon for updates.
                        </p>
                    )}

                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;