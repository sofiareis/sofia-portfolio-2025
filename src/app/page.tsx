import About from "./components/AboutMe";
import Intro from "./components/Intro";
import MyProjects from "./components/projectCard/MyProjects";
import Technologies from "./components/Technologies";

//AC626F
//C08791
//#CEA1AA
//864654

//18253A
//bg-[linear-gradient(180deg,#C08791_0%,#CEA1AA_100%)]

/* bg pink */
/*
position: absolute;
width: 1058px;
height: 1728px;
left: 0px;
top: 181px;

background: #AC626F;
box-shadow: 0px 16px 20px rgba(0, 0, 0, 0.25);
transform: rotate(90deg);
*/

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden md:py-0">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-100 bg-[#7E8D85] clip-bottom-inverse z-2" />

        <section className="relative overflow-hidden h-screen">
          <div className="absolute inset-0 bg-primary clip-top z-0" />
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

// <div className="absolute inset-0 bg-[#7E8D85] clip-bottom z-0" />

/*
<div className="max-w-[1400px] mx-auto border-gray-700 border-[1.5px] rounded-2xl px-10  py-5">
*/

//    <div className="absolute inset-0 bg-[#7E8D85] clip-bottom-inverse z-0" />
