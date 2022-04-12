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
            <div className='bg-main-color md:h-screen md:py-0 py-5'>
                <div className='md:mt-10 ml-10'>
                    <ul className='md:space-y-5 space-y-3'>
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
            <div className='bg-[#F4FDFB] w-full col-span-4 '>
            <div className='w-[90%] mx-auto'>
                <Outlet/>
            </div>
            </div>
        </section>
    );
};

export default Sidebar;