import Image from "next/image";

interface ValueSectionProps {
  imageSRC: string;
  altText: string;
  title: string;
  description: string;
}
const ValueSection: React.FC<ValueSectionProps> = ({
  imageSRC,
  altText,
  title,
  description,
}) => {
  return (
    <div className=" inline-flex items-center gap-4">
      <div className="w-15">
        <Image
          src={imageSRC}
          alt={altText}
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="w-full">
        <h2 className="text-black font-bold text-xl">{title}</h2>
        <p className="text-black text-xl">{description}</p>
      </div>
    </div>
  );
};

export default ValueSection;
