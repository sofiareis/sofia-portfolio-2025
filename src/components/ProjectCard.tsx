import { CardProps } from "@/app/interfaces/interfaces";

function ProjectCard({
  title,
  description,
  imageSrc,
  page,
  alt = "Image",
}: CardProps) {
  return (
    <div className="card max-w-100 bg-base-100 shadow-md group relative overflow-hidden square-none">
      <figure className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-center text-white text-start p-4">
          <p className="text-lg font-bold drop-shadow-md">
            <span className="text-xl">{title}</span> <br />
            {description}
          </p>
        </div>
      </figure>
    </div>
  );
}
export default ProjectCard;
