import About from "./components/AboutMe";
import Intro from "./components/Intro";

//AC626F
//C08791
//#CEA1AA
//864654

//18253A
//bg-[linear-gradient(180deg,#C08791_0%,#CEA1AA_100%)]
export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden md:py-0  ">
      <section className="relative overflow-hidden h-screen ">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-accent clip-top z-0" />
          <div className="absolute inset-0 bg-primary clip-bottom z-0" />
        </div>
        <div className="relative z-10 max-w-[1400px] h-full mx-auto flex flex-col items-center justify-center px-5 md:px-10 text-white text-center">
          <div className="text-white">
            <Intro />
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#E0E0E0]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary clip-top-inverse z-0" />
          <div className="absolute inset-0 bg-[#7E8D85] clip-bottom-inverse z-0" />
        </div>
        <div className="relative z-10 max-w-[1400px] h-full mx-auto flex flex-col items-center justify-center px-5 md:px-10 text-white text-center">
          <div className="text-black">
            <About />
          </div>
        </div>
      </section>
    </main>
  );
}

/*
<div className="max-w-[1400px] mx-auto border-gray-700 border-[1.5px] rounded-2xl px-10  py-5">
*/
