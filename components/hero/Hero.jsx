import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Hero = ({ blok }) => {
  return (
    <div className="mt-32">
      <div className="flex flex-col p-6 gap-14">
        <h1 className="text-4xl text-offWhite">Data made Simple</h1>
        <p className="text-pink">{blok.hero_text}</p>
      </div>
      <div className="flex flex-row mr-0 ml-auto p-6 lg:justify-between">
        <a
          className="flex mt-10 py-2 px-6 w-auto bg-limeGreen rounded-3xl self-start whitespace-nowrap"
          href=""
        >
          {blok.hero_cta}
        </a>
        <img
          className="mr-auto ml-0"
          src={blok.visuals.filename}
          alt={blok.visuals.alt || ""}
        />
      </div>
    </div>
  );
};

export default Hero;
