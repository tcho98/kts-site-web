"use client";
import { useEffect, useRef, useState } from "react";

type StatBarProps = {
  value: number;
  suffix?: string;
  description: string;
  barWidth?: string;
  duration?: number;
};

export default function StatBar({
  value,
  suffix = "",
  description,
  barWidth = "sm:w-60 w-45",
  duration = 1500,
}: StatBarProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [value, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center space-y-2">
      <div className={`h-[2px] bg-black ${barWidth}`} />
      <div className=" text-blue-400 sm:text-6xl text-3xl font-bold">
        {count}
        {suffix}
      </div>
      <div className="text-md text-black text-center">{description}</div>
    </div>
  );
}
