import { resume, skillSet } from "@/content/resume";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";

const Resume = () => {
  return (
    <div className="flex justify-center">
      <div className="z-[1] flex w-full max-w-[1400px] flex-col mx-auto py-15 md:py-20 md:px-10 px-5">
        <div className="md:grid md:grid-cols-[0.8fr_2fr] md:gap-6 md:items-start flex flex-col md:px-[50px] md:py-[60px] px-[20px] py-[30px] bg-[#E9EAEC] shadow-lg shadow-black/60">
          <div className="hidden invisible md:block md:visible md:mb-[25px]">
            {skillSet.map((info, index) => (
              <div key={index} className="flex flex-col mb-5">
                <p className="text-xl font-bold text-[#4E2D36] mx-0 mb-1">
                  {info.heading}
                </p>
                <ul className="list-[square] pl-5">
                  {info.skills.map((skill, index) => (
                    <li className="my-3" key={index}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="md:hidden md:invisible block visible mb-5">
            <div className="mb-4 border-b-2 border-b-[#333] border-solid">
              <p className="text-2xl font-semibold text-[#4E2D36]">
                Technical Skills
              </p>
            </div>
            <div className="flex flex-col items-start self-start">
              {skillSet.map((info, index) => (
                <div key={index} className="flex flex-col">
                  <p className="text-lg font-bold text-[#4E2D36] ">
                    {info.heading}:
                  </p>
                  <p className="mx-0 mt-1 mb-4">{info.skills.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            {resume.map((info, index) => (
              <div key={index} className="mb-5">
                <div className="mb-4 border-b-2 border-b-[#333] border-solid">
                  <p className="font-semibold md:text-3xl text-2xl self-start text-[#4E2D36] pb-2">
                    {info.title}
                  </p>
                </div>
                <div className="flex flex-col items-start self-start">
                  {info.title == "Education" && <Education />}
                  {info.title == "Work Experience" && <WorkExperience />}
                  {info.title == "Projects" && <Projects />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
