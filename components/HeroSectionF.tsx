// components/HeroSection.tsx
import React from "react";
import Image from "next/image";

type HeroSectionProps = {
  backgroundImage: string;
  title: string;
  description: string;

};

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  description,

}) => {
  return (
    <section className="relative flex min-h-[calc(100svh-2.75rem)] w-full items-end justify-start text-left sm:items-center">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="opacity-100"
          priority
        />
      </div>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black opacity-50  z-0"></div>

      {/* Contenu */}

      <div className="relative z-10 w-full max-w-3xl px-4 pb-12 sm:px-8 sm:pb-0 sm:mx-auto lg:mx-0 lg:ml-70">
        <h1 className="text-3xl leading-tight font-bold text-white sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-2xl">{description}</p>

      </div>
    </section>
  );
};

export default HeroSection;
