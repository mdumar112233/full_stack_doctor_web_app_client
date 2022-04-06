import React from 'react';
import Service from './Service';
import TopBanner from './TopBanner';

const Home: React.FC = () => {
    return (
        <div className='mt-5'>
            <TopBanner />
            <Service />
        </div>
    );
};

export default Home;