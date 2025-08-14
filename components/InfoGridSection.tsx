// components/InfoGridSection.tsx
import React from "react";
import Image from "next/image";

type CardItem = {
  imageUrl: string;
  title: string;
  description: string;
};

type InfoGridSectionProps = {
  introText: string;
  title: string;
  description: string;
  cards: CardItem[];
};

const InfoGridSection: React.FC<InfoGridSectionProps> = ({
  introText,
  title,
  description,
  cards,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Texte d'introduction */}
      <p className="text-sm text-gray-500 text-center">{introText}</p>

      {/* Titre */}
      <h1 className="text-3xl md:text-4xl text-black font-bold text-center mt-12">
        {title}
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-center max-w-2xl mx-auto mt-8">
        {description}
      </p>

      {/* Grid des cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            {/* Image */}
            <div className="w-full h-48 relative">
              <Image
                src={card.imageUrl}
                alt={card.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Contenu en dessous */}
            <div className="p-6">
              <h2 className="text-xl text-black font-semibold">{card.title}</h2>
              <p className="text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoGridSection;
