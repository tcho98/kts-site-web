"use client";
import Image from "next/image";

const images = [
  "/schools/1.png",
  "/schools/2.png",
  "/schools/3.png",
  "/schools/4.png",
  "/schools/5.png",
  "/schools/6.png",
  "/schools/7.png",
  "/schools/8.png",
  "/schools/9.png",

  "/schools/11.png",
  "/schools/12.png",
];

const ScrollingCarousel = () => {
  return (
    <div className="overflow-hidden w-full py-4 bg-gray-200">
      <div className="relative flex w-max animate-scroll gap-10">
        {[...images, ...images].map((src, idx) => (
          <div
            key={idx}
            className="relative flex-shrink-0 w-[64vw] sm:w-[44vw] md:w-[28vw] bg-white lg:w-[204px] h-[220px] rounded-lg overflow-hidden shadow"
          >
            <Image
              src={src}
              alt="Logo école partenaire KTS Mobility"
              fill
              className="object-cover"
              // Fix: l'ancien "sizes" avait une faute de frappe (max-width: 78px,
              // qui n'existe sur aucun écran) et ne correspondait pas aux vraies
              // classes du conteneur (w-[64vw] sm:w-[44vw] md:w-[28vw] lg:w-[204px])
              sizes="(max-width: 640px) 64vw, (max-width: 768px) 44vw, (max-width: 1024px) 28vw, 204px"
              // Fix: "priority" forçait le préchargement immédiat des 22 images
              // (11 logos x 2, dupliqués pour l'effet infini scroll), alors que
              // seules 2-3 sont visibles au chargement -> pénalisait le LCP.
              // Le lazy loading par défaut de next/image suffit ici.
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingCarousel;
