import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Infinite_banner = ({ blok }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const textColorClass = blok.check ? "text-limeGreen" : "text-pink";
  const bgColorClass = blok.check ? "bg-limeGreen" : "bg-pink";

  return <div></div>;
};

export default Infinite_banner;
