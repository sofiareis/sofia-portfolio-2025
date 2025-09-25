"use client";
import React from "react";
import Slider, { Settings } from "react-slick";

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className=" absolute right-6 top-1/2 -translate-y-1/2 z-10 translate-x-full
    flex items-center justify-center
    text-primary
    hover:text-secondary hover:cursor-pointer"
    >
      <span className="iconify lucide--chevron-right size-10" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-8 top-1/2 -translate-y-1/2 z-10 -translate-x-full
    flex items-center justify-center
    text-primary
    hover:text-secondary hover:cursor-pointer"
    >
      <span className="iconify lucide--chevron-left size-10" />
    </button>
  );
}

function CenterMode({ images }: { images: string[] }) {
  const settings: Settings = {
    //className: "center",
    dots: true,
    infinite: true,
    //centerMode: true,
    variableWidth: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: number) => (
      <div className="p-6 relative z-10">
        <ul className="flex justify-center gap-2 m-0">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="mt-5 btn btn-xs btn-circle btn-primary">{i + 1}</div>
    ),
  };
  return (
    <div className="slider-container w-[calc(100vw-60px)] max-w-[900px] mx-auto relative">
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
