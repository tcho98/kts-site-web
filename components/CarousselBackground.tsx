"use client";
import { useEffect, useState } from "react";

const Slides = [
  {
    id: 1,
    image: "/images/parent.webp",
    title: "Safe and Connected School  Transportation For Your Children ",
    description: "For Parents & Students",
    text: "Easy registration, real-time tracking, and secure payements. stay in control and enjoy peace of mind every trip."
  },
  {
    id: 2,
    image: "/images/EX.webp",
    title: "A Smart Dashboard for Efficient Management",
    description: "For Drivers & Operators",
    text: "Manage routes, students, and schedules from one centralized platform designed for safety and efficiency."
  },
  {
    id: 3,
    image: "/images/school.webp",
    title: "A Smart School Transport Solution for Your City",
    description: "For Schools & Districts",
    text: "Optimized route planning and school mapping to ensure reliable and well-structured transportation."
  },
];

const CarousselBackground = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Fix: l'auto-rotation ne se déclenchait qu'en mobile (if isMobile).
  // Sur desktop, le carrousel restait figé sur le premier slide en
  // permanence, sauf clic manuel sur les points de navigation.
  // Elle tourne maintenant partout, avec une pause au survol sur desktop.
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative h-screen w-full bg-cover overflow-x-hidden bg-center bg-no-repeat transition-all duration-500"
      style={{
        backgroundImage: `url(${Slides[activeIndex].image})`,
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Texte positionné avec un léger décalage */}
      <div
        className="
          absolute 
          z-10 
          max-w-7xl 
          sm:px-0 
          text-2xl 
          lg:px-4 
          flex 
          items-center 
          text-white 
          w-full
          sm:top-[50%] 
     
          top-[45%]
          sm:left-[0%] 
          left-[5%]
        "
      >
        <div className="sm:max-w-3xl max-w-sm  sm:mx-auto mx-2">
          {/* Fix: "color-blue-300" n'existe pas en Tailwind (la classe pour la
              couleur du texte est "text-*", pas "color-*") -> ne faisait rien */}
          <h1 className="text-[2rem] sm:text-[2.5rem] font-bold">
            {Slides[activeIndex]?.title}
          </h1>
          <p className="mt-4 text-sm sm:text-xl">
            {Slides[activeIndex]?.text}
          </p>
        </div>
      </div>

      {/* Navigation desktop */}
      <div className="absolute bottom-8 w-full hidden sm:flex justify-between items-end px-70 z-20">
        {Slides.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col items-center text-center max-w-[150px]"
          >
            <p
              className={`text-xl text-white mb-1 transition-opacity duration-300 ${
                activeIndex === index ? "opacity-100" : "opacity-60"
              }`}
            >
              {slide.description}
            </p>
            <button
              onClick={() => setActiveIndex(index)}
              aria-label={`Voir le slide : ${slide.description}`}
              aria-current={activeIndex === index}
              className={`h-2 transition-all duration-300 rounded-full ${
                activeIndex === index ? "w-50 bg-blue-500" : "w-50 bg-gray-300"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarousselBackground;
