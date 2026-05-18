import React from 'react';

const CarDetailsPage = async ({params}) => {
    const {id} = await params;
    console.log(id);
    return (
        <div>
            CarDetailsPage
        </div>
    );
};

export default CarDetailsPage;