import Link from "next/link";

interface SustainabilityCardProps {
  imageSrc: string;
  title: string;
  description: string;
  linkUrl: string;
  bgColor?: string;
  reverse?: boolean;
}

const SustainabilityCard: React.FC<SustainabilityCardProps> = ({
  imageSrc,
  title,
  description,
  linkUrl,
  bgColor = "bg-gray-100",
  reverse = false,
}) => {
  return (
    <section
      className={`py-10 px-4 md:px-28 flex flex-col md:flex-row items-center ${
        reverse ? "md:flex-row-reverse gap-x-4" : ""
      } ${bgColor}`}
    >
      <div className="flex-1 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="md:w-full h-[530px] object-cover rounded"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center md:pl-12">
        <h2 className="text-2xl mb-2 text-main uppercase mt-6 md:mt-0">
          {title}
        </h2>
        <p className="text-black mb-6 leading-relaxed">{description}</p>
        <Link href={linkUrl}>
          {/* <button className="bg-blu text-white py-2 px-6 rounded hover:bg-gray-800 transition capitalize">
            More information
          </button> */}
        </Link>
      </div>
    </section>
  );
};

export default SustainabilityCard;