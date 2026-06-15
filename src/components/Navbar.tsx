"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-2xl border border-white/20 ]">
        <nav className="flex items-center justify-between px-8 py-4 mt-1 mb-1">
          <Link href="/" className="group flex items-center gap-2 select-none">
            <span className="text-slate-100 font-extrabold text-md tracking-wider ">CYBER CONGRESS</span>
          </Link>
          {/* A little Ai for te styling for the line animation under the text */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-4/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

            {/* button for mobile phone */}
            
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-white/80 hover:text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
          <ul className="flex flex-col px-6 pb-5 pt-1 gap-1 border-t border-white/10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 border-b border-white/5 last:border-none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <div className="h-24" />
    </>
  
  );
}