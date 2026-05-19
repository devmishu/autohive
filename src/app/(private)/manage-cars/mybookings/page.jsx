import MyBookingCard from './_components/MyBookingCard';
import { bookingService } from '@/services/bookingService';

const MyBookingsPage = async () => {

    const myBookings = await bookingService.getAllBookingsCars();
    console.log("myBookings::", myBookings);

    return (
        <div className='app-container mx-auto mt-20 '>
            <div className='grid gap-5 '>
                {
                    myBookings.map(boking => <MyBookingCard
                        key={boking._id}
                        carName={boking.carName}
                    />)
                }
            </div>

        </div>
    );
};

export default MyBookingsPage;