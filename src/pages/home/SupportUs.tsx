import React from "react";
import support_img_1 from "../../assets/images/1.png";
import support_img_2 from "../../assets/images/2.png";
import support_img_3 from "../../assets/images/3.png";
import support_img_4 from "../../assets/images/4.png";
import support_img_5 from "../../assets/images/5.png";

const SupportUs: React.FC = () => {
  return (
    <div className="w-[80%] tablet:w-[90%] mx-auto mb-20 -mt-10">
      <div className="text-center">
        <h1 className="text-2xl xm:text-3xl md:text-5xl text-main-color font-bold">
          Partners who support us
        </h1>
        <div className="flex justify-center flex-row my-5">
          <div className="bg-pink-color w-10 h-1"></div>
        </div>
        <p className="text-main-normal md:w-3/5 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          cupiditate distinctio libero rem deserunt delectus! Sapiente
          cupiditate distinctio libero rem deserunt delectus!
        </p>
      </div>

      <div className="grid grid-flow-row sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center mt-14 lg:gap-y-0 gap-y-4">
        <img src={support_img_1} alt="support_1 " className="w-[8rem] justify-self-center" />
        <img src={support_img_2} alt="support_2 " className="w-[8rem] justify-self-center" />
        <img src={support_img_3} alt="support_3 " className="w-[8rem] justify-self-center" />
        <img src={support_img_4} alt="support_4 " className="w-[8rem] justify-self-center" />
        <img src={support_img_5} alt="support_5 " className="w-[8rem] justify-self-center" />
      </div>
    </div>
  );
};

export default SupportUs;
