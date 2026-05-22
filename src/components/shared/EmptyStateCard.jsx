import Link from 'next/link';
import React from 'react';
import { MdTurnedInNot } from 'react-icons/md';

const EmptyStateCard = ({
    title,
    message,
    buttonText,
    href
}) => {
    return (
        <div className="card-primary w-full md:max-w-5xl mx-auto p-8 md:p-12 flex flex-col items-center justify-center text-center shadow-sm">


            <div className="section-bg w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 text-secondary ">
                <MdTurnedInNot />
            </div>


            <h3 className="text-xl font-bold text-primary mb-2">
                {title}
            </h3>


            <p className="text-secondary text-sm max-w-md mb-6 leading-relaxed">
                {message}
            </p>


            <Link href={`${href}`}>
                <button
                    className="button-primary font-medium text-sm py-2.5 px-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                    {buttonText}
                </button>
            </Link>


        </div>
    );
};

export default EmptyStateCard;