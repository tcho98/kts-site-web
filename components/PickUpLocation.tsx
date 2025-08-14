// components/PickupLocations.tsx
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Icône OK verte
import Link from "next/link";

type PickupLocationsProps = {
  title: string;
  description: string;
  locations: string[];
};

const PickupLocations: React.FC<PickupLocationsProps> = ({
  title,
  description,
  locations,
}) => {
  return (
    <section className="max-w-7xl mx-auto p-10">
      {/* Titre et description */}
      <div className="text-center flex flex-col justify-center items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          {title}
        </h1>
        <p className="mt-4 w-sm sm:w-3xl  text-gray-600 text-lg">
          {description}
        </p>
      </div>

      {/* Liste des lieux */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc, index) => (
          <div
            key={index}
            className={`flex items-center border-black gap-4 p-4 border-t border-b ${
              index === locations.length - 1 ? "border-b-0" : ""
            }`}
          >
            <CheckCircleIcon className="w-8 h-8 text-blue-500 flex-shrink-0" />
            <span className="text-gray-800 font-medium">{loc}</span>
          </div>
        ))}
      </div>
      {/* Bouton de contact */}
      <div className="mt-10 text-center">
        <Link
          href="#contact"
          className="bg-blue-500 text-white mt-15 px-15 py-2 rounded-3xl inline-block text-sm sm:text-base"
        >
          Join Us
        </Link>
      </div>
    </section>
  );
};

export default PickupLocations;
