import About from "./components/AboutMe";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#C9A6B8] overflow-x-hidden py-6 md:py-0 ">
        <section className="h-[calc(100vh-64px)] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#C9A6B8] clip-top z-0" />
            <div className="absolute inset-0 bg-[#8E5572] clip-bottom z-0" />
          </div>
          <div className="relative z-10 max-w-[1400px] md:min-h-full mx-auto flex flex-col items-center justify-center px-5 md:px-10 text-white text-center">
            <div className="text-white">
              <Intro />
            </div>
          </div>
        </section>
        <section className="bg-white py-10 md:py-20 md:px-10 px-5">
          <div className="max-w-[1400px] mx-auto">
            <About />
          </div>
        </section>
      </main>
    </>
  );
}
