import React from "react";
import { ProjectDescription } from "@/interfaces/projects";
import ImageCarousel from "./ImageCarousel";

const Description = (project: ProjectDescription) => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="project-layout">
        <h2 className="mb-4">Project Description</h2>
        <div className="flex flex-col items-center justify-center">
          {project.descriptionArray.map((value, index) => (
            <div key={index} className={`mb-8 flex flex-col`}>
              <p className={`mb-10`}>{value.description}</p>
              <ImageCarousel
                images={value.img}
                color={project.backgroundcolor}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
