// components/HeroSection.tsx
import React from "react";
import Image from "next/image";

type HeroSectionProps = {
  backgroundImage: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonLink,
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
      <div className="absolute inset-0 bg-black opacity-30  z-0"></div>

      {/* Contenu */}

      <div className="relative sm:mx-70 mt-50s mx-auto z-10 px-4 sm:px-8 max-w-3xl">
        <h1 className="text-3xl sm:text-5xl font-bold text-white">{title}</h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-200">{description}</p>
        <a
          href={buttonLink}
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
