"use client";
import React from "react";
import Slider, { Settings } from "react-slick";

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className=" absolute right-2 top-1/2 -translate-y-1/2 z-10
    flex items-center justify-center
    w-6 h-6
    bg-secondary/50 text-white
    rounded-full
    hover:bg-secondary/70"
    >
      <span className="iconify lucide--chevron-right size-5" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 
      flex items-center justify-center
    w-6 h-6 bg-secondary/50 text-white rounded-full hover:bg-secondary/70"
    >
      <span className="iconify lucide--chevron-left size-5" />
    </button>
  );
}

function CenterMode({ images }: { images: string[] }) {
  const settings: Settings = {
    className: "center",
    dots: true,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToScroll: 1,
          initialSlide: 1,
          //centerPadding: "30px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          //slidesToShow: 1,
          slidesToScroll: 1,
          //centerPadding: "20px",
        },
      },
    ],
  };
  return (
    <div className="flex justify-center">
      <div className="slider-container w-[calc(100vw-80px)] max-w-[900px] mx-auto">
        <Slider {...settings}>
          {images.map((img, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center px-4"
            >
              <img
                src={img}
                alt={`slide-${i}`}
                className="h-auto max-h-[400px] w-auto shadow-lg rounded-lg"
              />
              <p className="mt-2 text-center text-sm text-gray-600">
                Image description
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CenterMode;

//<div className="slider-container lg:max-w-[900px] md:max-w-[700px] sm:max-w-[600px] max-w-[400px] mx-auto">

/*
<img
              src={img}
              alt={`slide-${i}`}
              className="h-auto max-h-[350px] w-auto max-w-[350px] rounded-lg shadow-lg"
            />
            */
