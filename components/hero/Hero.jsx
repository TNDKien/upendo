import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Hero = ({ blok }) => {
  return (
    <div className="mt-32">
      <div className="flex flex-col p-6 gap-14 lg:p-32 lg:pb-0">
        <h1 className="text-4xl text-offWhite lg:text[64px]">
          Data made Simple
        </h1>
        <p className="text-pink lg:max-w-md">{blok.hero_text}</p>
      </div>
      <div className="flex flex-row mr-0 ml-auto p-6 lg:justify-between lg:p-32 lg:pt-0">
        <a
          className="flex mt-10 py-2 px-6 w-auto bg-limeGreen rounded-full self-start whitespace-nowrap lg:py-4 lg:px-8 lg:text-xl"
          href=""
        >
          {blok.hero_cta}
        </a>
        <img
          className="mr-auto h-[55vh] ml-0 lg:mr-0 lg:ml-auto"
          src={blok.visuals.filename}
          alt={blok.visuals.alt || ""}
        />
      </div>
    </div>
  );
};

export default Hero;
