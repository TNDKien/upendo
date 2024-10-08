import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Infinite_banner = ({ blok }) => {
  return (
    <div className="relative p-6 overflow-hidden max-w-[900px] w-full h-24 mx-auto flex">
      <div className="flex gap-4 animate-marquee">
        <img src={blok.banner_image1.filename} />
        <img src={blok.banner_image2.filename} />
        <img src={blok.banner_image3.filename} />
        <img src={blok.banner_image4.filename} />
        <img src={blok.banner_image1.filename} />
        <img src={blok.banner_image2.filename} />
        <img src={blok.banner_image3.filename} />
        <img src={blok.banner_image4.filename} />
      </div>
    </div>
  );
};

export default Infinite_banner;
