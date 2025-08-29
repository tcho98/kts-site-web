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
