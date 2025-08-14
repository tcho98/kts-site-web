// components/ImageTextCard.tsx

import Image from "next/image";
import Link from "next/link";

interface ImageTextCardProps {
  imageSrc: string;
  imageAlt: string;
  description: string;
  linkHref: string;
}

export default function ImageTextCard({
  imageSrc,
  imageAlt,
  description,
  linkHref,
}: ImageTextCardProps) {
  return (
    <div className="flex flex-col bg-gray-200 items-center justify-start shadow-lg overflow-hidden">
      {/* Bloc image */}
      <div className="w-full bg-blue-400 p-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={300}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Séparateur */}
      <hr className="w-full border-gray-700" />

      {/* Bloc texte entièrement cliquable */}
      <Link
        href={linkHref}
        className="w-full bg-blue-400 p-4 hover:bg-blue-500 transition-colors"
      >
        <p className="text-gray-800 text-center text-sm">{description}</p>
      </Link>
    </div>
  );
}
