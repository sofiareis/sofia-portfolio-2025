import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects-card";

function Loading() {
  return (
    <div className="flex justify-center">
      <div className="z-[1] flex w-full max-w-[1400px] flex-col mx-auto py-15 md:py-20 md:px-10 px-5">
        <div className="flex flex-col items-center">
          <h2 className="mb-8 md:mb-15">My Projects</h2>
          <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center">
            {projects.map((proj, idx) => (
              <ProjectCard
                key={idx}
                title={proj.title}
                imageSrc={proj.imageSrc}
                description={proj.description}
                alt={`Project ${idx + 1}`}
                page={proj.page}
                backgroundcolor={proj.backgroundcolor}
                technologies={proj.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
