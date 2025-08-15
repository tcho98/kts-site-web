"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface AwardProps {
  name: string; // Nom de l'award
  pdfUrl: string; // PDF à afficher
  logoUrl: string; // Logo à afficher
  count: number; // Nombre à afficher suivi de "x"
}

export default function Award({ name, pdfUrl, logoUrl, count }: AwardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Carte Award */}
      <div
        className=" rounded-xl shadow-md p-6 w-74 text-center cursor-pointer transform transition hover:scale-105 hover:shadow-lg"
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
      >
        {/* Logo et nombre x */}
        <div className="flex items-center justify-center  mb-2">
          <Image
            src={logoUrl}
            alt={name + " logo"}
            width={180}
            height={40}
            className="object-contain"
          />
          <div className="flex flex-col items-center">
            <span className="text-6xl text-blue-400  font-bold">{count}x</span>
            <span className="text-2xl text-blue-400 font-semibold">Winner</span>
          </div>
        </div>

        {/* Trait horizontal */}
        <hr className="border-gray-700 my-2" />

        {/* Nom de l'award */}
        <h3 className="text-xl text-black font-bold mt-2">{name}</h3>
      </div>

      {/* Modale PDF */}
      {mounted && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-[90%] max-w-4xl p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
            <embed
              src={pdfUrl}
              type="application/pdf"
              width="100%"
              height="600px"
              className="rounded"
            />
          </div>
        </div>
      )}
    </>
  );
}
