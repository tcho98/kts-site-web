"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function VideoBackground() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;

    setShouldLoadVideo(!reducedMotion && !connection?.saveData);
  }, []);

  return (
    <div className="relative  min-h-screen  md:min-h-[100svh] h-screen w-full overflow-hidden">
      {/* Image placeholder */}
      <Image
        src="/images/back2-1920-v1.webp"
        alt=""
        fill
        priority
        aria-hidden="true"
        className={`absolute inset-0 z-0 object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Vidéo en fond */}
      <video
        className={`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        muted
        playsInline
        loop
        preload="none"
        autoPlay={shouldLoadVideo}
        onLoadedData={(e) => {
          e.currentTarget
            .play()
            .then(() => setVideoLoaded(true))
            .catch(() => setVideoLoaded(false));
        }}
        src={shouldLoadVideo ? "/video/noi-720p-v1.mp4" : undefined}
      />

      {/* Overlay sombre (au-dessus vidéo) */}
      <div className="absolute inset-0 z-10 bg-black/50 pointer-events-none" />

      {/* Texte (au-dessus de tout) */}
      <div className="relative z-20 flex  max-w-full items-start text-white">
        <div className="mt-100 w-[400px] pl-1 lg:mt-70 lg:ml-25 lg:w-[600px]">
          <h1 className="px-4 text-[3rem] font-bold sm:text-[4.5rem]">
            We Move Kids Forward
          </h1>
          <p className="mt-4  px-4 text-lg sm:text-xl">
            Safe, Reliable and Efficient student transportation solution..
          </p>
          <div className="mt-5 px-4 sm:px-8">
            <Link
              href="/experience"
              className="inline-block rounded-3xl bg-blue-400 px-4 py-2 text-sm font-semibold text-black sm:text-base"
            >
              Experience KTS Mobility
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
