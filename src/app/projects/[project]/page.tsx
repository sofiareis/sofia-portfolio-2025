"use client";
import { projectsMap } from "@/content/projects/projects";
import ProjectInspo from "../components/Inspiration";
import { SHARITY } from "@/content/string";
import { notFound, useParams } from "next/navigation";
import ProjectPrize from "../components/Prizes";
import Description from "../components/Description/Description";
import ProjectTech from "../components/Technology/ProjectTech";

const ProjectPage = () => {
  const params = useParams<{ project: string }>();
  const project = params.project;
  if (!(project in projectsMap)) {
    return notFound();
  }
  return (
    <div className="">
      <div className="flex justify-center items-center mx-20 my-20">
        <div className="text-primary text-center mt-10">
          <p className="mb-4 text-3xl md:text-4xl lg:text-5xl font-semibold">
            She + share + charity:
          </p>
          <p className="text-black mb-10 font-medium text-3xl md:text-4xl lg:text-5xl">
            Empowering women through <br />
            donations and sustainability
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">
            Welcome to Sharity
          </p>
        </div>
        <div className="ml-20">
          <img
            src="/images/projects/sharity/Logo.png"
            alt="sharityLogo"
            className="lg:max-w-[300px] md:max-w-[200px] max-w-[200px]"
          />
        </div>
      </div>
      <ProjectInspo {...projectsMap[project].inspiration} />
      <Description {...projectsMap[project].description} />
      <ProjectTech {...projectsMap[project].technology} />
      {projectsMap[project].prizes && (
        <ProjectPrize {...projectsMap[project].prizes} />
      )}
    </div>
  );
};

export default ProjectPage;
