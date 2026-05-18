import CarCard from '@/components/cards/CarCard';
import { carService } from '@/services/carService';
import { Card } from '@heroui/react';
import React from 'react';

const ExploreCarsPage = async () => {

    const allCars = await carService.getAllCars();
    console.log(allCars);

    return (
        <div className='app-container mt-20 '>
            Explorecars Page:
            <div className='mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3'>
                {
                    allCars.map(car => <CarCard 
                        key={car._id} 
                        carName={car.carName}
                        imageUrl={car.imageUrl}
                        />)
                }

            </div>
        </div>
    );
};

export default ExploreCarsPage;

