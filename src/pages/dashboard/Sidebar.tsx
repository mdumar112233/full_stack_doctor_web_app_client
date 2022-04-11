import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import { MdArrowBack, MdDashboard } from "react-icons/md";
import {AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";


const Sidebar: React.FC = () => {
    return (
        <section className='grid grid-flow-row md:grid-cols-5 grid-cols-1'>
            {/* dashboard sidebar */}
            <div className='bg-main-color md:h-[100vh] md:py-0 py-5'>
                <div className='md:mt-10 ml-10 hidden'>
                    <ul className='md:space-y-5 flex md:flex-col flex-row items-center md:items-start'>
                        <li className='text-white flex items-center space-x-2'>
                            <MdArrowBack /> <Link to='/' className='text-lg'>Home</Link>
                        </li>
                        <li className='text-white flex items-center space-x-2'>
                            <MdDashboard /> <Link to='/' className='text-lg'>Dashboard</Link>
                        </li>
                        <li className='text-white flex items-center space-x-2'>
                            <AiOutlineUsergroupAdd /> <Link to='/' className='text-lg'>Patients</Link>
                        </li>
                    </ul>
                </div>

                {/* for mobile */}
                <div className='w-[90%] mx-auto'>
                    <div className='flex justify-between'>
                        <div className='flex items-center text-white'>
                            <MdArrowBack /> <Link to='/' className='text-lg ml-2'>Home</Link>
                        </div>
                        <div>
                            <AiOutlineMenu className="text-2xl cursor-pointer text-white"/>
                        </div>
                    </div>

                    <ul className='w-20'>
                        <li className='text-white flex items-center space-x-2'>
                            <MdArrowBack /> <Link to='/' className='text-lg'>Home</Link>
                        </li>
                        <li className='text-white flex items-center space-x-2'>
                            <MdDashboard /> <Link to='/' className='text-lg'>Dashboard</Link>
                        </li>
                        <li className='text-white flex items-center space-x-2'>
                            <AiOutlineUsergroupAdd /> <Link to='/' className='text-lg'>Patients</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* dashboard main  content */}
            <div className='border border-gray-700 col-span-4 w-[90%] mx-auto'>
                <Outlet/>
            </div>
        </section>
    );
};

export default Sidebar;