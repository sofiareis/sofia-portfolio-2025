"use client";
import { navbarLinks } from "@/content/navbar-links";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

// bg-[linear-gradient(90deg,#BAC3D9_0%,#AC626F_100%)]
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  /* Frame 2 */

  return (
    <nav className="sticky md:top-10 top-6 z-50 max-h-[64px] min-h-[64px] bg-[#E2E2E2]/80 backdrop-blur-[2px] shadow-[0px_-1px_54px_-1px_rgba(0,0,0,0.25)] text-black md:mx-20 mx-5 rounded-4xl">
      <div className="flex items-center h-full w-full">
        <div className="flex justify-evenly items-center w-full">
          {navbarLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`${pathname === `${link.url}` ? "text-white bg-primary " : "hover:text-primary"} md:text-base text-sm transition-all duration-200 font-medium px-3 py-2 rounded-4xl`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/** 
        <button
          className="sm:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-white cursor-pointer"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="text-white cursor-pointer"
            />
          )}
        </button>
        */}
      </div>
      {/** 
      {menuOpen && (
        <div className="sm:hidden bg-[#223046]   px-6 py-4 space-y-4 shadow-lg">
          {navbarLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={() => setMenuOpen(false)}
              className="block  hover:text-[#C08791] transition-colors duration-200 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
        */}
    </nav>
  );
}

export default Navbar;
