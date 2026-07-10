 
"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const btnScrolled = scrolled
    ? "!bg-[#0C0C0B] !text-[#F5F2EC] !border-[#0C0C0B] hover:!bg-[#1a1a19]"
    : "";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#F3F0E9]/95 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-6 lg:h-24 lg:px-10">
          {/* Logo + subtitle */}
          <Link href="/" className="relative z-10 flex items-center">
            <div>
              <div className={`relative transition-all duration-500 ${
                scrolled ? "h-6 w-[120px] md:h-6 md:w-[130px]" : "h-7 w-[150px] md:h-8 md:w-[180px]"
              }`}>
                <Image
                  src="/images/logo.webp"
                  alt="FORMED"
                  fill
                  priority
                  className={`object-contain object-left transition-all duration-500 ${
                    scrolled ? "brightness-0" : ""
                  }`}
                />
              </div>
              <p className={`text-[10px] font-normal uppercase tracking-[0.25em] transition-all duration-500 ${
                scrolled ? "hidden" : "mt-1 text-[#F5F2EC]/50"
              }`}>
                Tampa Bay · Private Training
              </p>
            </div>
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden items-center gap-10 text-[10px] font-medium uppercase tracking-[0.25em] lg:flex">
            <Link
              href="#services"
              className={`transition-colors duration-200 ${
                scrolled ? "text-[#0C0C0B]/70 hover:text-[#0C0C0B]" : "text-[#F5F2EC]/70 hover:text-[#F5F2EC]"
              }`}
            >
              Services
            </Link>
            <Link
              href="#about"
              className={`transition-colors duration-200 ${
                scrolled ? "text-[#0C0C0B]/70 hover:text-[#0C0C0B]" : "text-[#F5F2EC]/70 hover:text-[#F5F2EC]"
              }`}
            >
              About
            </Link>
            <Link
              href="#faq"
              className={`transition-colors duration-200 ${
                scrolled ? "text-[#0C0C0B]/70 hover:text-[#0C0C0B]" : "text-[#F5F2EC]/70 hover:text-[#F5F2EC]"
              }`}
            >
              FAQ
            </Link>
            <Link
              href="#tampa-bay"
              className={`transition-colors duration-200 ${
                scrolled ? "text-[#0C0C0B]/70 hover:text-[#0C0C0B]" : "text-[#F5F2EC]/70 hover:text-[#F5F2EC]"
              }`}
            >
              Tampa Bay
            </Link>
          </nav>

          {/* Desktop buttons — smaller than hero buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="solid" href="https://my.formed.fit/" className={`${btnScrolled} !px-8 !py-3.5`}>
              Log In
            </Button>
            <Button variant="solid" href="/apply" className={`${btnScrolled} !px-8 !py-3.5`}>
              Apply Now
            </Button>
          </div>

          {/* Mobile hamburger — 3 lines */}
          <button
            className={`relative z-10 flex flex-col gap-[5px] p-2 lg:hidden`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`block h-px w-6 transition-all duration-300 ${scrolled ? "bg-[#0C0C0B]" : "bg-[#F5F2EC]"}`} />
            <span className={`block h-px w-6 transition-all duration-300 ${scrolled ? "bg-[#0C0C0B]" : "bg-[#F5F2EC]"}`} />
            <span className={`block h-px w-6 transition-all duration-300 ${scrolled ? "bg-[#0C0C0B]" : "bg-[#F5F2EC]"}`} />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#111110] transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex min-h-screen flex-col items-center justify-center gap-10 text-[13px] font-medium uppercase tracking-[0.25em] text-[#F5F2EC]/70">
          <Link
            href="#services"
            onClick={() => setMobileOpen(false)}
            className="transition-colors hover:text-[#F5F2EC]"
          >
            Services
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="transition-colors hover:text-[#F5F2EC]"
          >
            About
          </Link>
          <Link
            href="#faq"
            onClick={() => setMobileOpen(false)}
            className="transition-colors hover:text-[#F5F2EC]"
          >
            FAQ
          </Link>
          <Link
            href="#tampa-bay"
            onClick={() => setMobileOpen(false)}
            className="transition-colors hover:text-[#F5F2EC]"
          >
            Tampa Bay
          </Link>

          <div className="mt-4 flex flex-col items-center gap-4">
            <Button variant="solid" href="https://my.formed.fit/">
              Log In
            </Button>
            <Button variant="solid" href="/apply">
              Apply for Membership
            </Button>
          </div>

          <div className="mt-8 flex gap-6 text-[#F5F2EC]/50">
            <Link href="https://www.instagram.com/getformed.fit" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F2EC] transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/company/getformed/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F2EC] transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link href="https://www.facebook.com/share/18GmmXdMCH/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F2EC] transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
