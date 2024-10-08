import { useEffect, useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import AOS from "aos";
import "aos/dist/aos.css";

const Home_servicecard = ({ blok }) => {
  // library for onscroll entrance animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // boolean check for text and background colors of buttons and headers
  const textColorClass = blok.check ? "text-limeGreen" : "text-pink";
  const bgColorClass = blok.check ? "bg-limeGreen" : "bg-pink";

  console.log(blok.see_more);

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col h-full p-6 pt-0 pb-40 gap-20"
      {...storyblokEditable(blok)}
    >
      <h3
        className={`flex flex-grow flex-row ${textColorClass} items-end -ml-2`}
      >
        <span className="text-6xl mr-2">&#9687;</span>
        <span className="text-2xl mb-1">{blok.service_title}</span>
      </h3>
      <div className="flex flex-grow w-full">
        <img
          className="w-full h-auto"
          src={blok.service_visual.filename}
          alt={blok.service_visual.alt || ""}
        />
      </div>
      <div className="flex flex-col gap-12">
        <p className="text-offWhite">{blok.service_sum}</p>
        <div className="flex items-center text-base">
          <p
            className={`z-10 p-3 px-6 m-0 rounded-full bg-darkTeal ${textColorClass}`}
          >
            {blok.see_more && (
              <a href={`/${blok.see_more.story.url}`} rel="noopener noreferrer">
                {blok.see_more.name || "See More"}
              </a>
            )}
          </p>
          <div
            className={`${bgColorClass} text-darkTeal -ml-10 pl-12 pr-4 pb-2 pt-1 rounded-r-full text-3xl`}
          >
            &rarr;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_servicecard;
