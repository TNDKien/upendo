import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Home_service_intro = ({ blok }) => {
  return (
    <div className="flex flex-col gap-36 pt-32" {...storyblokEditable(blok)}>
      <div className="flex flex-col p-6 gap-1">
        <h2 className="text-4xl text-offWhite max-w-64">{blok.service_text}</h2>
        <a
          className="flex mt-10 py-2 px-6 w-auto bg-darkTeal text-pink rounded-3xl self-start whitespace-nowrap"
          href=""
        >
          See all our services
        </a>
      </div>
      <div className="flex flex-col ml-auto p-8">
        <img
          className=""
          src={blok.image.filename}
          alt={blok.image.alt || ""}
        />
      </div>
      <span className="flex mr-auto p-6 pb-0 text-pink text-xs font-mono">
        {blok.alt_text}
      </span>
    </div>
  );
};

export default Home_service_intro;
