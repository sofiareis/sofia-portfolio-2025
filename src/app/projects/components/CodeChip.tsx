import Image from "next/image";

const CodeChip = ({
  title,
  link,
  type,
  color = "black",
}: {
  title: string;
  link: string;
  type: "devpost" | "github";
  color?: string;
}) => {
  return (
    <div className="text-sm md:text-base transition-transform duration-300 ease-out hover:scale-101 hover:shadow-xl badge badge-outline bg-white/10 shadow-md ring-2 ring-black/5 py-4 px-4">
      <a target="_blank" href={link} className="flex items-center my-3">
        <span className="mr-3">{title}</span>
        {type == "github" ? (
          <span className="iconify lucide--github size-5" />
        ) : (
          <Image
            src={color == "black" ? "/devpost.svg" : "/devpostWhite.svg"}
            alt={`icon-title`}
            className="w-5 h-5"
            width={20}
            height={20}
          />
        )}
      </a>
    </div>
  );
};

export default CodeChip;
