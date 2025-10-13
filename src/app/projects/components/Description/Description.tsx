import React from "react";
import { ProjectDescription } from "@/interfaces/projects";
import ImageCarousel from "./ImageCarousel";

const Description = (project: ProjectDescription) => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="w-full max-w-[1400px] md:mx-15 mx-5 md:my-10 my-5">
        <h2 className="mb-4">Project Description</h2>
        <div className="flex flex-col items-center justify-center">
          {project.descriptionArray.map((value, index) => (
            <div key={index} className={`mb-8 flex flex-col`}>
              <p className={`mb-10`}>{value.description}</p>
              {value.img.length > 1 ? (
                <ImageCarousel
                  images={value.img}
                  color={project.backgroundcolor}
                />
              ) : (
                <img
                  src={value.img[0]}
                  alt={`single`}
                  className=" justify-self-center h-auto max-h-[400px] w-auto max-w-[350px] rounded-lg shadow-md transition-transform duration-500"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
