import React from 'react';
import OurService from './OurService';
import HomeService from './HomeService';
import Statistic from './Statistic';
import TopBanner from './TopBanner';
import HomeAppoinment from './HomeAppoinment';
import Review from './Review';
import SupportUs from './SupportUs';
import Footer from '../../components/common/Footer';

const Home: React.FC = () => {
    return (
        <div className=''>
            <TopBanner />
            <HomeService />
            <Statistic />
            <OurService />
            <HomeAppoinment />
            <Review />
            <SupportUs />
            <Footer />
        </div>
    );
};

export default Home;