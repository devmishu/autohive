import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CarCard = ({ imageUrl, carName, id, carType, dailyRentPrice, availabilityStatus }) => {

    const blurDataURL = `${imageUrl}&q=10&blur=10&w=10`;

    return (
        <Card className='relative shadow card-primary p-0 rounded-none h-full flex flex-col justify-between'>

            <div className='mb-14'>

                <div className='relative w-full h-64 md:h-72 bg-gray-900 overflow-hidden'>
                    <Image
                        src={imageUrl}
                        alt={carName}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className='object-cover object-center' 
                        priority={true} 
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                    />
                </div>


                <h2 className='text-primary text-xl md:text-2xl font-bold px-4 pt-4 pb-2 '>{carName}</h2> 
                <div className='flex justify-between items-center  px-4 pb-4'>
                    <p className='text-primary text-sm md:text-base font-medium'>
                        <span className='text-secondary '>Car Type: </span>{carType}
                    </p>
                    <p className='text-primary text-sm md:text-base font-medium'>
                        <span className='text-secondary'>Daily Rent Price: </span>${dailyRentPrice}
                    </p>
                </div>
            </div>


            <Link href={`/explorecars/${id}`} className="w-full absolute bottom-0">
                <button className="button-primary rounded-none w-full py-3 text-center font-semibold">
                    View Details
                </button>
            </Link>
        </Card>
    );
};

export default CarCard;