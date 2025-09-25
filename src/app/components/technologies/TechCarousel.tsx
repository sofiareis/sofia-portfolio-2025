"use client";

import { technologies } from "@/content/technologies";
import { motion } from "framer-motion";
import TechCard from "./TechCard";
const TechCarousel = () => {
  return (
    <div className="w-full mt-12 relative flex overflow-x-hidden">
      <motion.div
        className="flex justify-center items-center py-4"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        }}
      >
        {technologies.map((technology, index) => (
          <TechCard key={index} technology={technology} />
        ))}
      </motion.div>
      <motion.div
        className="flex justify-center items-center py-4"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        }}
      >
        {technologies.map((technology, index) => (
          <TechCard key={index} technology={technology} />
        ))}
      </motion.div>
    </div>
  );
};

export default TechCarousel;
