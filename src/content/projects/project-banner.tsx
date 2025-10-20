import { motion } from "motion/react";
import { ReactElement } from "react";
import {
  ALACRITY,
  CAREERCUE,
  CHESSMATE,
  MOKO,
  ONEPIECE,
  PATIENVIZ,
  RENEW,
  SHARITY,
} from "../string";
import Image from "next/image";

const sharityBanner = (
  <div className="flex md:flex-row flex-col justify-center items-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-primary text-center"
    >
      <p className="md:mb-4 mb-2 text-2xl md:text-3xl lg:text-4xl font-semibold">
        She + share + charity:
      </p>
      <p className="text-black mb-5 md:mb-10 font-medium text-2xl md:text-3xl lg:text-4xl">
        Empowering women through <br />
        donations and sustainability
      </p>
      <p className="text-3xl md:text-4xl lg:text-5xl font-semibold">
        Welcome to Sharity
      </p>
    </motion.div>
    <motion.div
      className="md:ml-10 mt-5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <Image
        src="/images/projects/sharity/Logo.png"
        alt="sharityLogo"
        width={300}
        height={290}
        className="lg:max-w-[300px] md:max-w-[200px] max-w-[150px] h-auto"
      />
    </motion.div>
  </div>
);

const careercueBanner = (
  <div className="flex md:flex-row flex-col justify-center items-center ">
    <motion.div
      className="mb-5 md:mr-20"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <Image
        width={400}
        height={270}
        src="/images/projects/careercue/Logo.png"
        alt="sharityLogo"
        className="lg:max-w-[400px] md:max-w-[300px] max-w-[300px] h-autp"
      />
    </motion.div>
    <motion.div
      className="md:text-left text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">
        CareerCue
      </p>
      <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#7c79dc]">
        Get interview ready with ease: your success starts here!
      </p>
    </motion.div>
  </div>
);

const renewBanner = (
  <div className="flex md:flex-row flex-col justify-center items-center md:bg-[url(/images/projects/renew/vector1.png)] md:bg-contain md:bg-no-repeat md:bg-right">
    <motion.div
      className="mb-5 md:mr-20"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        width={350}
        height={420}
        src="/images/projects/renew/Logo.png"
        alt="sharityLogo"
        className="lg:max-w-[350px] md:max-w-[300px] max-w-[250px] h-auto"
      />
    </motion.div>
    <motion.div
      className="md:text-left text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#334B71]">
        Renew: A New Life for Refuges
      </p>
      <p className="text-black font-medium text-2xl md:text-3xl lg:text-4xl">
        Provide support and resources for immigrants in a new country
      </p>
    </motion.div>
  </div>
);

const patientViz = (
  <div className="flex md:flex-row flex-col justify-center items-center">
    <motion.div
      className="mb-5 md:mr-20"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        width={350}
        height={280}
        src="/images/projects/patientviz/doctor1.png"
        alt="sharityLogo"
        className="lg:max-w-[350px] md:max-w-[300px] max-w-[250px] h-auto"
      />
    </motion.div>
    <motion.div
      className=" text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="mb-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#8D6AA3]">
        PatientViz
      </p>
      <p className="text-black font-bold text-2xl md:text-3xl lg:text-4xl mb-4 ">
        Triage Help for Physicians
      </p>
      <p className="text-black font-bold text-2xl md:text-3xl lg:text-4xl ">
        Minimizing Waiting Lists
      </p>
    </motion.div>
  </div>
);

const mokoBanner = (
  <div className="flex md:flex-row flex-col justify-center items-center">
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-black">
        Welcome to{" "}
        <span className="inline-flex text-[#6c9c5a] text-4xl md:text-5xl lg:text-6xl">
          Moko
          <Image
            width={71}
            height={61}
            src="/images/projects/moko/leaf2.png"
            alt="sharityLogo"
            className="pl-3 w-full h-auto"
          />
        </span>
      </p>
      <p className="text-[#F58024] font-bold text-3xl md:text-4xl lg:text-5xl mb-4 ">
        Market + Local
      </p>
    </motion.div>
  </div>
);

const chessmateBanner = (
  <div className="flex md:flex-row flex-col justify-center items-center">
    <motion.div
      className=""
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        width={450}
        height={190}
        src="/images/projects/chessmate/Logo.png"
        alt="sharityLogo"
        className="lg:max-w-[450px] md:max-w-[400px] max-w-[300px] h-auto"
      />
    </motion.div>
  </div>
);

const alacrityBanner = (
  <div className="flex md:flex-row flex-col justify-center items-center">
    <motion.div
      className=""
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <Image
        width={550}
        height={280}
        src="/images/projects/alacrity/Logo.png"
        alt="sharityLogo"
        className="lg:max-w-[550px] md:max-w-[450px] max-w-[400px] h-auto"
      />
    </motion.div>
  </div>
);

const onepiecebanner = (
  <div className="flex md:flex-row flex-col justify-center items-center">
    <motion.div
      className="mb-5 md:mr-10"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        width={450}
        height={390}
        src="/images/projects/onepiece/onepiecelogo.png"
        alt="sharityLogo"
        className="lg:max-w-[450px] md:max-w-[350px] max-w-[250px] h-auto"
      />
    </motion.div>
    <motion.div
      className="md:text-left text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="mb-5 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#605F82]">
        One Piece
      </p>
      <p className="text-[#a0863e] font-bold text-2xl md:text-3xl lg:text-4xl mb-4 ">
        CARDS TRACKER
      </p>
    </motion.div>
  </div>
);

export const projectBanner: Record<string, ReactElement> = {
  [SHARITY]: sharityBanner,
  [CAREERCUE]: careercueBanner,
  [RENEW]: renewBanner,
  [PATIENVIZ]: patientViz,
  [MOKO]: mokoBanner,
  [CHESSMATE]: chessmateBanner,
  [ALACRITY]: alacrityBanner,
  [ONEPIECE]: onepiecebanner,
};
