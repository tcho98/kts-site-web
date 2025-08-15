"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type ContentItem = {
  id: number;
  smallText: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
};

type ContentSectionProps = {
  items: ContentItem[];
  reverse?: boolean; // inverser texte/image sur certaines sections
};

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const ContentSection: React.FC<ContentSectionProps> = ({ items, reverse }) => {
  return (
    <div className="space-y-20 sm:space-y-40 pt-30">
      {items.map((item, index) => {
        const isReversed = reverse && index % 2 === 1;

        return (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row ${
              isReversed ? "md:flex-row-reverse" : ""
            } items-start gap-8`}
          >
            {/* Texte */}
            <motion.div
              className="flex-1 text-start md:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={isReversed ? imageVariant : textVariant} // inversé si besoin
            >
              <p className="text-lg sm:text-sm text-black">{item.smallText}</p>
              <h1 className="text-4xl text-black font-bold mt-3">
                {item.title}
              </h1>
              <p className="text-black mt-4">{item.description}</p>
            </motion.div>

            {/* Image */}
            <motion.div
              className="flex-1 flex justify-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={isReversed ? textVariant : imageVariant} // inversé si besoin
            >
              <Image
                src={item.imageUrl}
                alt={item.imageAlt || item.title}
                width={500}
                height={300}
                className="rounded-lg object-cover shadow-lg"
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentSection;
