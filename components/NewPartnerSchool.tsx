import React from "react";
import Image from "next/image";

type Partner = {
  name: string;
  logoSrc: string; // ex: "/logos/partner1.png"
  logoAlt?: string;
};

type NewPartnerSchoolProps = {
  title: string;
  partners: Partner[];
};

const NewPartnerSchool: React.FC<NewPartnerSchoolProps> = ({ title, partners }) => {
  return (
    <section className="max-w-7xl mx-auto pt-10 px-8 sm:px-0 pb-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          {title}
        </h1>
      </div>

      {/* Responsive inchangé */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((p, index) => (
          <div
            key={`${p.name}-${index}`}
            className={`flex items-center text-black border-black gap-4 p-4 border-t border-b ${
              index === partners.length - 1 ? "border-b-0" : ""
            }`}
          >
            {/* Logo */}
            <div className="relative w-10 h-10 shrink-0 overflow-hidden rounded-md bg-white ring-1 ring-black/5">
              <Image
                src={p.logoSrc}
                alt={p.logoAlt ?? `${p.name} logo`}
                fill
                className="object-contain p-1"
                sizes="40px"
              />
            </div>

            {/* Nom */}
            <span className="font-medium">{p.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewPartnerSchool;