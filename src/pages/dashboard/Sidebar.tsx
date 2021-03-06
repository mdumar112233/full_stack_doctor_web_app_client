import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsJournalMedical } from "react-icons/bs";
import { MdArrowBack, MdDashboard } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const Sidebar: React.FC = () => {
  const isLogin = sessionStorage.getItem("isLogin");
  return (
    <section className="grid grid-flow-row md:grid-cols-5 grid-cols-1">
      {/* dashboard sidebar */}
      <div className="bg-main-color md:h-screen md:py-0 py-5">
        <div className="md:mt-10 ml-10">
          <ul className="md:space-y-5 space-y-3">
            <li className="text-white flex items-center space-x-2">
              <MdArrowBack />{" "}
              <Link to="/" className="text-lg">
                Home
              </Link>
            </li>
            {isLogin === "test@gmail.com" && (
              <li className="text-white flex items-center space-x-2">
                <MdDashboard />{" "}
                <Link to="/dashboard" className="text-lg">
                  Dashboard
                </Link>
              </li>
            )}
            <li className="text-white flex items-center space-x-2">
              <BsJournalMedical />{" "}
              <Link
                to={
                  isLogin === "test@gmail.com"
                    ? "/dashboard/myappointment"
                    : "/myappointment"
                }
                className="text-lg"
              >
                My Appointment
              </Link>
            </li>
            <li className="text-white flex items-center space-x-2">
              <AiOutlineUsergroupAdd />{" "}
              <Link
                to={
                  isLogin === "test@gmail.com"
                    ? "/dashboard/patients"
                    : "/myappointment/patients"
                }
                className="text-lg"
              >
                Patients
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* dashboard main  content */}
      <div className="bg-[#F4FDFB] w-full col-span-4 ">
        <div className="w-[90%] mx-auto">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
