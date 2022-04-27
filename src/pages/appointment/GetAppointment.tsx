import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Navbar";

const GetAppointment: React.FC = () => {
  const [userInfo, setUserInfo] = useState<any>({});
  const navigate = useNavigate();

  const handleUserData = (e: any) => {
    console.log(e.target.value);
    const newUserInfo = { ...userInfo };
    newUserInfo[e.target.name] = e.target.value;
    setUserInfo(newUserInfo);
  };

  const isLogin = sessionStorage.getItem("isLogin");
  const handleAppointment = (e: { preventDefault: () => void }) => {
    const userInfoData = { ...userInfo, status: "pending", email: isLogin };
    fetch("https://fierce-plains-12852.herokuapp.com/appointment/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userInfoData),
    })
      .then((res) => res.json())
      .then((result) => {
        result && navigate("/appointsuccess");
      });
    e.preventDefault();
  };

  return (
    <section>
      <Header />

      {/* appointment top title */}
      <div className="text-black bg-service_banner_1 h-80 bg-center">
        <div className="bg-[#273e67] h-80 opacity-90 text-white text-center pt-28">
          <p>Book your Seat</p>
          <h1 className="md:text-5xl xm:text-3xl text-2xl font-bold">
            Appointment
          </h1>
        </div>
      </div>

      <div className="w-[90%] sm:w-[80%] mx-auto">
        {/* appointment form */}
        <div className="flex xl:flex-row flex-col  my-20 xl:justify-between">
          <div>
            <MdOutlineSupportAgent className="text-main-color" size={40} />
            <h3 className="font-medium text-xl my-3">
              Call for an Emergency Service!
            </h3>
            <h1 className="text-main-color xm:text-5xl text-3xl font-bold">
              +83 932 2392
            </h1>
          </div>

          <div className="xl:mt-0 mt-14">
            <h1 className="text-main-color xm:text-4xl text-3xl font-bold">
              Book Appointment
            </h1>
            <p className="text-main-normal text-sm mt-2 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              corporis officia doloribus veritatis!
            </p>

            <div className="space-y-4">
              <div className="flex sm:space-x-5 sm:flex-row flex-col sm:space-y-0 space-y-4">
                <select
                  name="selectDepartment"
                  id=""
                  className="outline-none border border-[#ced4da] bg-[#f4f9fc] sm:w-[17rem] md:w-80 py-3 px-2 text-[#495057] text-sm"
                  onClick={handleUserData}
                >
                  <option>Choose Department</option>
                  <option>Child Care</option>
                  <option>Personal Care</option>
                  <option>CT scan</option>
                  <option>CT scan</option>
                  <option>Cardiology</option>
                  <option>Opthomology</option>
                  <option>Dental Care</option>
                </select>

                <select
                  name="selectDoctor"
                  id=""
                  className="outline-none border border-[#ced4da] bg-[#f4f9fc] sm:w-[17rem] md:w-80 py-3 px-2 text-[#495057] text-sm"
                  onClick={handleUserData}
                >
                  <option selected>Select Doctor</option>
                  <option>Thomas Henry</option>
                  <option>Henry Samuel</option>
                  <option>Alexandar James</option>
                  <option>Edward John</option>
                  <option>Alexandar James</option>
                </select>
              </div>

              <div className="flex sm:space-x-5 sm:flex-row flex-col sm:space-y-0 space-y-4">
                <input
                  type="date"
                  name="date"
                  placeholder="yyyy/mm/dd"
                  className="bg-[#f4f9fc] text-sm py-3 pl-3 outline-none placeholder:text-[#495057] border border-[#ced4da] sm:w-[17rem] md:w-80"
                  onBlur={handleUserData}
                  required
                />
                <input
                  type="time"
                  name="time"
                  placeholder="Time"
                  className="bg-[#f4f9fc] text-sm py-3 pl-3 outline-none placeholder:text-[#495057] border border-[#ced4da] sm:w-[17rem] md:w-80"
                  onBlur={handleUserData}
                />
              </div>

              <div className="flex sm:space-x-5 sm:flex-row flex-col sm:space-y-0 space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="bg-[#f4f9fc] text-sm py-3 pl-3 outline-none placeholder:text-[#495057] border border-[#ced4da] sm:w-[17rem] md:w-80"
                  onBlur={handleUserData}
                />
                <input
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  className="bg-[#f4f9fc] text-sm py-3 pl-3 outline-none placeholder:text-[#495057] border border-[#ced4da] sm:w-[17rem] md:w-80"
                  onBlur={handleUserData}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="message"
                  placeholder="Your Message"
                  className="bg-[#f4f9fc] text-sm pb-20 pl-3 pt-2 outline-none placeholder:text-[#495057] border border-[#ced4da]  xl:w-full md:w-[41.1rem] sm:w-[35rem] w-full"
                  onBlur={handleUserData}
                />
              </div>
              {/* <Link to="/appointsuccess"> */}
              <div
                className="mt-6 text-white bg-main-color hover:bg-pink-color md:w-60 w-48 py-3 px-4 rounded-3xl transition-all flex items-center justify-between cursor-pointer"
                onClick={handleAppointment}
              >
                <p className="text-sm md:text-base">MAKE APPOINMENT</p>
                <BiChevronRight />
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default GetAppointment;
