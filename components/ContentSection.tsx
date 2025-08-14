"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

type ContentItem = {
  id: number;

  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
};

type ContentSectionProps = {
  items: ContentItem[];
  reverse?: boolean;
};

// Animation pour l'image (arrive de la gauche maintenant, puisque image en premier)
const imageVariant: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

// Animation pour le texte (arrive de la droite maintenant)
const textVariant: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const ContentSection: React.FC<ContentSectionProps> = ({ items, reverse }) => {
  return (
    <div className="space-y-20 pt-30 ">
      {items.map((item, index) => {
        const isReversed = reverse && index % 2 === 1;

        return (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row ${
              isReversed ? "md:flex-row-reverse" : ""
            } items-start gap-8`}
          >
            {/* Bloc image en premier */}
            <motion.div
              className="flex-1 flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={isReversed ? textVariant : imageVariant}
            >
              <Image
                src={item.imageUrl}
                alt={item.imageAlt || item.title}
                width={600}
                height={500}
                className="rounded-lg object-cover shadow-lg"
              />
            </motion.div>

            {/* Bloc texte en second */}
            <motion.div
              className="flex-1 text-center md:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={isReversed ? imageVariant : textVariant}
            >
              <h1 className="text-3xl sm:text-5xl font-bold text-black mt-2">
                {item.title}
              </h1>
              <p className="text-black mt-4">{item.description}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentSection;
