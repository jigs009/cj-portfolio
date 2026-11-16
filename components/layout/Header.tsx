"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Workflow", href: "/#workflow" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    let lastScrolled = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 30;
          if (isScrolled !== lastScrolled) {
            setScrolled(isScrolled);
            lastScrolled = isScrolled;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled ? "bg-ink/95 backdrop-blur-xl border-b border-line py-3.5 shadow-2xl" : "bg-transparent py-6"}
      `}
    >
      <div className="container-grid">
        <div className="flex items-center justify-between">
          {/* Brand Mark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none"
            aria-label="CJ Portfolio Home"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tungsten opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tungsten" />
            </span>
            <span className="font-serif text-2xl text-bone tracking-tight group-hover:text-tungsten transition-colors">
              CJ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7 bg-surface/90 backdrop-blur-md px-6 py-2 rounded-full border border-line shadow-lg">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-xs text-muted hover:text-bone tracking-widest uppercase transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="
                hidden sm:inline-block font-sans text-xs uppercase tracking-widest font-semibold
                px-5 py-2.5 rounded-full bg-tungsten text-ink shadow-md shadow-tungsten/15
                hover:bg-tungsten/90 hover:scale-105 active:scale-95 transition-all
              "
            >
              Get in touch
            </a>

            {/* Mobile Hamburger Button */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus-visible:outline-none rounded-md bg-surface/50 border border-line/40"
            >
              <span
                className={`block h-0.5 w-5 bg-bone transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-bone transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-bone transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Drawer */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-[70px] bg-ink/98 backdrop-blur-2xl z-40 p-8 flex flex-col justify-between animate-in fade-in duration-200"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-6 pt-6">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl text-bone hover:text-tungsten transition-colors flex items-baseline justify-between border-b border-line/30 pb-4"
              >
                <span>{item.label}</span>
                <span className="font-sans text-xs text-muted">0{i + 1}</span>
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-line/40 flex flex-col gap-4">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-center font-sans text-xs uppercase tracking-widest font-semibold py-4 rounded-full bg-tungsten text-ink shadow-lg"
            >
              Start an Enquiry →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
