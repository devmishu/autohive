import { Card } from '@heroui/react';
import React from 'react';
// import car1 from '@/public/assets/images/car-1.jpg'

const CarCard = ({ imageUrl, carName }) => {
    return (
        <Card className='shadow card-primary p-0 rounded-none'>
            <img src={'/assets/images/car-1.jpg'} alt={carName} className='w-full' />
            <p className='p-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam me xcepturi inventore deserunt incidunt ducimus nemo odio molestiae, facilique est, repellendus quaerat sunt cupiditate nostrum vel pariatur iusto odit aspernatur itaque reiciendis quisquam non. Nihil maxime quae esse repellat!
            </p>
            <button className="button-primary rounded-none">
                View Details
            </button>
        </Card>
    );
};

export default CarCard;