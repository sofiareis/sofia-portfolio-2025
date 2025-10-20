import { CardProps } from "@/interfaces/interfaces";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({
  title,
  description,
  imageSrc,
  page,
  alt = "Image",
  backgroundcolor,
  technologies,
}: CardProps) {
  return (
    <Link href={`/projects/${page}`}>
      <div className="card max-w-100 bg-base-100 shadow-md group relative overflow-hidden square-none h-full">
        <figure className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={imageSrc}
            width={400}
            height={300}
            alt={alt}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundColor: backgroundcolor }}
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-center text-white text-start p-4">
            <p className="text-lg font-bold drop-shadow-md">
              <span className="text-xl">{title}</span> <br />
              {description}
            </p>
          </div>
        </figure>
        <div className="card-body">
          <span className="text-lg">{title}</span>
          <div className="card-actions">
            {technologies.map((tech, index) => (
              <div key={index} className="badge badge-sm badge-outline">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
export default ProjectCard;
