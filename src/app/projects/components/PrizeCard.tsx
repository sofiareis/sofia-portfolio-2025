import Image from "next/image";

type PrizeCardProps = {
  prize: string;
  description: string;
  logo: string;
  color: string;
};

const PrizeCard = ({ prize, description, logo, color }: PrizeCardProps) => {
  return (
    <div
      className={`card shadow-md ring-2 shadow-black ring-white py-6 px-5 hover:shadow-lg hover:shadow-black`}
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-white w-10 h-10 md:w-12 md:h-12 card flex items-center justify-center p-2">
          <Image
            src={logo}
            alt={`prize-${prize}`}
            width={20}
            height={20}
            className="md:max-w-8 md:max-h-8 max-w-6 max-h-6 w-auto h-full"
          />
        </div>
        <h3>{prize}</h3>
      </div>
      <p className="text-start">{description}</p>
    </div>
  );
};

export default PrizeCard;
