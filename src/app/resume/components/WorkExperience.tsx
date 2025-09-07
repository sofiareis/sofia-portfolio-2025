import { work } from "@/content/resume";

const WorkExperience = () => {
  return (
    <div>
      {work.map((info, index) => (
        <div key={index} className="flex flex-col mb-5">
          <p className="text-lg md:text-xl font-bold text-[#27161A] mb-1">
            {info.heading}
          </p>
          <p className="mt-1 mb-4">{info.wheredate}</p>
          <ul className="list-[square] pl-5">
            {info.description.map((list, indexDescription) => (
              <li key={indexDescription} className="pb-2.5">
                {list}
              </li>
            ))}
          </ul>
          <div className="max-w-none">
            <ul className="list-none flex flex-wrap m-0 p-0">
              {info.skills.map((skill, indexSkill) => (
                <li
                  key={indexSkill}
                  className="font-semibold bg-[rgba(153,153,153,0.2)] text-[#666] mr-5 mb-3 md:px-4 md:py-3 px-3 py-2 rounded-[5px]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
