import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import Button from "../button/Button";

const Hero = ({ blok }) => {
  return (
    <div className="mt-32 lg:mt-24">
      <div className="flex flex-col p-6 gap-14 lg:p-32 lg:pb-0">
        <h1 className="text-4xl text-limeGreen lg:text-[64px]">
          Data made Simple
        </h1>
        <p className="text-offWhite lg:max-w-md">{blok.hero_text}</p>
      </div>
      <div className="flex flex-col mr-0 ml-auto pl-6 pb-12 lg:justify-between lg:flex-row lg:p-32 lg:pt-0 overflow-x-visible">
        <div className="lg:mt-12 ">
          {blok.button &&
            blok.button.map((nestedBlok) => {
              if (nestedBlok.component === "button") {
                return <Button blok={nestedBlok} key={nestedBlok._uid} />;
              }
              return null;
            })}
        </div>
        <img
          className="hidden rounded-[80px] lg:block lg:h-[45vh] lg:mt-12 ml-24 z-10"
          src={blok.image.filename}
          alt={blok.image.alt || ""}
        />
        <div className="flex flex-row relative">
          <img
            className="ml-auto h-[50vh] lg:h-[60vh]  lg:mr-0"
            src={blok.visuals.filename}
            alt={blok.visuals.alt || ""}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
