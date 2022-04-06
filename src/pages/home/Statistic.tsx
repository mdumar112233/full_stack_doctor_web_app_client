import React from "react";

const Statistic: React.FC = () => {
  return (
    <section className="w-[90%] xm:w-[80%] mx-auto bg-statistic bg-cover h-40 mb-28">
      <div className="bg-[#273e67] tablet:h-40 tablet:py-0 py-6 opacity-95 grid grid-flow-row tablet:grid-cols-4 grid-cols-2 justify-center items-center text-center font-exo tablet:gap-y-0 gap-y-5">
        <div>
            <h1 className="text-white text-4xl sm:text-6xl font-bold">5864</h1>
            <p className="text-[#e2dede] sm:text-base text-sm">Happy People</p>
          </div>
          <div>
            <h1 className="text-white text-4xl sm:text-6xl font-bold">700</h1>
            <p className="text-[#e2dede] sm:text-base text-sm">Surgery Complete</p>
          </div>
          <div>
            <h1 className="text-white text-4xl sm:text-6xl font-bold">40</h1>
            <p className="text-[#e2dede] sm:text-base text-sm">Expert Doctors</p>
          </div>

          <div>
            <h1 className="text-white text-4xl sm:text-6xl font-bold">20</h1>
            <p className="text-[#e2dede] sm:text-base text-sm">Worldwide Branch</p>
          </div>
      </div>
    </section>
  );
};

export default Statistic;
