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
    <div className="transition-transform duration-300 ease-out hover:scale-101 hover:shadow-xl badge badge-outline bg-white/10 shadow-md ring-2 ring-black/5  py-4 px-4">
      <a target="_blank" href={link} className="flex items-center">
        <span className="mr-3">{title}</span>
        {type == "github" ? (
          <span className="iconify lucide--github size-5" />
        ) : (
          <img
            src={color == "black" ? "/devpost.svg" : "/devpostWhite.svg"}
            alt="My Icon"
            className="w-5 h-5"
          />
        )}
      </a>
    </div>
  );
};

export default CodeChip;
