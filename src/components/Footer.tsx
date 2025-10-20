"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "@/content/links";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { projectFooter } from "@/content/projects/project-footer";
const FooterChild = () => {
  return (
    <div className="text-center text-[1.2rem] font-semibold p-5 z-10">
      <div className="max-w-[1200px] mx-auto my-0">
        <div className="mb-5">
          <h2 className="mt-0 pt-2.5">Contact me</h2>
          <div className="flex justify-center gap-5 mt-8">
            {links.map((link) => (
              <motion.a
                target="_blank"
                href={link.href}
                key={link.href}
                whileHover={{
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <FontAwesomeIcon icon={link.icon} className="text-4xl" />
              </motion.a>
            ))}
          </div>
        </div>
        <div className="mx-0 my-5 border-t-white border-t border-solid"></div>
        <div className="mb-5">
          <p>&copy; 2025 Sofia Bandeira dos Reis</p>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const path = usePathname();

  const projectPath = path.includes("/projects/")
    ? path.split("/projects/")[1]
    : null;
  return path == "/" ? (
    <div className="mt-10 flex items-center justify-center inset-0 bg-primary transform skew-y-[-7deg] origin-top-left z-0 ">
      <div className="relative z-10 text-white skew-y-[7deg] my-10">
        <FooterChild />
      </div>
    </div>
  ) : (
    <div
      className="bg-primary text-white"
      style={
        projectPath
          ? { backgroundColor: projectFooter[projectPath] }
          : { backgroundColor: "#ac626f" }
      }
    >
      <FooterChild />
    </div>
  );
};

export default Footer;
