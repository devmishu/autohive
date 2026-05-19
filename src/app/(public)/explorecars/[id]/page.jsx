
import { auth } from '@/lib/auth';
import { carService } from '@/services/carService';
import { headers } from 'next/headers';
import React from 'react';
import CarDetailItem from './_components/CarDetailItem';
import BookingFormItem from './_components/BookingFormItem';

const CarDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);

    const token = await auth.api.getToken({
        headers: await headers()
    });

    const carDetail = await carService.getSingleCar(id, token);

    console.log("jwtToken:", token.token);

    console.log("carDetail:", carDetail);
    return (
        <div className='app-container mt-20'>
            Car Details:
            <div className="app-container flex flex-col lg:flex-row gap-6">
                <CarDetailItem />

                <BookingFormItem />
            </div>
        </div>
    );
};

export default CarDetailsPage;