import React from 'react';
import Hero from './_home_components/Hero';
import AavailableCars from './_home_components/AavailableCars';
import CompanyStats from './_home_components/CompanyStasus';
import WhyChooseUs from './_home_components/WhyChooseUs';
import { FaqSection } from './_home_components/FaqSection';
import BrandLogos from './_home_components/BrandLogos';
import RentalSafetyGuidelines from './_home_components/RentalSafetyGuidelines';
import CarFeatureHighlights from './_home_components/CarFeatureHighlights';
import NewsletterSection from './_home_components/NewsletterSection';
import { montserrat } from './layout';


const page = () => {
    return (
        <div>
            <Hero />
            <BrandLogos />
            <AavailableCars />
            <WhyChooseUs />
            <CarFeatureHighlights />
            <CompanyStats />
            <RentalSafetyGuidelines />
            <FaqSection />
            <NewsletterSection fontClassName={montserrat.className} />
        </div>
    );
};

export default page; 