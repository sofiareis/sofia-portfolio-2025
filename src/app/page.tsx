import About from "./components/AboutMe";
import Education from "./components/Education/Education";
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
      <div className="relative mt-[-64px]">
        <div className="absolute top-200 md:top-290 lg:top-270 left-0 right-0 h-[500px] md:h-[700px] bg-[#7E8D85] transform skew-y-[-9deg] origin-top-left shadow-xl shadow-black/35 z-2" />
        <div className="relative h-screen flex items-center z-10">
          <div className="w-full h-[500px] md:h-[700px] bg-primary transform skew-y-[9deg] origin-top-left shadow-xl shadow-black/35 z-0">
            <section className="overflow-hidden h-full skew-y-[-9deg] z-10">
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

/*
<div className="relative">
        <div className="absolute top-200 md:top-270 left-0 right-0 h-[500px] md:h-[700px] bg-[#7E8D85] transform skew-y-[-9deg] origin-top-left shadow-xl shadow-black/35 z-2" />
        <div className="h-screen flex justify-center items-center">
          <div className=" relative h-[500px] md:h-[700px] bg-primary transform skew-y-[9deg] origin-top-left shadow-xl shadow-black/35 z-0">
            <section className="relative overflow-hidden h-full skew-y-[-9deg] ">
              <div className="relative z-10 max-w-[1400px] min-h-[600px] mx-auto flex flex-col items-center justify-center px-5 md:px-10 text-white text-center">
                <Intro />
              </div>
            </section>
          </div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center justify-center px-5 md:px-10 text-black text-center">
          <About />
        </div>
      </div>
        */

/*
<div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0">
            <div className="h-[500px] md:h-[700px] bg-black transform skew-y-[9deg] origin-top-left z-25 -mt-10" />
          </div>
          */

// <div className="absolute top-25 inset-0 md:top-40 lg:top-35 h-[500px] md:h-[700px] bg-primary transform skew-y-[9deg] origin-top-left shadow-xl shadow-black/35 z-0" />

/*
<div className="mt-10 flex items-center justify-center inset-0 bg-primary transform skew-y-[7deg] origin-top-left z-0 ">
            <div className="my-15 relative z-10 max-w-[1400px] h-full mx-auto flex flex-col items-center justify-center px-5 md:px-10 text-white text-center skew-y-[-7deg]">
              <Intro />
            </div>
          </div>
          */
