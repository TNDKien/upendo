import { useState, useEffect } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Footer = ({ blok }) => {
  const [imageData, setImageData] = useState({
    filename: blok.footer_contact.filename,
    alt: blok.footer_contact.alt || "",
  });

  useEffect(() => {
    const updateImageData = () => {
      if (window.innerWidth >= 1024) {
        // Desktop screen
        setImageData({
          filename: blok.desktop_image.filename,
          alt: blok.desktop_image.alt || "",
        });
      } else {
        // Mobile screen
        setImageData({
          filename: blok.footer_contact.filename,
          alt: blok.footer_contact.alt || "",
        });
      }
    };

    // Set the image initially
    updateImageData();

    // Listen for window resize events
    window.addEventListener("resize", updateImageData);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", updateImageData);
  }, [blok.footer_contact, blok.desktop_image]);

  return (
    <div className="relative bg-pink text-darkGreen lg:px-32">
      <div className="flex flex-col p-6 gap-4">
        <div className="flex flex-row gap-24 font-inter z-10">
          <ul className="leading-loose">
            <li>
              <a href="/configuration">Configuration</a>
            </li>
            <li>
              <a href="/optimalisation">Optimalization</a>
            </li>
            <li>
              <a href="/visualisation">Visualization</a>
            </li>
            <li>
              <a href="/analysis">Analysis</a>
            </li>
            <li>
              <a href="/training">Training</a>
            </li>
          </ul>
          <ul className="leading-loose">
            <li>
              <a href="/aboutus">About us</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/follow-up-prices">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col font-mono text-xs border-t-[1px] border-darkTeal pt-6 lg:flex-row lg:gap-24">
          <span>&copy; Upendo 2024</span>
          <span>Cookie Preferences</span>
        </div>
      </div>
      <div className="flex items-center w-52 absolute bottom-0 right-0 p-6 lg:w-full lg:justify-end lg:mr-32">
        <img className="w-96" src={imageData.filename} alt={imageData.alt} />
        <a
          className="p-1.5 px-3  bg-darkTeal text-pink -mb-20 -ml-24 z-9 text-xs rounded-full lg:-mb-32 lg:-ml-48 lg:text-base"
          href="/contact"
        >
          Contact us
        </a>
      </div>
    </div>
  );
};

export default Footer;
