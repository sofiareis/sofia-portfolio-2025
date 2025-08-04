import Timeline from "./Timeline";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center ">
      <h2>ABOUT ME</h2>
      <p className="my-5 md:my-10 text-md lg:text-xl text-center md:text-start">
        Throughout my engineering academic journey, I developed a strong
        foundation in full-stack development, expanding my experience in
        frontend and backend.
      </p>
      <Timeline />
    </section>
  );
};

export default About;
