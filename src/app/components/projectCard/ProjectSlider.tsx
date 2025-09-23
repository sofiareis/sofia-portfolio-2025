"use client";
import { projectsSummary } from "@/content/projects-card";
import ProjectSummary from "./ProjectSummary";
import Slider from "react-slick";

function SampleNextArrow(props) {
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

function SamplePrevArrow(props) {
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

const ProjectSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: number) => (
      <div className="p-6 relative z-10">
        <ul className="flex justify-center gap-2 m-0">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="btn btn-xs btn-circle btn-primary">{i + 1}</div>
    ),
  };
  return (
    <div className="slider-container w-[calc(100vw-60px)] max-w-[900px] mx-auto mt-15 relative">
      <Slider {...settings} className="mb-18">
        {projectsSummary.map((project, index) => (
          <ProjectSummary
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            page={project.page}
            technologies={project.technologies}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
