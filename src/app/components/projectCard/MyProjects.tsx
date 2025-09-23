import Link from "next/link";
import ProjectSlider from "./ProjectSlider";

const MyProjects = () => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="w-full max-w-[1400px] mx-15 my-10">
        <div className="text-center">
          <h2 className="mb-5 md:mb-10 text-center">My Projects</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac felis hendrerit, interdum nisl sit amet, sagittis sapien.
          </p>
        </div>
        <ProjectSlider />
        <Link href="/projects">
          <div className="flex items-center justify-center">
            <button className="btn text-lg btn-primary rounded-4xl">
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
