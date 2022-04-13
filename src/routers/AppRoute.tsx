import React, { Suspense } from 'react';
import { Routes, Route, Link } from "react-router-dom";

const Home = React.lazy(() => import('../pages/home/Home'));
const Services = React.lazy(() => import('../pages/services/Services'));
const Doctors = React.lazy(() => import('../pages/doctors/Doctors'));
const SignUp = React.lazy(() => import('../pages/account/SignUp'));
const Login = React.lazy(() => import('../pages/account/Login'));
const Sidebar = React.lazy(() => import('../pages/dashboard/Sidebar'));
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));
const Patients = React.lazy(() => import('../pages/dashboard/Patients'));
const GetAppointment = React.lazy(() => import('../pages/appointment/GetAppointment'));

const AppRoute: React.FC = ({children}) => {
    return (
        <Suspense fallback={<div>Loading.....</div>}>
            {/* {children} */}
            <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/doctors' element={<Doctors />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<Login />} />
                    <Route  path='/dashboard' element={<Sidebar />}>
                        <Route index element={<Dashboard />} />
                        <Route path='patients' element={<Patients />} />
                    </Route>
                    <Route path='/appointment' element={<GetAppointment />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoute;