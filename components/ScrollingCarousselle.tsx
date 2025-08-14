"use client";
import Image from "next/image";

const images = [
  "/imagesc/p1.jpg",
  "/imagesc/p2.jpg",
  "/imagesc/p3.jpg",
  "/imagesc/p1.jpg",
  "/imagesc/p2.jpg",
  "/imagesc/p3.jpg",
];

const ScrollingCarousel = () => {
  return (
    <div className="overflow-hidden w-full py-4 bg-white">
      <div className="relative flex w-max animate-scroll gap-4">
        {[...images, ...images].map((src, idx) => (
          <div
            key={idx}
            className="relative flex-shrink-0 w-[64vw] sm:w-[44vw] md:w-[28vw] lg:w-[204px] h-[220px] rounded-lg overflow-hidden shadow"
          >
            <Image
              src={src}
              alt={`carousel-${idx}`}
              fill
              className="object-cover"
              sizes="(max-width: 78px) 60vw, (max-width: 1024px) 40vw, 200px"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingCarousel;
