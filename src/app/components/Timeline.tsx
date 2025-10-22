"use client";
import { timeline } from "@/content/timeline";
import { motion, Variants } from "motion/react";
import TimelineCard from "./TimelineCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const Timeline = () => {
  return (
    <motion.ul
      className="relative list-none md:pl-10 pl-4 mb-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0 }}
    >
      <div className="absolute md:left-7 left-2 top-0 h-full w-[3px] bg-primary/50 z-0" />
      {timeline.map((item, index) => (
        <motion.li
          key={index}
          className="relative md:mb-15 mb-6 pl-1 md:pl-10"
          variants={itemVariants}
        >
          <TimelineCard
            company={item.company}
            date={item.date}
            description={item.description}
            technology={item.technology}
            achievements={item.achievements}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Timeline;
