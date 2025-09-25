import About from "./components/AboutMe";
import Intro from "./components/Intro";
import MyProjects from "./components/projectCard/MyProjects";
import Technologies from "./components/technologies/Technologies";

//AC626F
//C08791
//#CEA1AA
//864654

//18253A

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden md:py-0">
      <div className="relative">
        <div className="absolute top-25 inset-0 md:top-40 lg:top-35 h-[500px] md:h-[700px] bg-primary transform skew-y-[9deg] origin-top-left shadow-xl shadow-black/35 z-0" />
        <div className="absolute top-200 md:top-270 left-0 right-0 h-[500px] md:h-[700px] bg-[#7E8D85] transform skew-y-[-9deg] origin-top-left shadow-xl shadow-black/35 z-2" />
        <section className="relative overflow-hidden h-screen">
          <div className="relative z-10 max-w-[1400px] h-full mx-auto flex flex-col items-center justify-center px-5 md:px-10 text-white text-center">
            <Intro />
          </div>
        </section>
        <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center justify-center px-5 md:px-10 text-black text-center">
          <About />
        </div>
      </div>
      <MyProjects />
      <Technologies />
    </main>
  );
}
