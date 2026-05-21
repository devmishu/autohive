import React from 'react';
import { RiseLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <RiseLoader
                color="#DC143C"
                size={20}
            />
        </div>
    );
};

export default loading;