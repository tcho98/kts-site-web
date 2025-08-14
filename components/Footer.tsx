"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const navItems = [
  { title: "Experience", path: "/experience" },

  { title: "Drivers", path: "/drivers" },

  { title: "Company", path: "/company" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section: Logo + Accroche */}
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col md:w-1/3">
          <Link href="/">
            <Image
              src="/logos/logo2.png"
              alt="Zum Logo"
              width={250}
              height={50}
            />
          </Link>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6">
            Moving Kids Forward with Care
          </h2>
          <p className="mt-4 text-gray-300">
            Safe, reliable, and efficient transportation for children and
            families.
          </p>
        </div>

        {/* Middle Section: Navigation */}
        <div className="flex-1 flex flex-wrap justify-center gap-8 mt-10 md:mt-0">
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul>
              {navItems.slice(0, 3).map((nav) => (
                <li
                  key={nav.title}
                  className="py-1 hover:text-blue-500 transition-colors"
                >
                  <Link href={nav.path}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/*<div>
            <h3 className="text-xl font-semibold mb-4">More Links</h3>
            <ul>
              {navItems.slice(3).map((nav) => (
                <li
                  key={nav.title}
                  className="py-1 hover:text-blue-500 transition-colors"
                >
                  <Link href={nav.path}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>*/}
        </div>

        {/* Right Section: Socials */}
        <div className="flex flex-col md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-blue-500 transition-colors"
            >
              <Facebook size={28} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              className="hover:text-blue-400 transition-colors"
            >
              <Twitter size={28} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-blue-700 transition-colors"
            >
              <Linkedin size={28} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors"
            >
              <Instagram size={28} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section: Legal */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm space-y-2">
        <div className="flex justify-center space-x-6">
          <Link
            href="/privacy"
            className="hover:text-blue-500 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-blue-500 transition-colors">
            Terms & Conditions
          </Link>
        </div>
        <p>© 2025 Zum Services, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
