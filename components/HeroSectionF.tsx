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
    <section className="relative w-full h-[100vh] flex items-center justify-start text-left ">
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

      <div className="relative sm:mx-70 mt-60 mx-auto z-10 px-4 sm:px-8 max-w-3xl ">
        <h1 className="text-2xl sm:text-5xl font-bold text-white">{title}</h1>
        <p className="mt-4 text-lg sm:text-2xl text-gray-200">{description}</p>

      </div>
    </section>
  );
};

export default HeroSection;
