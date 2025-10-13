import TechCarousel from "./TechCarousel";

const Technologies = () => {
  return (
    <div className="flex items-center justify-center relative mt-10 bg-[linear-gradient(180deg,rgba(172,98,111,0)_0%,rgba(172,98,111,0.3)_50%,rgba(172,98,111,0)_100%)]">
      <div className="w-full my-10">
        <h2 className="mb-5 md:mb-8 text-center text-primary">
          Technologies I work with
        </h2>
        <TechCarousel />
      </div>
    </div>
  );
};

export default Technologies;
