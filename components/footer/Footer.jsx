import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Footer = ({ blok }) => {
  return (
    <div className="relative">
      <div className="flex flex-col p-6 bg-pink gap-4">
        <div className="flex flex-row gap-24 font-inter">
          <ul className="leading-loose">
            <li>Configuration</li>
            <li>Optimalization</li>
            <li>Visualization</li>
            <li>Analysis</li>
            <li>Training</li>
          </ul>
          <ul className="leading-loose">
            <li>About us</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="flex flex-col font-mono text-xs border-t-2 border-darkTeal pt-6">
          <span>&copy; Upendo 2024</span>
          <span>Cookie Preferences</span>
        </div>
      </div>
      <div className="flex items-center w-52 absolute bottom-0 right-0 p-6">
        <img
          src={blok.footer_contact.filename}
          alt={blok.footer_contact.alt || ""}
        />
        <a
          className="p-1.5 px-3  bg-darkTeal text-pink -mb-20 -ml-24 z-9 text-xs rounded-full"
          href="/contact"
        >
          Contact us
        </a>
      </div>
    </div>
  );
};

export default Footer;
