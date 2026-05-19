
import { headers } from "next/headers";
import { auth } from '@/lib/auth';
import { carService } from "@/services/carService";
import MyAddedCarItem from "./_components/MyAddedCarItem";


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
            My Added Cars Page:{myCars.length}
            <div className="flex flex-col gap-5">
                {
                    myCars.map(car => <MyAddedCarItem key={car._id}
                        imageUrl={car.imageUrl}
                        id={car._id}
                        carName={car.carName}
                    />
                    )
                }
            </div>
        </div>
    );
};

export default MyAddedCarsPage;