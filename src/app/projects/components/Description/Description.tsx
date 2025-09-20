import React from "react";
import { ProjectDescription } from "@/interfaces/projects";
import PrizeCard from "../PrizeCard";
import ImageSlider from "./ImageSlider";

const Description = (project: ProjectDescription) => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="w-full max-w-[1400px] mx-15 my-10">
        <h2 className="mb-4">Project Description</h2>
        <div className="flex flex-col items-center justify-center">
          {project.descriptionArray.map((value, index) => (
            <div
              key={index}
              className={`mb-8 grid md:grid-cols-[1fr_1fr] grid-cols-1 gap-5  ${
                index === 0 ? "mt-4" : "mt-8"
              }`}
            >
              <p className={`${index % 2 == 0 ? "order-1" : "order-2"}`}>
                {value.description}
              </p>
              <div className={`${index % 2 == 0 ? "order-2" : "order-1"} `}>
                {value.img.length > 1 ? (
                  <ImageSlider images={value.img} type={project.imageType} />
                ) : (
                  <img
                    src={value.img[0]}
                    alt={`single`}
                    className=" justify-self-center h-auto max-h-[400px] w-auto max-w-[350px] rounded-lg shadow-md transition-transform duration-500"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
