import { useState, useEffect, useRef } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Strapi = ({ blok }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        if (containerRef.current && contentRef.current) {
          const containerTop = containerRef.current.getBoundingClientRect().top;
          const totalPictures = blok.pictures.length;

          // Get the total height of the content (e.g., the div with paragraphs)
          const contentHeight = contentRef.current.scrollHeight;

          // Adjust the scroll length per image to be 20% smaller
          const scrollLengthPerImage = (contentHeight * 0.8) / totalPictures;

          // Calculate the current image index based on scroll length
          const index = Math.min(
            Math.floor(Math.abs(containerTop) / scrollLengthPerImage),
            totalPictures - 1
          );

          if (index !== currentIndex) {
            setCurrentIndex(index);
          }
        }
      }, 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [blok.pictures, currentIndex]);

  return (
    <div
      {...storyblokEditable(blok)}
      ref={containerRef}
      className="relative w-full min-h-[400vh] bg-transparent hidden lg:block"
    >
      {/* Sticky image container */}
      <div className="sticky top-[25vh] h-[50vh] w-1/2 flex justify-center items-center">
        {blok.pictures && blok.pictures.length > 0 && (
          <img
            src={blok.pictures[currentIndex].filename}
            alt={
              blok.pictures[currentIndex].alt || `Picture ${currentIndex + 1}`
            }
            style={{
              transform:
                currentIndex % 2 === 0
                  ? "translateX(50vw) rotateY(-15deg) rotateX(10deg)"
                  : "translateX(0vw) rotateY(15deg) rotateX(10deg)",
              transition:
                "transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
            }}
          />
        )}
      </div>

      {/* Scrolling content */}
      <div
        ref={contentRef}
        className="relative flex flex-col gap-[110vh] z-10 text-offWhite p-40 pt-0 -mt-72"
      >
        <p className="flex flex-end w-40">{blok.config_text}</p>
        <p className="flex flex-end w-40 ml-auto mr-0">{blok.config_text}</p>
        <p className="flex flex-end w-40">{blok.config_text}</p>
        <p className="flex flex-end w-40 ml-auto mr-0">{blok.config_text}</p>
        <p className="flex flex-end w-40">{blok.config_text}</p>
      </div>
    </div>
  );
};

export default Strapi;
