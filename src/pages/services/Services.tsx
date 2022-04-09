import React from "react";
import service_1 from "../../assets/images/service-1.jpg";
import service_2 from "../../assets/images/service-2.jpg";
import service_3 from "../../assets/images/service-3.jpg";
import service_4 from "../../assets/images/service-4.jpg";
import service_5 from "../../assets/images/service-6.jpg";
import service_6 from "../../assets/images/service-8.jpg";

const Services: React.FC = () => {
  return (
    <section>
      {/* service title */}
      <div className="text-black bg-service_banner_1 h-80 bg-center">
        <div className="bg-[#273e67] h-80 opacity-90 text-white text-center pt-28">
          <p>Our services</p>
          <h1 className="md:text-5xl xm:text-3xl text-2xl font-bold">
            What We Do
          </h1>
        </div>
      </div>

      {/* service card */}
      <div className="w-[90%] xm:w-[80%] mx-auto grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center mb-20 mt-20 gap-8">
        <div className="shadow justify-self-center align-middle">
          <div className="p-6">
            <img src={service_1} alt="service_1" className="w-full" />
            <h3 className="text-main-color font-bold text-xl mt-5 mb-3">
              Child Care
            </h3>
            <p className="text-main-normal mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>

        <div className="shadow justify-self-center align-middle">
          <div className="p-6">
            <img src={service_2} alt="service_2" className="w-full" />
            <h3 className="text-main-color font-bold text-xl mt-5 mb-3">
              Personal Care
            </h3>
            <p className="text-main-normal mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>

        <div className="shadow justify-self-center align-middle">
          <div className="p-6">
            <img src={service_3} alt="service_3" className="w-full" />
            <h3 className="text-main-color font-bold text-xl mt-5 mb-3">
              CT scan
            </h3>
            <p className="text-main-normal mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>

        <div className="shadow justify-self-center align-middle">
          <div className="p-6">
            <img src={service_4} alt="service_4" className="w-full" />
            <h3 className="text-main-color font-bold text-xl mt-5 mb-3">
              Joint Replacement
            </h3>
            <p className="text-main-normal mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>

        <div className="shadow justify-self-center align-middle">
          <div className="p-6">
            <img src={service_5} alt="service_5" className="w-full" />
            <h3 className="text-main-color font-bold text-xl mt-5 mb-3">
              Examination & Diagnosis
            </h3>
            <p className="text-main-normal mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>

        <div className="shadow justify-self-center align-middle">
          <div className="p-6">
            <img src={service_6} alt="service_6" className="w-full" />
            <h3 className="text-main-color font-bold text-xl mt-5 mb-3">
              Alzheimer's Disease
            </h3>
            <p className="text-main-normal mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
      </div>

      {/* service second banner */}
      <div>
          
      </div>
    </section>
  );
};

export default Services;
