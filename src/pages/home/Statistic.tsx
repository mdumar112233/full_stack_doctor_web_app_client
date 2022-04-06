import React from "react";

const Statistic: React.FC = () => {
  return (
    <section className="w-[90%] xm:w-[80%] mx-auto bg-statistic bg-cover h-40 mb-28">
      <div className="bg-[#273e67] h-40 opacity-95 flex items-center text-center tablet:flex-row flex-col">
        <div className="flex space-x-40 mx-20">
          <div>
            <h1 className="text-white text-6xl font-bold">58</h1>
            <p className="text-[#e2dede]">Happy People</p>
          </div>
          <div>
            <h1 className="text-white text-6xl font-bold">58</h1>
            <p className="text-[#e2dede]">Happy People</p>
          </div>
        </div>

        <div className="flex space-x-40 mx-20">
          <div>
            <h1 className="text-white text-6xl font-bold">58</h1>
            <p className="text-[#e2dede]">Happy People</p>
          </div>
          <div>
            <h1 className="text-white text-6xl font-bold">58</h1>
            <p className="text-[#e2dede]">Happy People</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
