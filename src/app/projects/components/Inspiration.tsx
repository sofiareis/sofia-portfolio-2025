import React from "react";
import { ProjectInspiration } from "@/interfaces/projects";
import CodeChip from "./CodeChip";

const ProjectInspo = (project: ProjectInspiration) => {
  return (
    <div
      className="flex items-center justify-center relative"
      style={{
        backgroundColor: project.backgroundcolor,
        color: project.textcolor,
      }}
    >
      <div className="w-full max-w-[1400px] md:mx-15 mx-5 md:my-10 my-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-start">
          <div className="flex flex-col md:mr-10">
            <h2 className="mb-4">The Inspiration</h2>
            <p className="leading-relaxed">{project.inspo}</p>
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
            <img
              alt=""
              src={project.img}
              className="lg:max-h-[380px] lg:max-w-[450px] ml-0 rounded-lg drop-shadow-xl drop-shadow-black/30
                           md:max-h-[350px] md:max-w-[350px] 
                           max-h-[250px] max-w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInspo;

/*project.renew ? (
    <div className="flex items-center justify-center bg-[var(--renew-colour)] bg-[url('/renew/vector2.png')] bg-no-repeat bg-contain bg-right">
      <div className="w-full max-w-[var(--max-width)] m-[var(--margin)] z-[1]">
        <div className="flex flex-col">
          <div className="text-xl font-semibold mb-4">The Inspiration</div>
          <div className="flex">
            <div className="flex-1">
              <div className="text-base leading-relaxed">
                {project.inspo.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                    <br />
                  </React.Fragment>
                ))}
              </div>
              <div className="font-semibold text-lg mt-4 text-center md:text-left">
                <p className="mt-0 mb-2">Check out the code:</p>
                <a target="_blank" href={project.githubLink}>
                  <FontAwesomeIcon
                    icon={projectLinks.icon}
                    className="text-black h-10 w-10 pl-4 hover:text-white transition-colors duration-300 md:pl-4"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) :*/
