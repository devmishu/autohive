import React from 'react';
import Hero from './_home_components/Hero';
import AavailableCars from './_home_components/AavailableCars';
import CompanyStats from './_home_components/CompanyStasus';
import WhyChooseUs from './_home_components/WhyChooseUs';


const page = () => {
    return (
        <div>

            <Hero />
            <CompanyStats />
            <AavailableCars />
            <WhyChooseUs />
        </div>
    );
};

export default page; 