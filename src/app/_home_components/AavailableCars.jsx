import CarCard from "@/components/cards/CarCard";
import Title from "@/components/shared/navbar/Title";
import { carService } from "@/services/carService";

const AavailableCars = async () => {

    const availableCars = await carService.getAvailableCars();
    console.log("availableCars:......", availableCars);
    return (
        <div className='app-container mt-20 '>
           <Title>Aavailable Cars</Title>

            <div className='mt-10 grid gap-15 md:grid-cols-2 lg:grid-cols-3'>
                {
                    availableCars?.map(car => <CarCard
                        key={car?._id}
                        carName={car.carName}
                        imageUrl={car.imageUrl}
                        id={car._id}
                        availabilityStatus={car.availabilityStatus}
                        dailyRentPrice={car.dailyRentPrice}
                        carType={car.carType}
                    />)
                }

            </div>
        </div>
    );
};

export default AavailableCars;


