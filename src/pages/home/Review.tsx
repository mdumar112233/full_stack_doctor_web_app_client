import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderCard from "./SliderCard";

const Review: React.FC = () => {
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };

  return (
    <section className="mb-40 bg-[#f4f9fc] h-auto py-28">
      <div className="w-[90%] xm:w-[80%] mx-auto">
        {/* testimonial title */}
        <div className="text-center">
          <h1 className="text-2xl xm:text-3xl md:text-5xl text-main-color font-bold">
            We served over 5000+ patients
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

        {/* testimonial slider */}
        <div className="mt-16">
          <Slider {...settings1}>
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Review;
