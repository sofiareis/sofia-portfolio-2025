"use client";
import { navbarLinks } from "@/content/navbar-links";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faBars } from "@fortawesome/free-solid-svg-icons";

// bg-[linear-gradient(90deg,#BAC3D9_0%,#AC626F_100%)]
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 max-h-[64px] min-h-[64px] bg-secondary shadow-md text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Sofia Bandeira dos Reis
        </Link>

        <div className="hidden md:flex gap-6">
          {navbarLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className=" hover:text-[#C08791] transition-colors duration-200 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-gray-800"
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
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#223046]   px-6 py-4 space-y-4 shadow-lg">
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
    </nav>
  );
}

export default Navbar;
