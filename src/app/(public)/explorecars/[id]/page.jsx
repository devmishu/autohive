import CarCard from '@/components/cards/CarCard';
import { auth } from '@/lib/auth';
import { carService } from '@/services/carService';
import { headers } from 'next/headers';
import React from 'react';

const CarDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);

    const token = await auth.api.getToken({
        headers: await headers()
    });

    const carDetail = await carService.getSingleCar(id, token);

    console.log("jwtToken:",token.token);

    console.log("carDetail:", carDetail);
    return (
        <div className='app-container mt-20'>
            Car Details:
            <CarCard carName={carDetail.carName} />
        </div>
    );
};

export default CarDetailsPage;