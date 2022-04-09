import React, { Suspense } from 'react';
import { Routes, Route, Link } from "react-router-dom";

const Home = React.lazy(() => import('../pages/home/Home'));
const Services = React.lazy(() => import('../pages/services/Services'));

const AppRoute: React.FC = ({children}) => {
    console.log(children)
    return (
        <Suspense fallback={<div>Loading.....</div>}>
                {children}
            <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/services' element={<Services />} />
            </Routes>
            {/* {children} */}
        </Suspense>
    );
};

export default AppRoute;