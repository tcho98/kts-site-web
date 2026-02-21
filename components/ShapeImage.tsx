"use client";
import Image from "next/image";

const radiusFor = (shape: string) => {
  switch (shape) {
    case "tl": return "9999px 0 0 0";   // quart arrondi haut-gauche
    case "tr": return "0 9999px 0 0";   // quart arrondi haut-droit
    case "br": return "0 0 9999px 0";   // quart arrondi bas-droit
    case "bl": return "0 0 0 9999px";   // quart arrondi bas-gauche
    case "circle": return "9999px";     // rond
    default: return "24px";
  }
};

export default function ShapeImage({ src="", shape = "br", className = "" }) {
  return (
    <div
      className={`relative overflow-hidden bg-white shadow-md ring-1 ring-black/6 ${className}`}
      style={{ borderRadius: radiusFor(shape) }}
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width:200px) 100px, 180px"
      />
    </div>
  );
}