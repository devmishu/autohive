import CarCard from "@/components/cards/CarCard";
import { carService } from "@/services/carService";

const AavailableCars = async () => {

    const availableCars = await carService.getAvailableCars();
    console.log("availableCars:......", availableCars);
    return (
        <div className='app-container mt-20 '>
            available Cars : 
           
            <div className='mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3'>
                {
                    availableCars?.map(car => <CarCard
                        key={car?._id}
                        carName={car.carName}
                        imageUrl={car.imageUrl}
                        id={car._id}
                    />)
                }

            </div>
        </div>
    );
};

export default AavailableCars;