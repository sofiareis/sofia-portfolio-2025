"use client";
import { navbarLinks } from "@/content/navbar-links";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 max-h-[64px] min-h-[64px]  bg-white shadow-md">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          Sofia Bandeira dos Reis
        </Link>

        <div className="hidden md:flex gap-6">
          {navbarLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-gray-800 hover:text-primary transition-colors duration-200 font-medium"
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
            <FontAwesomeIcon icon={faCircleXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-lg">
          {navbarLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-800 hover:text-primary transition-colors duration-200 font-medium"
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
