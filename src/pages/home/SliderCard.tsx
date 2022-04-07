import React from 'react';
import img from "../../assets/images/doctor-image-3.jpg";


const SliderCard: React.FC = () => {
    return (
        <div className="w-[90%] h-auto mx-auto bg-white px-6 pt-7 pb-8 rounded">
      <div className="flex items-center">
        <img src={img} alt="" className="h-16  w-16 rounded-full mr-4" />
        <div>
          <h3 className="text-sm font-semibold">Nice Environment</h3>
          <p className="text-main-normal">jaker khan</p>
        </div>
      </div>
      <p className="mt-7 text-main-normal">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
        consectetur obcaecati sapiente illo cum rerum iste fugit impedit eveniet
        blanditiis.
      </p>
    </div>
    );
};

export default SliderCard;
