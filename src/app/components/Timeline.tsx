"use client";
import { timeline } from "@/content/timeline";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const Timeline = () => {
  return (
    <motion.ul
      className="relative list-none md:pl-10 pl-6 mb-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0 }}
    >
      <div className="absolute md:left-7 left-3 top-0 h-full w-px bg-black z-0" />

      {timeline.map((item, index) => (
        <motion.li
          key={index}
          className="relative md:mb-10 mb-6 pl-2 md:pl-5"
          variants={itemVariants}
        >
          {/* Circle Dot */}
          <span className="absolute left-[-11px] top-0 w-[25px] h-[25px] -translate-x-1/2 rounded-full bg-[#ac626f] border-2 border-black z-10"></span>

          <h3 className="mb-1">{item.company}</h3>
          <p className="text-sm md:text-lg text-gray-700">{item.description}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Timeline;
