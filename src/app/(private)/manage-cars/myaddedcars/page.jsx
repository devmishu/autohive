
import { headers } from "next/headers";
import { auth } from '@/lib/auth';
import { carService } from "@/services/carService";


const MyAddedCarsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers() 
    });

    const user = session?.user;
    console.log("add car user:", user);

    const myCars = await carService.getMyCars(user?.id);
    console.log(myCars);

    return (
        <div className='app-container mt-20 '>
            My Added Cars Page:
            <div >
                {
                    myCars.map(car => <div
                    className="border card-primary p-4 m-3"
                     key={car.id}>
                        <h1>{car.carName}</h1>
                        <h1>{car.carType}</h1>
                        <h1>{car.dailyRentPrice}</h1>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyAddedCarsPage;