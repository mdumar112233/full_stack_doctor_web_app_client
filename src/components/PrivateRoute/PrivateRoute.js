import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const isLogin = useSelector((state) => state.loginUser.isLogin)
    const localLogin = sessionStorage.getItem('isLogin')
    return (
        <div>
            {
                localLogin ? <Outlet /> : <Navigate to='/login' />
            }
        </div>
    );
};

export default PrivateRoute;