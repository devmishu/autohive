import Title from '@/components/shared/navbar/Title';
import MyBookingCard from './_components/MyBookingCard';
import { bookingService } from '@/services/bookingService';

const MyBookingsPage = async () => {

    const myBookings = await bookingService.getAllBookingsCars();
    console.log("myBookings::", myBookings);

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