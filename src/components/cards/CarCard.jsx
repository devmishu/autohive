import { Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
// import car1 from '@/public/assets/images/car-1.jpg'

const CarCard = ({ imageUrl, carName, id }) => {
    return (
        <Card  className='relative shadow card-primary p-0 rounded-none'>
            <img src={imageUrl} alt={carName} className='w-full h-80' />
            <h2 className='text-4xl font-bold'>{carName}</h2>
            <p className='p-4 mb-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam me xcepturi inventore deserunt incidunt ducimus nemo odio molestiae, facilique est, repellendus quaerat sunt cupiditate nostrum vel pariatur iusto odit aspernatur itaque reiciendis quisquam non. Nihil maxime quae esse repellat!
            </p>
            <Link href={`/explorecars/${id}`} >
                <button  className="absolute bottom-0  button-primary rounded-none w-full">
                    View Details
                </button>
            </Link>
        </Card>
    );
};

export default CarCard;