"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface AwardProps {
  name: string;
  pdfUrl: string;
}

export default function Award({ name, pdfUrl }: AwardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Marque le composant comme monté côté client
  }, []);

  return (
    <>
      {/* Carte Award */}
      <div
        className="bg-blue-400 rounded-xl shadow-md p-6 w-64 text-center cursor-pointer transform transition hover:scale-105 hover:shadow-lg"
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
      >
        <h3 className="text-lg font-bold mb-2">{name}</h3>

        {/* Rendu des étoiles uniquement côté client */}
        {mounted && (
          <div className="flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="text-yellow-500 fill-yellow-500 w-6 h-6"
              />
            ))}
          </div>
        )}
      </div>

      {/* Modale, uniquement côté client */}
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
