import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import Button from "../button/Button";

const Service_intro = ({ blok }) => {
  return (
    <div
      className="flex flex-col gap-36 pt-32 lg:pb-0"
      {...storyblokEditable(blok)}
    >
      <div className="flex flex-col bg-lightLime lg:flex-row lg:justify-between lg:p-32">
        <div className="flex flex-col p-6 gap-10 lg:justify-center lg:p-6">
          <h2 className="text-2xl text-darkGreen w-72 lg:text-2xl">
            {blok.service_text}
          </h2>
          {blok.button &&
            blok.button.map((nestedBlok) => {
              if (nestedBlok.component === "button") {
                return <Button blok={nestedBlok} key={nestedBlok._uid} />;
              }
              return null;
            })}
        </div>
        <img
          className="p-6 ml-auto lg:w-1/2 lg:mr-0 lg:p-0"
          src={blok.image.filename}
          alt={blok.image.alt || ""}
        />
      </div>

      <span className="flex mr-auto p-6 pb-0 text-pink text-xs font-mono lg:text-xl lg:px-32">
        {blok.alt_text}
      </span>
    </div>
  );
};

export default Service_intro;
