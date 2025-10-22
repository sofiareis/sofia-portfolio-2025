import React from "react";
import { ProjectInspiration } from "@/interfaces/projects";
import CodeChip from "./CodeChip";
import Image from "next/image";

const ProjectInspo = (project: ProjectInspiration) => {
  return (
    <div
      className="flex items-center justify-center relative"
      style={{
        backgroundColor: project.backgroundcolor,
        color: project.textcolor,
      }}
    >
      <div className="project-layout">
        <div className="flex flex-col md:flex-row md:items-center md:justify-start">
          <div className="flex flex-col md:mr-10">
            <h2 className="mb-4">The Inspiration</h2>
            <div className="leading-relaxed">{project.inspo}</div>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.githubLink && (
                <CodeChip
                  title={"View Code"}
                  link={project.githubLink}
                  type={"github"}
                />
              )}
              {project.devpostLink && (
                <CodeChip
                  title={"View on Devpost"}
                  link={project.devpostLink}
                  type={"devpost"}
                  color={project.textcolor}
                />
              )}
            </div>
          </div>
          <div className={`flex items-center justify-center mt-8 md:mt-0`}>
            <Image
              alt={`project-inspo`}
              width={400}
              height={400}
              src={project.img}
              className="lg:max-h-[380px] lg:max-w-[450px] ml-0 rounded-lg drop-shadow-xl drop-shadow-black/30
                           md:max-h-[350px] md:max-w-[350px] 
                           max-h-[250px] max-w-[300px] w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInspo;
