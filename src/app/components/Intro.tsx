"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "@/content/links";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between each icon
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  },
};

const Intro = () => {
  const roles = ["Full Stack Developer", "Computer Engineer", "Web Developer"];

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev: number) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  //or 7E8D85
  return (
    <section className="flex flex-col md:flex-row items-center py-4 md:py-0 px-0">
      <div className="flex flex-col sm:mr-5 md:text-start">
        <motion.h1
          className=""
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello there,
        </motion.h1>
        <motion.h1
          className="pb-4 bg-gradient-to-r from-[#7E8D85] to-[#CCC9DC] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I’m Sofia
        </motion.h1>
        <div className="h-10 md:h-12 lg:h-14 overflow-hidden ">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              className="text-lg md:text-xl lg:text-2xl font-semibold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {roles[index]}
            </motion.p>
          </AnimatePresence>
        </div>
        <p className="text-base md:text-xl lg:text-2xl max-w-xl md:text-left font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>

        <motion.div
          className="flex pt-5 md:pt-10 gap-[15px] justify-center md:justify-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              variants={itemVariants}
              whileHover={{
                scale: 1.2,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <FontAwesomeIcon
                icon={link.icon}
                className="md:text-4xl text-xl transition-colors duration-300 "
              />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="self-auto md:ml-10 md:mb-0 mt-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <img
          src="/images/sofia/Rectangle.png"
          alt="Sofia"
          className="lg:max-w-[450px] md:max-w-[350px] sm:max-w-[300px] max-w-[220px]"
        />
      </motion.div>
    </section>
  );
};

export default Intro;
