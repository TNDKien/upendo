import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Home_servicecard = ({ blok }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col h-full p-6 pt-0 pb-40 gap-20">
      <h1 className="flex flex-grow flex-row text-pink items-end -ml-2">
        <span className="text-6xl mr-2">&#9687;</span>
        <span className="text-2xl mb-1">{blok.service_title}</span>
      </h1>
      <div className="flex flex-grow w-full">
        <img
          className="w-full h-auto"
          src={blok.service_visual.filename}
          alt={blok.service_visual.alt || ""}
        />
      </div>
      <div className="flex flex-col gap-12">
        <p className="text-offWhite">{blok.service_sum}</p>
        <a href="/contact" className="flex items-center text-base">
          <p className="z-10 p-3 px-6 m-0 rounded-full bg-darkTeal text-pink">
            See more
          </p>
          <div className="bg-pink text-darkTeal -ml-10 pl-12 pr-4 pb-2 pt-1 rounded-r-full text-3xl">
            &rarr;
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home_servicecard;
