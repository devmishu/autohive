
import Title from '@/components/shared/navbar/Title';
import CarForm from './_components/CarForm';

const AddCarPage = () => {



    return (
        <div className='app-container mt-20'>

            <div className='my-6 '>
                <Title> Add Your Cars: </Title>
            </div>

            <div className='card-primary p-5 max-w-150 mx-auto'>
                <CarForm />
            </div>

        </div>
    );
};

export default AddCarPage;