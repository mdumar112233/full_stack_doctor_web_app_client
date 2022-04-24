import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    let isLogin = true
    return (
        <div>
            {
                isLogin ? <Outlet /> : <Navigate to='/login' />
            }
        </div>
    );
};

export default PrivateRoute;