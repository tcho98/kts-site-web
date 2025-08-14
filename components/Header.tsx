"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { title: "Experience", path: "/experience" },

  { title: "Drivers", path: "/drivers" },

  { title: "Company", path: "/company" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Gestion du scroll pour le header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquer le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Header Desktop */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-gray-900/90 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl  mx-auto flex items-center justify-between h-24 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <Image src="/logos/logo2.png" alt="Logo" width={150} height={50} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((nav) => (
              <Link
                key={nav.title}
                href={nav.path}
                className={`font-medium transition-colors duration-200 pb-1 ${
                  pathname === nav.path
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-white hover:text-blue-500"
                }`}
              >
                {nav.title}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="bg-gray-300 text-black font-semibold px-6 py-2 rounded-3xl"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white z-50"
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-gray-900 md:hidden flex flex-col p-6 pt-4">
          {/* Top Bar: Logo + Close */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/">
              <Image
                src="/logos/logo2.png"
                alt="Logo"
                width={150}
                height={70}
              />
            </Link>
            <button onClick={() => setMobileOpen(false)} className="text-white">
              <X size={28} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="space-y-4 flex-1 ">
            {navItems.map((nav) => (
              <Link
                key={nav.title}
                href={nav.path}
                className="block text-lg border-t py-2 border-b vorder-white text-gray-200 hover:text-blue-500"
                onClick={() => setMobileOpen(false)}
              >
                {nav.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Contact */}
          <div className="mt-auto">
            <Link
              href="/contact"
              className="block bg-gray-100 text-black py-2 rounded-3xl text-center"
              onClick={() => setMobileOpen(false)}
            >
              Contact s
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
