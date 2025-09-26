const EducationCard = ({
  title,
  subtitle,
  description,
  logo,
}: {
  title: string;
  subtitle: string;
  description: string;
  logo: string;
}) => {
  return (
    <div
      className="w-full max-w-[1200px] hover:backdrop-blur-sm transition-transform duration-300 ease-out
    hover:scale-101 hover:shadow-2xl  bg-white/19 shadow-lg backdrop-blur-md text-start my-5 md:py-8 py-5 px-5 rounded-[60]"
    >
      <div className="grid grid-cols-[0.2fr_1fr] gap-3">
        <img src={logo} className="h-[150px] justify-self-center" />
        <div className="flex flex-col">
          <h3>{title}</h3>
          <h3>{subtitle}</h3>
          <p className="mt-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
