// components/ContentSectionF.tsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type ContentItem = {
  id: number;
  smallText: string;
  title: string;
  description: string;
  services?: string[];
  imageUrl: string;
  imageAlt?: string;
};

type ContentSectionProps = {
  items: ContentItem[];
  reverse?: boolean; // conserve ta prop
  withDividers?: boolean; // optionnel: séparateur entre sections
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

const ContentSection: React.FC<ContentSectionProps> = ({
  items,
  reverse = false,
  withDividers = true,
}) => {
  return (
    <div className="pt-30 space-y-16 sm:space-y-24">
      {items.map((item, index) => {
        // Alternance systématique ; reverse inverse juste le pattern
        const isReversed = reverse ? index % 2 === 0 : index % 2 === 1;

        return (
          <section key={item.id} aria-labelledby={`section-${item.id}`}>
            {/* Bloc avec fond léger pour bien séparer chaque section */}
            <div className="rounded-3xl bg-gradient-to-b from-white via-white to-gray-50/70 p-6 sm:p-10">
              <div
                className={`flex flex-col md:flex-row ${
                  isReversed ? "md:flex-row-reverse" : ""
                } items-start gap-8 md:gap-12`}
              >
                {/* Texte */}
                <motion.div
                  className="flex-1 text-start md:text-left"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={isReversed ? imageVariant : textVariant}
                >
                  <p className="text-sm sm:text-xs uppercase tracking-widest text-gray-500">
                    {item.smallText}
                  </p>
                  <h2
                    id={`section-${item.id}`}
                    className="text-2xl sm:text-4xl text-black font-bold mt-3"
                  >
                    {item.title}
                  </h2>
                  <p className="text-black/80 mt-4 sm:text-lg leading-relaxed">
                    {item.description}
                  </p>

                  {/* Services (optionnels) */}
                  {item.services && item.services.length > 0 && (
                    <ul className="mt-4 list-disc pl-6 space-y-2 text-black/80 sm:text-lg">
                      {item.services.map((service, i) => (
                        <li key={i}>{service}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>

                {/* Image */}
                <motion.div
                  className="flex-1 flex justify-start"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={isReversed ? textVariant : imageVariant}
                >
                  <div className="relative w-full">
                    <Image
                      src={item.imageUrl}
                      alt={item.imageAlt || item.title}
                      width={1200}
                      height={800}
                      className="rounded-2xl object-cover w-full h-auto"
                      priority={index === 0}
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* séparateur optionnel entre sections */}
            {withDividers && index < items.length - 1 && (
              <div className="mx-auto mt-10 max-w-7xl px-4">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default ContentSection;
