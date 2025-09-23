import React from "react";
import { ProjectPrizes } from "@/interfaces/projects";
import CodeChip from "./CodeChip";
import PrizeCard from "./PrizeCard";

const ProjectPrize = (project: ProjectPrizes) => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="w-full max-w-[1400px] mx-15 my-10">
        <h2 className="mb-4">Project Prizes</h2>
        <div className="mt-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5">
          {project.prizes.map((prize, index) => (
            <PrizeCard
              key={index}
              prize={prize.prize}
              logo={prize.logo}
              description={prize.description}
              color={project.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPrize;
