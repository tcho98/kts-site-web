"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    label: "Enrolled Students",
    value: 300000,
    suffix: "k+",
    barPercent: 100,
  },
  {
    label: "Cost Savings",
    value: 10,
    suffix: "%",
    barPercent: 33,
  },
  {
    label: "Fewer Buses",
    value: 25,
    suffix: "%",
    barPercent: 80,
  },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className=" text-black py-16 px-4 sm:px-8 max-w-[900px] mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="text-4xl font-bold">
              {inView ? (
                <CountUp
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                  separator=","
                />
              ) : (
                "0" + stat.suffix
              )}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>

            {/* Barre visuelle */}
            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                style={{
                  width: inView ? `${stat.barPercent}%` : "0%",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
