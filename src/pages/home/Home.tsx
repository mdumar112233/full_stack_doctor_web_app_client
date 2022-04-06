import React from 'react';
import OurService from './OurService';
import Service from './Service';
import Statistic from './Statistic';
import TopBanner from './TopBanner';

const Home: React.FC = () => {
    return (
        <div className='mt-5'>
            <TopBanner />
            <Service />
            <Statistic />
            <OurService />
        </div>
    );
};

export default Home;