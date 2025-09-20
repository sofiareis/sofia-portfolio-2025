import { CareerTimeline } from "../../interfaces/interfaces";

const TimelineCard = ({
  company,
  date,
  description,
  achievements,
  technology,
}: CareerTimeline) => {
  return (
    <div
      className="relative transition-transform duration-300 ease-out
    hover:scale-101 hover:shadow-2xl  "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#B97987]/25 to-[#3C5C90]/25  card" />
      <div className="hover:backdrop-blur-sm relative card bg-white/10 shadow-lg ring-2 ring-black/5 backdrop-blur-md  text-start py-5 px-4 ">
        <h2>{company}</h2>
        <h3>{date}</h3>
        <p className="mt-4">{description}</p>
        {achievements && (
          <div className="mt-2">
            <h3>Key Achievements</h3>
            <ul>
              {achievements.map((achievement, index) => (
                <li className="list-[circle] ml-4" key={index}>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
        {technology && (
          <ul className="list-none flex flex-wrap mt-5 p-0 gap-3">
            {technology.map((tech, index) => (
              <li
                className="rounded-sm bg-secondary text-white py-1 px-3"
                key={index}
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TimelineCard;
