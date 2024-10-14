import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Service_intro = ({ blok }) => {
  return (
    <div
      className="flex flex-col gap-36 pt-32 lg:p-32 lg:pb-0"
      {...storyblokEditable(blok)}
    >
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col p-6 gap-10 lg:justify-center lg:p-6">
          <h2 className="text-2xl text-offWhite w-72 lg:text-2xl">
            {blok.service_text}
          </h2>
          <a
            className="flex py-2 px-6 w-auto bg-darkTeal text-pink rounded-full self-start lg:bg-limeGreen lg:text-darkTeal"
            href=""
          >
            See all our services
          </a>
        </div>
        <img
          className="p-6 ml-auto lg:w-1/2 lg:mr-0 lg:p-0"
          src={blok.image.filename}
          alt={blok.image.alt || ""}
        />
      </div>

      <span className="flex mr-auto p-6 pb-0 text-pink text-xs font-mono lg:text-xl lg:p-0">
        {blok.alt_text}
      </span>
    </div>
  );
};

export default Service_intro;
