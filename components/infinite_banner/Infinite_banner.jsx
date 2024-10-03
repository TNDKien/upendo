import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Infinite_banner = ({ blok }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="logo-slider relative border border-gray-500 p-5 overflow-hidden max-w-[900px] w-full mx-auto flex">
      <div className="logo-track flex justify-around animate-marquee">
        <img src={blok.banner_image.filename} className="" />
        <img src={blok.banner_image.filename} className="" />
        <img src={blok.banner_image.filename} className="" />
        <img src={blok.banner_image.filename} className="" />
      </div>
      <div className="logo-track flex justify-around animate-marque">
        <img src={blok.banner_image.filename} className="" />
        <img src={blok.banner_image.filename} className="" />
        <img src={blok.banner_image.filename} className="" />
        <img src={blok.banner_image.filename} className="" />
      </div>
    </div>
  );
};

export default Infinite_banner;
