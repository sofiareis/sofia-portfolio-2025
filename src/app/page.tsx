import About from "./components/AboutMe";
import Education from "./components/Education/Education";
import Intro from "./components/Intro";
import MyProjects from "./components/projectCard/MyProjects";
import Technologies from "./components/technologies/Technologies";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden md:py-0">
      <div className="relative mt-[-64px]">
        <div className="absolute top-200 md:top-290 lg:top-270 left-0 right-0 h-[500px] md:h-[700px] bg-[#7E8D85] transform skew-y-[-9deg] origin-top-left shadow-xl shadow-black/35 z-2" />
        <div className="relative h-screen flex items-center z-10">
          <div className="w-full h-[500px] md:h-[700px] bg-primary transform skew-y-[9deg] origin-top-left shadow-xl shadow-black/35 z-0">
            <section className=" h-full skew-y-[-9deg] z-10">
              <div className="main-layout min-h-[600px] flex flex-col items-center justify-center text-white text-center">
                <Intro />
              </div>
            </section>
          </div>
        </div>
        <div className="main-layout relative z-10 flex flex-col items-center justify-center text-black text-center">
          <About />
        </div>
      </div>
      <MyProjects />
      <Technologies />
      <Education />
    </main>
  );
}
