import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const InfiniteBanner = ({ blok }) => {
  const images = [
    blok.banner_image1.filename,
    blok.banner_image2.filename,
    blok.banner_image3.filename,
    blok.banner_image4.filename,
  ];

  return (
    <div className="relative p-6 overflow-hidden w-full h-24 mx-auto flex">
      <div className="flex gap-12 lg:gap-20 animate-marquee max-lg:animate-mobileMarquee">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="h-full object-contain"
            alt={`banner image ${index + 1}`}
          />
        ))}
        {/* Duplicate the images for smooth animation */}
        {images.map((src, index) => (
          <img
            key={`repeat-${index}`}
            src={src}
            className="h-full object-contain"
            alt={`banner image ${index + 1} repeat`}
          />
        ))}

        {/* Add more images for larger screens */}
        {images.map((src, index) => (
          <img
            key={`lg-${index}`}
            src={src}
            className="hidden lg:block h-full object-contain"
            alt={`banner image ${index + 1} desktop`}
          />
        ))}
        {images.map((src, index) => (
          <img
            key={`lg-repeat-${index}`}
            src={src}
            className="hidden lg:block h-full object-contain"
            alt={`banner image ${index + 1} desktop repeat`}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteBanner;
