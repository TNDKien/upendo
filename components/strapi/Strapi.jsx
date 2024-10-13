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
          const totalPictures = blok.pictures?.length || 0;

          // Get the total height of the content (e.g., the div with paragraphs)
          const contentHeight = contentRef.current.scrollHeight;

          // Adjust the scroll length per image based on the content height
          const scrollLengthPerImage = (contentHeight * 0.85) / totalPictures;

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
      <div className="sticky inset-0 top-[30vh] h-[50vh] w-1/2 flex justify-center items-center">
        {blok.pictures &&
          blok.pictures.length > 0 &&
          blok.pictures[currentIndex] && (
            <img
              className="w-3/4"
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
        className="relative flex flex-col gap-[110vh] z-10 text-offWhite p-32 pt-0 -mt-80 w-[90vw]"
      >
        <div className="flex flex-col w-60 gap-8">
          <h3 className="flex flex-grow flex-row items-end -ml-2 text-pink">
            <span className="text-6xl mr-4">&#9687;</span>
            <span className="text-[32px]">Configuration</span>
          </h3>
          <p className="w-96 ml-12">{blok.config_text}</p>
          <div className="flex items-center text-base ml-12">
            <p className="z-10 p-3 px-6 m-0 rounded-full bg-darkTeal text-pink">
              See more
            </p>
            <div className="bg-pink text-darkTeal -ml-10 pl-12 pr-4 pb-2 pt-1 rounded-r-full text-3xl">
              &rarr;
            </div>
          </div>
        </div>
        <div className="flex flex-col w-60 ml-auto mr-0 gap-8">
          <h3 className="flex flex-grow flex-row items-end -ml-2 text-limeGreen">
            <span className="text-6xl mr-4">&#9687;</span>
            <span className="text-[32px]">Optimalization</span>
          </h3>
          <p className="w-96 ml-12">{blok.optimalization_text}</p>
          <div className="flex items-center text-base ml-12">
            <p className="z-10 p-3 px-6 m-0 rounded-full bg-darkTeal text-limeGreen">
              See more
            </p>
            <div className="bg-limeGreen text-darkTeal -ml-10 pl-12 pr-4 pb-2 pt-1 rounded-r-full text-3xl">
              &rarr;
            </div>
          </div>
        </div>
        <div className="flex flex-col w-60 gap-8">
          <h3 className="flex flex-grow flex-row items-end -ml-2 text-pink">
            <span className="text-6xl mr-4">&#9687;</span>
            <span className="text-[32px]">Visualization</span>
          </h3>
          <p className="w-96 ml-12">{blok.visualization_text}</p>
          <div className="flex items-center text-base ml-12">
            <p className="z-10 p-3 px-6 m-0 rounded-full bg-darkTeal text-pink">
              See more
            </p>
            <div className="bg-pink text-darkTeal -ml-10 pl-12 pr-4 pb-2 pt-1 rounded-r-full text-3xl">
              &rarr;
            </div>
          </div>
        </div>
        <div className="flex flex-col w-60 ml-auto mr-0 gap-8">
          <h3 className="flex flex-grow flex-row items-end -ml-2 text-limeGreen">
            <span className="text-6xl mr-4">&#9687;</span>
            <span className="text-[32px]">Analysis</span>
          </h3>
          <p className="w-96 ml-12">{blok.analysis_text}</p>
          <div className="flex items-center text-base ml-12">
            <p className="z-10 p-3 px-6 m-0 rounded-full bg-darkTeal text-limeGreen">
              See more
            </p>
            <div className="bg-limeGreen text-darkTeal -ml-10 pl-12 pr-4 pb-2 pt-1 rounded-r-full text-3xl">
              &rarr;
            </div>
          </div>
        </div>
        <div className="flex flex-col w-60 gap-8">
          <h3 className="flex flex-grow flex-row items-end -ml-2 text-pink">
            <span className="text-6xl mr-4">&#9687;</span>
            <span className="text-[32px]">Training</span>
          </h3>
          <p className="w-96 ml-12">{blok.training_text}</p>
          <div className="flex items-center text-base ml-12">
            <p className="z-10 p-3 px-6 m-0 rounded-full bg-darkTeal text-pink">
              See more
            </p>
            <div className="bg-pink text-darkTeal -ml-10 pl-12 pr-4 pb-2 pt-1 rounded-r-full text-3xl">
              &rarr;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strapi;
