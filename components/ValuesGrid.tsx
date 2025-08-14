"use client";

import React from "react";
import Image from "next/image";

type ValueItem = {
  id: number;
  label: string;
  description: string;
  iconUrl: string;
};

type ValuesGridProps = {
  items: ValueItem[];
};

const ValuesGrid: React.FC<ValuesGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 sm:mt-16 p-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="border-t-2 border-b-2 py-6 border-black flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 mb-4 flex">
            <Image src={item.iconUrl} alt={item.label} width={64} height={64} />
          </div>
          <h3 className="text-xl text-black font-semibold mb-2">
            {item.label}
          </h3>
          <p className="text-gray-600 text-xl">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ValuesGrid;
