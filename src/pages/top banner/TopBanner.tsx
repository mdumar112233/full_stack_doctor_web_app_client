import React from "react";
import { BiChevronRight } from "react-icons/bi";


const TopBanner = () => {
  return (
    <div className="tablet:bg-topBanner bg-no-repeat bg-cover h-[100vh] object-cover mb-28">
      <div className="w-[80%] tablet:w-[80%] mx-auto pt-20">
        <div className="tablet:w-[60%] md:w-[70%]">
          <div className="bg-pink-color w-10 h-1"></div>
          <h4 className="text-[#6F8BA4] mt-3 mb-5">TOTAL HEALTH CARE SOLUTION</h4>
          <h1 className="text-4xl sm:text-6xl font-bold text-main-color">Your Most Trusted Health Partner</h1>

          <p className="text-[#6F8BA4] mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            ducimus earum cupiditate molestias voluptates alias?
          </p>

          <div className="mt-4 text-white bg-main-color hover:bg-pink-color md:w-60 w-48 py-3 px-4 rounded-3xl transition-all flex items-center justify-between cursor-pointer">
              <p className="text-sm md:text-base">MAKE APPOINTMENT</p>
              <BiChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
