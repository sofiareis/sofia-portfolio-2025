type TechCardProps = {
  tech: string[];
  //logo: string;
  cardColor: string;
  textColor: string;
  badgeColor: string;
  title: string;
};

const TechCard = ({
  tech,
  cardColor,
  textColor,
  badgeColor,
  title,
}: TechCardProps) => {
  return (
    <div
      className={`card shadow-lg shadow-accent py-6 ring-1 `}
      style={{ backgroundColor: cardColor, color: textColor }}
    >
      <p className="text-2xl font-semibold mb-4 text-center">{title}</p>
      <div className="flex flex-col items-center">
        {tech.map((value, index) => (
          <div
            key={index}
            className="w-48 rounded-2xl backdrop-blur-md py-1 px-3 my-2 shadow-lg text-center"
            style={{ backgroundColor: badgeColor }}
          >
            {/*<img src={logo} alt="prize" className="w-8 h-8" />*/}
            <h3>{value}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
/*
<div
      className="relative transition-transform duration-300 ease-out
    hover:scale-101 hover:shadow-2xl  "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#B97987]/25 to-[#3C5C90]/25  card" />
      <div className="hover:backdrop-blur-sm relative card bg-white/10 shadow-lg ring-2 ring-black/5 backdrop-blur-md  text-start py-5 px-4 ">
      </div>
      */
