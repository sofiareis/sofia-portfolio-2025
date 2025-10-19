import { JSX } from "react";

const EducationCard = ({
  title,
  subtitle,
  description,
  logo,
}: {
  title: string;
  subtitle: string;
  description: JSX.Element;
  logo: string;
}) => {
  return (
    <div
      className="w-full max-w-[1200px] hover:backdrop-blur-sm transition-transform duration-300 ease-out
    hover:scale-101 hover:shadow-2xl  bg-white/19 shadow-lg backdrop-blur-md text-start my-5 md:py-8 py-5 px-5 md:rounded-[60] rounded-[35]"
    >
      <div className="hidden invisible md:visible md:grid md:grid-cols-[0.2fr_1fr] md:gap-3">
        <img src={logo} className="h-[150px] justify-self-center" />
        <div className="flex flex-col">
          <h3>{title}</h3>
          <h3>{subtitle}</h3>
          <div className="mt-3">{description}</div>
        </div>
      </div>
      <div className="md:hidden md:invisible flex flex-col">
        <div className="flex items-center gap-3 mb-5">
          <img src={logo} className="max-w-6 max-h-6" />
          <h3>{title}</h3>
        </div>
        <div className="flex flex-col">
          <h3>{subtitle}</h3>
          <div className="md:mt-3 mt-1">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
