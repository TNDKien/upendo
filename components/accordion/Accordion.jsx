import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Accordion = ({ blok }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="mx-32 mb-2 rounded-xl w-1/2 bg-pink text-darkGreen"
      {...storyblokEditable(blok)}
    >
      <button
        className="accordion w-full text-left py-4 px-6 border-none outline-none transition duration-300 cursor-pointer"
        onClick={() => toggleAccordion(0)}
      >
        {blok.question}
      </button>
      <div
        className={`panel w-full px-6 overflow-hidden transition-max-height duration-300 ease-in-out ${
          activeIndex === 0 ? "max-h-full" : "max-h-0"
        }`}
      >
        <p className="py-4">{blok.answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
