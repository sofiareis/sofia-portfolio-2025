import { education } from "@/content/resume";

const Education = () => {
  return education.map((info, index) => (
    <div className="flex flex-col" key={index}>
      <p className="text-lg md:text-xl font-bold text-[#27161A] mb-1">
        {info.heading}
      </p>
      <p className="my-[5px]">{info.wheredate}</p>
      <p className="my-[5px]">{info.description}</p>
    </div>
  ));
};

export default Education;
