import React, { Children } from 'react';
import { montserrat } from '@/app/layout.js';

const Title = ({ children }) => {
    return <h1 className={`${montserrat.className} text-2xl md:text-3xl font-semibold `}>{children}</h1>

};

export default Title;