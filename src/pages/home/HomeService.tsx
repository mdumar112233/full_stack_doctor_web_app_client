import React from "react";
import doctor_imag_1 from "../../assets/images/doctor-image-1.jpg";
import doctor_imag_2 from "../../assets/images/doctor-image-2.jpg";
import doctor_imag_3 from "../../assets/images/doctor-image-3.jpg";
import { BiChevronRight } from "react-icons/bi";

const HomeService: React.FC = () => {
  return (
    <section className="w-[90%] xm:w-[80%] mx-auto mb-20">
      <div className="flex tablet:flex-row flex-col tablet:space-x-8 w-full">
        {/* image */}
        <div className="flex">
          <div className="mr-3">
            <img
              src={doctor_imag_1}
              alt="doctor-image-1"
              className="h-[30vw] tablet:h-[20vw] mb-4"
            />
            <img
              src={doctor_imag_2}
              alt="doctor-image-2"
              className="h-[30vw] tablet:h-[20vw] w-[100%]"
            />
          </div>
          <div className="self-center">
            <img
              src={doctor_imag_3}
              alt="doctor-image-2"
              className="h-[45vw] tablet:h-[35vw] w-full"
            />
          </div>
        </div>

        {/* info */}
        <div className="tablet:w-[40%] self-center tablet:mt-0 mt-10">
          <h1 className="tablet:text-3xl xl:text-5xl xm:text-4xl text-3xl text-main-color font-bold">
            Personal care & healthy living
          </h1>
          <p className="text-main-normal mt-4 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quis
            natus facere qui laboriosam temporibus rem! qui laboriosam
            temporibus rem!
          </p>

          <div className="mt-4 text-white hover:bg-main-color bg-pink-color w-28 py-3 px-4 rounded-3xl transition-all flex items-center justify-between cursor-pointer">
            <p className="text-sm md:text-sm">Service</p>
            <BiChevronRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeService;
