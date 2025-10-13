"use client";
import { projectsMap } from "@/content/projects/projects";
import ProjectInspo from "../components/Inspiration";
import { notFound, useParams } from "next/navigation";
import ProjectPrize from "../components/Prizes";
import Description from "../components/Description/Description";
import ProjectTech from "../components/Technology/ProjectTech";
import { projectBanner } from "@/content/projects/project-banner";

const ProjectPage = () => {
  const params = useParams<{ project: string }>();
  const project = params.project;
  if (!(project in projectsMap)) {
    return notFound();
  }
  return (
    <div className="">
      <div className="main-layout z-[1] py-12 pb-8 md:py-20 md:pb-15">
        {projectBanner[project]}
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
