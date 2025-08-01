import About from "./components/AboutMe";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen bg-white overflow-x-hidden">
        <section className="h-screen relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#C9A6B8] clip-top z-0" />
            <div className="absolute inset-0 bg-[#8E5572] clip-bottom z-0" />
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto h-full flex flex-col items-center justify-center px-6 text-white text-center">
            <div className="text-white">
              <Intro />
            </div>
          </div>
        </section>
        <section className="bg-white py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <About />
          </div>
        </section>
      </main>
    </>
  );
}
