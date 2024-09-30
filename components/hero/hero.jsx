import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Hero = ({ blok }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hero">
      <h1 className="text-xl text-white-800">Data made Simpel</h1>
      <p>{blok.intro_text}</p>
      <img src="" alt="" />
    </div>
  );
};

export default Hero;
