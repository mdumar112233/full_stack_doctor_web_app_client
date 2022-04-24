import React from "react";
import { BiChevronRight, BiTimeFive } from "react-icons/bi";
import { MdLocalHospital, MdOutlineSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
// import { BiChevronRight } from "react-icons/bi";

const TopBanner: React.FC = () => {
  return (
    <section>
      {/* top banner */}
      <div className="tablet:bg-topBanner bg-no-repeat bg-cover tablet:h-[100vh] object-cover mb-28">
        <div className="w-[80%] tablet:w-[80%] mx-auto pt-20">
          <div className="tablet:w-[60%] md:w-[70%]">
            <div className="bg-pink-color w-10 h-1"></div>
            <h4 className="text-[#6F8BA4] mt-3 mb-5">
              TOTAL HEALTH CARE SOLUTION
            </h4>
            <h1 className="text-4xl sm:text-6xl font-bold text-main-color">
              Your Most Trusted Health Partner
            </h1>

            <p className="text-[#6F8BA4] mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ducimus earum cupiditate molestias voluptates alias?
            </p>

            <Link to="/appointment">
              <div className="mt-4 text-white hover:bg-main-color bg-pink-color md:w-60 w-48 py-3 px-4 rounded-3xl transition-all flex items-center justify-between cursor-pointer">
                <p className="text-sm md:text-base">MAKE APPOINMENT</p>
                <BiChevronRight />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* information card */}
      <div className="w-[90%] xm:w-[80%] mx-auto mb-36 tablet:-mt-48 -mt-16">
        <div className="grid grid-flow-row tablet:grid-cols-3 grid-cols-1 gap-10">
          <div className="shadow-md h-80 bg-white rounded-2xl p-8">
            <MdLocalHospital className="text-main-color" size={45} />
            <p className="text-[#6F8BA4] mt-4">24 Hours Service</p>
            <h3 className="text-main-color font-bold tablet:text-xl xl:text-2xl text-2xl mb-3">
              Online Appoinment
            </h3>
            <p className="text-[#6F8BA4] text-sm lg:leading-normal xl:leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              neque.
            </p>
            <Link to="/appointment">
              <button className="text-white font-bold bg-main-color py-3 px-5 rounded-3xl tablet:text-xs xl:text-sm text-sm mt-5 hover:bg-pink-color transition-all">
                MAKE A APPOINMENT
              </button>
            </Link>
          </div>

          <div className="shadow-md h-80 bg-white rounded-2xl p-8">
            <BiTimeFive className="text-main-color" size={45} />
            <p className="text-[#6F8BA4] mt-4">Timing schedule</p>
            <h3 className="text-main-color font-bold tablet:text-xl xl:text-2xl text-2xl mb-3">
              Working Hours
            </h3>

            <div className="flex mb-2 pt-3 justify-between text-[#6F8BA4]">
              <p>Sun - Wed : </p>
              <p>8:00 - 17:00</p>
            </div>
            <hr />
            <div className="flex mt-2 mb-2 justify-between text-[#6F8BA4]">
              <p>Sun - Wed : </p>
              <p>8:00 - 17:00</p>
            </div>
            <hr />
            <div className="flex mt-2 mb-2 justify-between text-[#6F8BA4]">
              <p>Sun - Wed : </p>
              <p>8:00 - 17:00</p>
            </div>
            <hr />
          </div>

          <div className="shadow-md h-80 bg-white rounded-2xl p-8">
            <MdOutlineSupportAgent className="text-main-color" size={45} />
            <p className="text-[#6F8BA4] mt-4">Emergency Cases</p>
            <h3 className="text-main-color font-bold tablet:text-xl xl:text-2xl text-2xl  mb-3">
              1-800-600-3922
            </h3>
            <p className="text-[#6F8BA4] text-sm leading-7">
              Lorem ipsum dolor sit amet consectetur adipi elit. Labore, neque.
              consectetur adipisicing elit. Labore, neque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
