import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Infinite_banner = ({ blok }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative p-6 overflow-hidden max-w-[900px] w-full h-6 mx-auto flex">
      <div className="flex justify-between animate-marquee">
        <img src={blok.banner_image.filename} className="" />
        <img src={blok.banner_image.filename} className="" />
        <img src={blok.banner_image.filename} className="" />
        <img src={blok.banner_image.filename} className="" />
      </div>
      <div className="flex justify-between animate-marque">
        <img src={blok.banner_image.filename} className="" />
        <img src={blok.banner_image.filename} className="" />
        <img src={blok.banner_image.filename} className="" />
        <img src={blok.banner_image.filename} className="" />
      </div>
    </div>
  );
};

export default Infinite_banner;
