import { CardProps } from "@/interfaces/interfaces";
import Link from "next/link";

const ProjectSummary = ({
  title,
  description,
  imageSrc,
  page,
  technologies,
}: CardProps) => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-5 flex flex-col">
      <img
        src={imageSrc}
        alt={`project-summary-${title}`}
        className="object-contain w-full max-h-[400px]"
      />
      <div className="flex flex-col">
        <p className="md:text-2xl text-lg font-semibold md:mb-5 mb-2 text-center md:text-start">
          {title}
        </p>
        <p>{description}</p>
        <div className="mt-5 flex flex-row  gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="w-fit bg-[#7E8D85]/20 rounded-[100] px-3 py-1 font-semibold text-sm md:text-base"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center text-center md:mt-10 mt-5">
          <Link href={`/projects/${page}`}>
            <button className="btn hover:shadow-lg hover:scale-101 bg-[#7E8D85] shadow-md shadow-black/25 border-0 text-white flex items-center gap-2 rounded-[100] md:px-4 md:py-2 py-1 px-3 font-semibold md:text-lg text-base">
              Learn more <span className="iconify lucide--arrow-right size-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
