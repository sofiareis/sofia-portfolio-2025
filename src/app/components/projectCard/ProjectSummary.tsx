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
    <div className="grid grid-cols-2 gap-5">
      <img
        src={imageSrc}
        alt={`project-summary-${title}`}
        className="object-contain w-full max-h-[400px]"
      />
      <div className="flex flex-col">
        <p className="text-2xl font-semibold mb-5">{title}</p>
        <p>{description}</p>
        <div className="mt-5 flex gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-[#7E8D85]/20 rounded-[100] px-3 py-1 font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center text-center mt-10 ">
          <Link href={`/projects/${page}`}>
            <button className="btn hover:shadow-lg hover:scale-101 bg-[#7E8D85] shadow-md shadow-black/25 border-0 text-white flex items-center gap-2 rounded-[100] px-4 py-2 font-semibold text-lg">
              Learn more <span className="iconify lucide--arrow-right size-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
