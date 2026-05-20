import CarCard from '@/components/cards/CarCard';
import { carService } from '@/services/carService';
import React from 'react';
import SearchBar from './_components/SearchBar';
import FilterBar from './_components/FilterBar';

const ExploreCarsPage = async ({ searchParams }) => {

    const sp = await searchParams;

    const allCars = await carService?.getAllCars(sp?.searchTerm || '', sp?.carType || '');
    console.log(allCars);

    return (
        <div className='app-container mt-20 '>
            Explorecars Page: {allCars.length}
            <div className='my-10 grid grid-cols-2 gap-5 '>
                <FilterBar />
                <SearchBar />
            </div>
            <div className='mt-10 grid gap-15 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allCars?.map(car => <CarCard
                        key={car?._id}
                        carName={car.carName}
                        imageUrl={car.imageUrl}
                        id={car._id}
                        availabilityStatus={car.availabilityStatus}
                        dailyRentPrice={car.dailyRentPrice}
                        carType={car.carType}
                    />)
                }

            </div>
        </div>
    );
};

export default ExploreCarsPage;

