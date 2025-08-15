import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

const navItems = [
  {
    title: "Experience",
    path: "/experience",
    items: [{ label: "Our Solution", path: "/experience/our-solution" }],
  },
  {
    title: "School",
    path: "/school",
    items: [
      { label: "Service", path: "/school/service" },
      { label: "Case Studies", path: "/school/case-studies" },
      { label: "Trust & Safety", path: "/school/trust-safety" },
      { label: "Service Areas", path: "/school/service-areas" },
      { label: "Charter", path: "/school/charter" },
    ],
  },
  {
    title: "Parent",
    path: "/parent",
    items: [
      { label: "How It Work", path: "/parent/how-it-work" },
      { label: "Parent Reviews", path: "/parent/reviews" },
      { label: "Parents FAQs", path: "/parent/faqs" },
    ],
  },
  {
    title: "Drivers",
    path: "/drivers",
    items: [
      { label: "Bus Driver and Bus Depot Careers", path: "/drivers/careers" },
    ],
  },
  {
    title: "Ressources",
    path: "/ressources",
    items: [
      { label: "Community", path: "/ressources/community" },
      { label: "Our Blog", path: "/ressources/blog" },
      { label: "Product Releases", path: "/ressources/product-releases" },
    ],
  },
  {
    title: "Company",
    path: "/company",
    items: [
      { label: "Our Story", path: "/company/our-story" },
      { label: "Our Vision", path: "/company/our-vision" },
      { label: "Careers", path: "/company/careers" },
      { label: "Press and Media Assets", path: "/company/media-assets" },
      { label: "Zero Tolerance", path: "/company/zero-tolerance" },
      { label: "KTS Mobility at Davos 2024", path: "/company/davos-2024" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-16">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Logo + slogan + réseaux sociaux + contact */}
        <div className="flex-1">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/logos/logo2.png"
              alt="Logo"
              width={240}
              height={60}
              className="h-auto"
            />
          </Link>
          <p className="text-3xl font-bold leading-snug  mb-4">
            Driving the Future of Safe and Reliable School Transportation.
          </p>
          <div className="flex space-x-10 mt-7 sm:mt-15">
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-500 transition-colors"
            >
              <Facebook size={28} />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="hover:text-sky-400 transition-colors"
            >
              <Twitter size={28} />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={28} />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-400 transition-colors"
            >
              <Instagram size={28} />
            </Link>
          </div>
          <Link
            href="/contact"
            className="inline-block mt-10 bg-gray-300 text-black font-semibold px-15 py-2 rounded-3xl hover:bg-white transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Liens de navigation */}
        <div className="flex-[2] grid grid-cols-2 sm:grid-cols-3 sm:mt-17 md:grid-cols-6 gap-6">
          {navItems.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-lg mb-3">{section.title}</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.path}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Mentions légales */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
        <div className="flex space-x-6 mb-4 sm:mb-0">
          <Link
            href="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
        </div>
        <p>© 2025 Zum Services, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
