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
      className="hover:backdrop-blur-sm transition-transform duration-300 ease-out
    hover:scale-101 hover:shadow-2xl  bg-white/19 shadow-lg backdrop-blur-md text-start p-10 rounded-[60]"
    >
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
              className="rounded-[40] bg-primary text-white py-2 px-5"
              key={index}
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimelineCard;
