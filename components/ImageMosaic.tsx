"use client";
import ShapeImage from "./ShapeImage";

export default function ImageMosaic5() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-1">
      {/* 
        - grid-cols-6 pour placer proprement
        - auto-rows pour contrôler la “hauteur” des cases
        - gap pour l’espacement
      */}
      <div className="grid grid-cols-6 auto-rows-[90px] sm:auto-rows-[105px] gap-6">
        
        {/* 1) Gros haut-gauche */}
        <ShapeImage
          src="/shape/6.webp"
          shape="tl"
          className="col-span-3 row-span-2"
        />

        {/* 2) Petit rond (haut-centre) */}
        <ShapeImage
          src="/shape/1.webp"
          shape="circle"
          className="col-span-3 row-span-1 col-start-4 row-start-3"
        />
          {/* 2) Petit rond (haut-centre) */}
        <ShapeImage
          src="/shape/2.webp"
          shape="circle"
          className="col-span-3 row-span-1 col-start-1 row-start-3 cover"
        />

        {/* 3) Haut-droit */}
        <ShapeImage
          src="/shape/3.webp"
          shape="tr"
          className="col-span-3 row-span-2 col-start-4 row-start-1"
        />

        {/* 4) Gros centre */}
        <ShapeImage
          src="/shape/4.webp"
          shape="br"
          className="col-span-3 row-span-2 col-start-4 row-start-4"
        />

        {/* 5) Bas-gauche */}
        <ShapeImage
          src="/shape/5.webp"
          shape="bl"
          className="col-span-3 row-span-2 col-start-1 row-start-4"
        />
      </div>
    </div>
  );
}