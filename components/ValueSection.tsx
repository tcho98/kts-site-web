import Image from "next/image";

interface ValueSectionProps {
  imageSRC: string;
  altText: string;
  description: string;
}
const ValueSection: React.FC<ValueSectionProps> = ({
  imageSRC,
  altText,
  description,
}) => {
  return (
    <div className=" inline-flex items-center gap-4">
      <div className="w-10">
        <Image
          src={imageSRC}
          alt={altText}
          width={5}
          height={5}
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="w-full">
        <p className="text-black text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ValueSection;
