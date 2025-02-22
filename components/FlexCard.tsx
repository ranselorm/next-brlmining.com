import Link from "next/link";
import Button from "./Button";
import React from "react";

interface FlexCardProps {
  title: string;
  description: string;
  image: string;
  isButton?: boolean;
  isReverse?: boolean;
  path?: string;
}

const FlexCard: React.FC<FlexCardProps> = ({
  title,
  description,
  image,
  isButton,
  isReverse,
  path,
}) => {
  return (
    <>
      <div
        className={`${
          isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } flex flex-col gap-x-10 items-center justify-center lg:space-x-8`}
      >
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 md:h-[600px]">
          <img
            src={image}
            alt="Map of projects locations"
            className="w-full h-auto md:h-full rounded shadow-lg object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 text-left">
          <Link href={`${path}`} className="text-xl md:text-2xl font-bold">
            {title}
          </Link>
          <p className="text-base mt-6 mb-2 leading-loose">{description}</p>
          {isButton && <Button text="View project" path={path} />}
        </div>
      </div>
    </>
  );
};

export default FlexCard;
