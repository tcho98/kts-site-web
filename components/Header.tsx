"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

const navItems = [
  {
    title: "Experience",
    path: "/experience",
    items: [{ label: "Our Solution", path: "#" }],
  },

  {
    title: "Parent",
    path: "/#section2",
    items: [],
  },
  {
    title: "Drivers",
    path: "/drivers",
    items: [],
  },
  {
    title: "Services",
    path: "/#section1",
    items: [],
  },
  {
    title: "Company",
    path: "/company",
    items: [
      { label: "Our Story", path: "/company#story" },
      { label: "Our Values", path: "/company#values" },
      { label: "Our Mission", path: "/company#mission" },
      { label: "Our Team", path: "/company#team" },
    ],
  },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // change à 50/100 selon la hauteur du bloc bleu
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed justify-between top-11 z-50 w-full  transition-all duration-300 ">
      <div className="relative flex  inset-0 z-0">
        {activeDropdown && (
          <div className="fixed  left-0 w-full h-[350px] bg-gray-900/90 z-50 pointer-events-none" />
        )}
        {/* Top Bar (Logo + Nav + Contact) */}
        <div
          className={`${
            scrolled
              ? "fixed top-0 w-full  left-0 right-0 bg-gray-900/90  shadow-md"
              : "relative  "
          } z-[50] w-full  transition-all duration-300 flex justify-between  items-center h-24 px-3 md:px-30`}
        >
          {/* Logo à gauche */}
          <Link href="/" className="relative pt-2">
            <Image
              width={150}
              height={60}
              src="/logos/logo1.png"
              alt="Logo"
              sizes=""
              className="object-contain"
            />
          </Link>

          <nav className="hidden md:flex space-x-6 items-center">
            {navItems.map((nav) => (
              <div
                key={nav.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(nav.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={nav.path}>
                  <div
                    className={`relative font-medium transition-colors duration-200 pb-1 ${
                      pathname === nav.path || activeDropdown === nav.title
                        ? "text-blue-500"
                        : "text-white hover:text-blue-500"
                    }`}
                  >
                    {nav.title}
                    {(pathname === nav.path ||
                      activeDropdown === nav.title) && (
                      <span className="absolute bottom-0 bg-gray-200 left-0 w-full h-0.5"></span>
                    )}
                  </div>
                </Link>

                <div
                  className={`absolute text-2xl top-full w-60 z-50 ${
                    activeDropdown === nav.title ? "block" : "hidden"
                  }`}
                >
                  <div className="bg-gray-900 border-t-4 border-t-blue-500 border-b border-b-gray-300 mt-5">
                    <div className="max-w-7xl mx-auto">
                      <table className="w-full">
                        <tbody className="divide-y divide-gray-300">
                          {nav.items.map((item) => (
                            <tr key={item.label}>
                              <td className="pt-2 pb-2">
                                <Link
                                  href={item.path}
                                  className="flex items-center text-sm justify-between text-gray-50 hover:text-gray-200/55 transition-colors duration-200"
                                >
                                  {item.label}
                                  <ChevronRight className="w-6 h-6 ml-4" />
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <div className="hidden md:flex mx-[-0px] sm:px-0">
            <Link
              href="/contact"
              className="bg-gray-300 text-black font-semibold  px-14 relative py-2 rounded-3xl text-center"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Separator */}

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="fixed inset-10 w-full left-0 right-0 bottom-0 z-20 bg-gray-900  pt-30">
            <div className="border-t border-gray-400 mb-4 mt-4" />
            <nav>
              {navItems.map((nav) => (
                <div
                  key={nav.title}
                  className="border-b font-normal text-2xl p-3 border-gray-500"
                >
                  <div className="flex justify-between items-center w-full py-2 font-semibold transition-colors duration-200">
                    {/* Le titre devient un lien */}
                    <Link
                      href={nav.path || "#"}
                      onClick={() => setMobileOpen(false)}
                      className={`transition-colors duration-200 ${
                        openMobileMenu === nav.title
                          ? "text-blue-500"
                          : "text-white"
                      }`}
                    >
                      {nav.title}
                    </Link>

                    {/* Chevron pour ouvrir/fermer les sous-items */}
                    <button
                      onClick={() =>
                        setOpenMobileMenu(
                          openMobileMenu === nav.title ? null : nav.title,
                        )
                      }
                    >
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                          openMobileMenu === nav.title
                            ? "rotate-180"
                            : "rotate-0"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Sous-items */}
                  {openMobileMenu === nav.title && (
                    <div className="pl-4 pb-2">
                      {nav.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.path}
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm text-gray-300 py-1"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Bouton Contact */}
              <div className="flex justify-center items-center mt-15">
                <Link
                  href="/contact"
                  className="block bg-gray-100 text px-30 text-black py-3 rounded-3xl text-center"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
      <div className="border-t  mt-4 max-w-7xl mx-auto bg-gray-400"></div>
    </header>
  );
}
