"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function VideoBackground() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div
      className="relative top-18 w-full h-[950px] overflow-hidden z-0"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      {/* Image placeholder */}
      <Image
        src="/images/people.jpg"
        alt=""
        fill
        className={`object-cover absolute inset-0 transition-opacity duration-1000 ${
          videoLoaded ? "opacity-0" : "opacity-100"
        }`}
        priority
        aria-hidden="true"
      />

      {/* Vidéo en fond */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setVideoLoaded(true)}
        preload="auto"
        src="/noi.mp4"
      />
      <div className="absolute inset-0 bg-black opacity-50  z-0"></div>
    </div>
  );
}
