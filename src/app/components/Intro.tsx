"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "@/content/links";
import { motion } from "motion/react";

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
  return (
    <section className="flex flex-col md:flex-row items-center">
      <div className="flex flex-col sm:mr-5">
        <motion.h1
          className="pb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello there, I’m Sofia!
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-xl md:text-left font-semibold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          I am a computer engineering graduate from The University of British
          Columbia with a passion for software development.
        </motion.p>

        <motion.div
          className="flex pt-10 gap-[15px] justify-center md:justify-start"
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
                className="text-4xl transition-colors duration-300 hover:text-[#ac626f]"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="self-auto md:ml-10 pt-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <img
          src="/images/sofia/sofia.png"
          alt="Sofia"
          className="lg:max-w-[500px] md:max-w-[400px] max-w-[300px]"
        />
      </motion.div>
    </section>
  );
};

export default Intro;
