import React from "react";
import doctor_appoint from "../../assets/images/doctor-image-3.jpg";
import { BiChevronRight } from "react-icons/bi";
import { BsTelephoneForwardFill } from "react-icons/bs";

const HomeAppoinment = () => {
  return (
    <section className="w-[90%] xm:w-[80%] mx-auto flex mb-20 mt-20 tablet:space-x-8 justify-between tablet:items-center tablet:flex-row flex-col">
      <div className="bg-doctorBg h-[35rem] bg-cover bg-center sm:w-[80%] md:w-[70%] tablet:w-[45%]">
        <div className="mt-[26rem]">
        <div className="flex bg-main-color h-28 md:w-[50vw] tablet:w-[40vw] items-center justify-center tablet:ml-10 md:ml-40 2xm:ml-16 2xm:w-[90%]">
            <BsTelephoneForwardFill className="text-[#b8b3b3]" size={23} />
                <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold ml-4">+23 323 32342</h1>
        </div>
        </div>
      </div>

      <div className="tablet:w-[50%] space-y-8 tablet:mt-0 mt-8">
        <h1 className="text-main-color text-2xl xm:text-3xl  md:text-5xl font-bold">Book appointment</h1>
        <p className="text-main-normal mt-2 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse sit
          ipsa officiis. Vel esse sit
          ipsa officiis.
        </p>
        <div className="mt-4 text-white hover:bg-main-color bg-pink-color md:w-60 w-48 py-3 px-4 rounded-3xl transition-all flex items-center justify-between cursor-pointer">
          <p className="text-sm md:text-base">MAKE APPOINMENT</p>
          <BiChevronRight />
        </div>
      </div>
    </section>
  );
};

export default HomeAppoinment;
