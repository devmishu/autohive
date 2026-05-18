
import CarForm from './_components/CarForm';

const AddCarPage = () => {



    return (
        <div className='app-container mt-20'>
            Add Car :

            <div className='card-primary p-10 max-w-[600px] mx-auto'>
                <CarForm />
            </div>

        </div>
    );
};

export default AddCarPage;