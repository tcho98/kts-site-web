"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 flex flex-col md:flex-row md:justify-between md:items-start">
        {/* Logo + texte */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <Link href="/">
            <Image
              src="/logos/logo2.png"
              alt="Zum Logo"
              width={150}
              height={50}
            />
          </Link>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6">
            Join Us and Move Kids Forward
          </h2>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex space-x-6 mb-10 md:mb-0 md:self-start">
          <Link
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
          >
            <Facebook
              size={28}
              className="hover:text-blue-500 transition-colors"
            />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <Twitter
              size={28}
              className="hover:text-blue-400 transition-colors"
            />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Linkedin
              size={28}
              className="hover:text-blue-700 transition-colors"
            />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
          >
            <Instagram
              size={28}
              className="hover:text-pink-500 transition-colors"
            />
          </Link>
        </div>
      </div>

      {/* Liens légaux et copyright */}
      <div className="border-t border-gray-700 py-6 max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-4 md:mb-0">
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
        <p className="text-gray-400 text-sm">
          © 2025 Zum Services, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
