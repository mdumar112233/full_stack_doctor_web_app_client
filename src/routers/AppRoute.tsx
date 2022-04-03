import React, { Suspense } from 'react';
import { Routes, Route, Link } from "react-router-dom";

const Home = React.lazy(() => import('../pages/home/Home'));

const AppRoute: React.FC = ({children}) => {
    console.log(children)
    return (
        <Suspense fallback={<div>Loading.....</div>}>
                {children}
            <Routes>
                    <Route path='/' element={<Home />} />
            </Routes>
            {/* {children} */}
        </Suspense>
    );
};

export default AppRoute;