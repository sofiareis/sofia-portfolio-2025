import Link from "next/link";
import ProjectSlider from "./ProjectSlider";

const MyProjects = () => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="main-layout my-10">
        <div className="text-center">
          <h2 className="main-title">My Projects</h2>
          <p>
            Some of my personal and hackathon projects. Click on "Learn more" to
            see the full description of a project and "View all projects" to see
            all my apps.
          </p>
        </div>
        <ProjectSlider />
        <Link href="/projects">
          <div className="flex items-center justify-center">
            <button className="btn md:text-lg text-base btn-primary rounded-4xl">
              View all projects
              <span className="iconify lucide--arrow-right" />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MyProjects;
