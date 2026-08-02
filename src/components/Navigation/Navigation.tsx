"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500
                  ${isScrolled ? "bg-bone/90 backdrop-blur-md shadow-soft" : "bg-bone/70 backdrop-blur-sm"}`}
      style={{ height: "var(--nav-height)" }}
    >
      <nav className="h-full max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link
          href="/inicio"
          className="font-playfair text-sm sm:text-base text-coffee tracking-wide select-none
                     hover:opacity-70 transition-opacity duration-300"
          aria-label="Ir a inicio"
        >
          ♡
        </Link>

        <ul className="hidden md:flex items-center justify-center gap-6 lg:gap-10 flex-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`nav-link ${isActive(item.href) ? "nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block w-4" />

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee/40 rounded-full"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-5 h-[1.5px] bg-ink transition-all duration-300 origin-center
                        ${isMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-ink transition-all duration-300
                        ${isMenuOpen ? "opacity-0 scale-0" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-ink transition-all duration-300 origin-center
                        ${isMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
          />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[var(--nav-height)] z-30">
          <div
            className="absolute inset-0 bg-ink/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="mobile-menu-enter relative bg-bone/95 backdrop-blur-md border-t border-beige/50">
            <ul className="flex flex-col py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left px-6 py-4 font-poppins text-sm tracking-widest uppercase
                               transition-colors duration-300
                               ${
                                 isActive(item.href)
                                   ? "text-coffee bg-cream/50 border-l-2 border-pastel-pink"
                                   : "text-ink-light hover:text-coffee hover:bg-cream/30"
                               }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
