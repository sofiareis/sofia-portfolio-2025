import { motion } from "motion/react";
type TechCardProps = {
  tech: string[];
  //logo: string;
  cardColor: string;
  textColor: string;
  badgeTextColor: string;
  badgeColor: string;
  title: string;
};

const TechCard = ({
  tech,
  cardColor,
  textColor,
  badgeTextColor,
  badgeColor,
  title,
}: TechCardProps) => {
  return (
    <motion.div
      className={`card shadow-lg shadow-accent py-6 ring-1 px-8`}
      style={{ backgroundColor: cardColor, color: textColor }}
    >
      <h2 className="mb-4 text-center">{title}</h2>
      <div
        className="flex gap-2 flex-wrap md:grid md:gap-0 md:grid-rows-1 md:justify-center"
        style={{ color: badgeTextColor }}
      >
        {tech.map((value, index) => (
          <div
            key={index}
            className="md:max-w-48 md:min-w-42 rounded-2xl backdrop-blur-md py-1 px-3 my-2 shadow-lg text-center"
            style={{ backgroundColor: badgeColor }}
          >
            <h3>{value}</h3>
          </div>
        ))}
      </div>
    </motion.div>
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
