import { education } from "@/content/educatiom";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="w-full max-w-[1400px] mx-auto px-5 md:px-10 my-10">
        <div className="text-center">
          <h2 className="mb-5 md:mb-10 text-center">Education</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac felis hendrerit, interdum nisl sit amet, sagittis sapien.
          </p>
        </div>
        <div className="flex flex-col items-center my-10">
          {education.map((value, index) => (
            <EducationCard
              key={index}
              title={value.title}
              subtitle={value.subtitle}
              description={value.description}
              logo={value.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
