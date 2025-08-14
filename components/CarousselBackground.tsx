"use client";
import { useEffect, useState } from "react";

const Slides = [
  {
    id: 1,
    image: "/imagesc/p1.jpg",
    title: "Welcome to KTS Mobility",
    description: "Safe, reliable, and efficient transportation solutions.",
  },
  {
    id: 2,
    image: "/imagesc/p2.jpg",
    title: "Our Commitment",
    description: "Ensuring student safety during daily commutes.",
  },
  {
    id: 3,
    image: "/imagesc/p3.jpg",
    title: "Join Us",
    description: "Be part of a community that values safety and innovation.",
  },
];

const CarousselBackground = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % Slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div
      className="relative h-screen w-full bg-cover overflow-x-hidden bg-center bg-no-repeat transition-all duration-500"
      style={{
        backgroundImage: `url(${Slides[activeIndex].image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Texte positionné avec un léger décalage */}
      <div
        className="
          absolute 
          z-20 
          max-w-7xl 
          sm:px-10 
          text-2xl 
          lg:px-10 
          flex 
          items-center 
          text-white 
          w-full
          sm:top-[25%] 
          top-[65%]
          sm:left-[8%] 
          left-[5%]
        "
      >
        <div className="sm:max-w-3xl max-w-sm sm:mx-auto mx-2">
          <h1 className="text-[2rem] sm:text-[4.5rem] font-bold">
            We Move Kids Forward
          </h1>
          <p className="mt-4 text-sm sm:text-lg">
            This is a simple Next.js application. This is a simple Next.js
            application.
          </p>
        </div>
      </div>

      {/* Navigation desktop */}
      <div className="absolute bottom-8 w-full hidden sm:flex justify-around items-end px-4 z-20">
        {Slides.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col items-center text-center max-w-[150px]"
          >
            <p
              className={`text-sm text-white mb-1 transition-opacity duration-300 ${
                activeIndex === index ? "opacity-100" : "opacity-60"
              }`}
            >
              {slide.description}
            </p>
            <button
              onClick={() => setActiveIndex(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                activeIndex === index ? "w-100 bg-blue-500" : "w-50 bg-gray-300"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarousselBackground;
