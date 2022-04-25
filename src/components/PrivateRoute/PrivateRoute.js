import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const isLogin = useSelector((state) => state.loginUser.isLogin)
    return (
        <div>
            {
                isLogin ? <Outlet /> : <Navigate to='/login' />
            }
        </div>
    );
};

export default PrivateRoute;