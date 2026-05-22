
import { headers } from "next/headers";
import { auth } from '@/lib/auth';
import { carService } from "@/services/carService";
import MyAddedCarItem from "./_components/MyAddedCarItem";
import Title from "@/components/ui/Title";
import EmptyStateCard from "@/components/shared/EmptyStateCard";


const MyAddedCarsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const token = await auth.api.getToken({
        headers: await headers()
    });

    const user = session?.user;
    console.log("add car user:", user);

    const myCars = await carService.getMyCars(user?.id, token);
    console.log(myCars);
    console.log('myCars:', myCars);

    return (
        <div className='app-container mt-20 min-h-screen'>
            <div className='my-6 '>
                <Title>  My Cars</Title>
            </div>

            <div className="grid gap-15">

                {
                    myCars.length === 0 ? <EmptyStateCard
                        title="No Cars Added Yet"
                        message="You haven't added any cars yet. Start listing your cars to make them available for booking."
                        buttonText="Add a Car"
                        href="/manage-cars/addcar"
                    /> :
                        myCars.map(car => <MyAddedCarItem key={car._id}
                            imageUrl={car.imageUrl}
                            id={car._id}
                            carName={car.carName}
                            carType={car.carType}
                            seatCapacity={car.seatCapacity}
                            description={car.description}
                            availabilityStatus={car.availabilityStatus}
                            dailyRentPrice={car.dailyRentPrice}
                            pickupLocation={car.pickupLocation}
                        />
                        )
                }

            </div>
        </div>
    );
};

export default MyAddedCarsPage;

