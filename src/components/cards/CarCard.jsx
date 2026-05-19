import { Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
// import car1 from '@/public/assets/images/car-1.jpg'

const CarCard = ({ imageUrl, carName, id }) => {
    return (
        <Card className='shadow card-primary p-0 rounded-none'>
            <img src={'/assets/images/car-1.jpg'} alt={carName} className='w-full' />
            <h2 className='text-4xl font-bold'>{carName}</h2>
            <p className='p-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam me xcepturi inventore deserunt incidunt ducimus nemo odio molestiae, facilique est, repellendus quaerat sunt cupiditate nostrum vel pariatur iusto odit aspernatur itaque reiciendis quisquam non. Nihil maxime quae esse repellat!
            </p>
            <Link href={`/explorecars/${id}`} >
                <button className="button-primary rounded-none w-full">
                    View Details
                </button>
            </Link>
        </Card>
    );
};

export default CarCard;