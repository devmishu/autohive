
import { headers } from "next/headers";
import { auth } from '@/lib/auth';
import { carService } from "@/services/carService";
import MyAddedCarItem from "./_components/MyAddedCarItem";
import Title from "@/components/ui/Title";


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
        <div className='app-container mt-20 '>
            <div className='my-6 '>
                <Title>  My Cars:{myCars.length} </Title>
            </div>

            <div className="flex flex-col gap-5">
                {
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

//  id, imageUrl, carName, carType, seatCapacity, description, availabilityStatus, , dailyRentPrice, pickupLocation 