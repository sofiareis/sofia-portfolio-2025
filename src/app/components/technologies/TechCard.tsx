import { techSquare } from "@/content/technologies";
import Image from "next/image";

const TechCard = ({ technology }: { technology: techSquare }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-4">
      <div className="bg-white rounded-2xl md:w-20 md:h-20 w-14 h-14 flex items-center justify-center">
        <Image
          src={technology.img}
          alt={`${technology.tech}`}
          className="md:max-w-[50px] max-w-[30px] h-auto w-auto"
          width={50}
          height={50}
        />
      </div>
      <p className="mt-1">{technology.tech}</p>
    </div>
  );
};

export default TechCard;
