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
        <div className="bg-white card p-2">
          <img src={logo} alt="prize" className="max-w-8 max-h-8" />
        </div>
        <h3>{prize}</h3>
      </div>
      <p className="text-start">{description}</p>
    </div>
  );
};

export default PrizeCard;
