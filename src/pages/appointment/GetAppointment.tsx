import React from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Navbar";
import { MdOutlineSupportAgent } from "react-icons/md";

const GetAppointment: React.FC = () => {
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

        <div className="w-[90%] xm:w-[80%] mx-auto">
        {/* appointment form */}
        <div className="flex tablet:flex-row flex-col my-10 justify-between">
          <div>
            <MdOutlineSupportAgent className="text-main-color" size={40} />
            <h3 className="font-medium">Call for an Emergency Service!</h3>
            <h1 className="text-main-color text-3xl font-bold">+83 932 2392</h1>
          </div>

          <div>
            <h1 className="text-main-color text-3xl font-bold">
              Book Appointment
            </h1>
            <p className="text-main-normal text-sm mt-2 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              corporis officia doloribus veritatis!
            </p>

            <div className="flex space-x-5">
                <select name="" id="" className="outline-none border border-[#8c8f92] border-opacity-0 bg-[#f4f9fc] w-80 py-3 px-2 text-[#495057] text-sm">
                    <option selected>Choose Department</option>
                    <option>Child Care</option>
                    <option>Personal Care</option>
                    <option>CT scan</option>
                    <option>CT scan</option>
                    <option>Cardiology</option>
                    <option>Opthomology</option>
                    <option>Dental Care</option>
                </select>

                <select name="" id="" className="outline-none border border-[#8c8f92] border-opacity-0 bg-[#f4f9fc] w-80 py-3 px-2 text-[#495057] text-sm">
                    <option selected>Select Doctor</option>
                    <option>Thomas Henry</option>
                    <option>Henry Samuel</option>
                    <option>Alexandar James</option>
                    <option>Edward John</option>
                    <option>Alexandar James</option>
                </select>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default GetAppointment;
