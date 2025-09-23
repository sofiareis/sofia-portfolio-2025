import React from "react";
import { ProjecTechnology } from "@/interfaces/projects";
import TechCard from "./TechCard";

const techCard = (
  project: ProjecTechnology,
  type: "frontend" | "backend" | "languages" | "tools",
  title: string
) => {
  return (
    <TechCard
      tech={project[type]}
      cardColor={project.backgroundcolor}
      textColor={project.badgeTextColor}
      badgeColor={project.badge}
      title={title}
    />
  );
};

const ProjectTech = (project: ProjecTechnology) => {
  return (
    <div
      className="flex items-center justify-center relative"
      style={{
        backgroundColor: project.backgroundcolor,
        color: project.textcolor,
      }}
    >
      <div className="w-full max-w-[1400px] mx-15 my-10">
        <h2 className="mb-4">Project Technologies</h2>
        <div className="mt-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-8">
          {techCard(project, "frontend", "Frontend")}
          {techCard(project, "backend", "Backend")}
          {techCard(project, "languages", "Languages")}
          {techCard(project, "tools", "Tools")}
        </div>
      </div>
    </div>
  );
};

export default ProjectTech;
