import { projects } from "@/content/resume";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      {projects.map((info, index) => (
        <div className="flex flex-col mb-5" key={index}>
          <p className="my-[5px]">
            {info.description}
            <Link
              href="/projects"
              className="no-underline text-[#4E2D36] font-medium hover:font-semibold"
            >
              {info.link}
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
