import Title from '@/components/ui/Title';
import MyBookingCard from './_components/MyBookingCard';
import { bookingService } from '@/services/bookingService';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import EmptyStateCard from '@/components/shared/EmptyStateCard';

const MyBookingsPage = async () => {

    const token = await auth.api.getToken({
        headers: await headers()
    });

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const userId = session?.user?.id;

    console.log("booking...........", userId);

    const myBookings = await bookingService.getAllBookingsCars(userId, token);

    console.log('my bookings.........', myBookings);


    return (
        <div className='min-h-[50vh] app-container mx-auto mt-20 '>
            <div className='my-6 '>
                <Title>  My Bookings </Title>
            </div>
            <div className='grid gap-15  '>
                {
                    myBookings?.length === 0 ? <EmptyStateCard
                        title="No Bookings Found"
                        message="You haven't made any bookings yet. Browse cars to get started!"
                        buttonText="Book a Car"
                        href="/explorecars"
                    /> :
                        myBookings.map(boking => <MyBookingCard
                            key={boking._id}
                            carName={boking.carName}
                            imageUrl={boking.imageUrl}
                            carType={boking.carType}
                            bookingDte={boking.bookingDte}
                            pickupLocation={boking.pickupLocation}
                            seatCapacity={boking.seatCapacity}
                            dailyRentPrice={boking.dailyRentPrice}
                            description={boking.description}

                        />
                        )
                }

            </div>

        </div>
    );
};

export default MyBookingsPage;



