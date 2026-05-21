import Title from '@/components/ui/Title';
import MyBookingCard from './_components/MyBookingCard';
import { bookingService } from '@/services/bookingService';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';

const MyBookingsPage = async () => {

    const token = await auth.api.getToken({
        headers: await headers()
    });

    const myBookings = await bookingService.getAllBookingsCars(token);


    return (
        <div className='app-container mx-auto mt-20 '>
            <div className='my-6 '>
                <Title>  My Bookings:{myBookings.length} </Title>
            </div>
            <div className='grid gap-5 '>
                {
                    myBookings.map(boking => <MyBookingCard
                        key={boking._id}
                        carName={boking.carName}
                        imageUrl={boking.imageUrl}
                        carType={boking.carType}
                        bookingDte={boking.bookingDte}
                        pickupLocation={boking.pickupLocation}
                        seatCapacity={boking.seatCapacity}

                    />
                    )
                }
            </div>

        </div>
    );
};

export default MyBookingsPage;