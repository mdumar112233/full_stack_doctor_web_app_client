import React from 'react';
import Service from './Service';
import Statistic from './Statistic';
import TopBanner from './TopBanner';

const Home: React.FC = () => {
    return (
        <div className='mt-5'>
            <TopBanner />
            <Service />
            <Statistic />
        </div>
    );
};

export default Home;