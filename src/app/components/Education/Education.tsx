import { education } from "@/content/educatiom";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="main-layout my-10">
        <div className="text-center">
          <h2 className="main-title">Education</h2>
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
