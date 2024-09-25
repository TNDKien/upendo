import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import "../app/[locale]/hero.css";

const Hero = ({ blok }) => {
  return (
    <div className="hero">
      <article className="hero-text">
        <h1>{blok.intro_header}</h1>
        <p>{blok.intro_text}</p>
      </article>
      <img
        className="hero-image"
        src={blok.intro_image.filename}
        alt={blok.intro_image.alt || "intro"}
      />
    </div>
  );
};

export default Hero;
