import React from "react";
import Button from "./Button";

interface HeroProps {
  background: string;
  title: string;
  description?: string;
  button?: boolean;
  mainPage?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  background,
  title,
  description,
  button,
  mainPage,
}) => {
  return (
    <section className="relative w-full h-[400px] overflow-hidden font-primary">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 `}
        style={{
          backgroundImage: `url("${background}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-start px-4 md:px-24 text-left text-white">
        <div className="w-full">
          <h1
            style={{ lineHeight: "1.5" }}
            className={`${
              mainPage
                ? "text-xl md:text-2xl lg:text-3xl md:max-w-5xl "
                : "text-xl md:text-3xl md:mt-8"
            } font-primary uppercase font-bold`}
          >
            {title}
          </h1>
          {description && (
            <p className="text-lg leading-relaxed mt-6">{description}</p>
          )}
          {button && (
            <div className="md:space-x-4 flex md:items-center flex-col md:flex-row md:mt-10">
              <Button text="Get to know us" path="/about" />
              <Button
                text="Corporate presentation"
                icon="material-symbols-light:download-sharp"
                path="/investor-centre"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
