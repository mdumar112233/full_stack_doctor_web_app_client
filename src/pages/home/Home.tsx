import React from 'react';
import OurService from './OurService';
import HomeService from './HomeService';
import Statistic from './Statistic';
import TopBanner from './TopBanner';
import HomeAppoinment from './HomeAppoinment';

const Home: React.FC = () => {
    return (
        <div className='mt-5'>
            <TopBanner />
            <HomeService />
            <Statistic />
            <OurService />
            <HomeAppoinment />
        </div>
    );
};

export default Home;