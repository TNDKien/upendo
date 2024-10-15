import { useState, useEffect, useRef } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Strapi = ({ blok }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const rowRefs = useRef([]);

  useEffect(() => {
    // Create an IntersectionObserver to track when each flex-row div enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = rowRefs.current.indexOf(entry.target);
            if (index !== -1 && index !== currentIndex) {
              setCurrentIndex(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe each flex-row div
    rowRefs.current.forEach((row) => {
      if (row) observer.observe(row);
    });
  }, [currentIndex, blok.pictures]);

  return (
    <div
      {...storyblokEditable(blok)}
      ref={containerRef}
      className="relative w-full min-h-[400vh] bg-transparent hidden lg:block"
    >
      {/* Sticky image container */}
      <div className="sticky inset-0 top-[25vh] h-[50vh] w-1/2 flex justify-center items-center z-10">
        {blok.pictures &&
          blok.pictures.length > 0 &&
          blok.pictures[currentIndex] && (
            <img
              className="w-3/4 z-20"
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
        className="relative flex flex-col gap-72 z-0 text-offWhite p-32 pt-0 -mt-80 w-[100vw]"
      >
        <div
          className="flex flex-row mb-32"
          ref={(el) => (rowRefs.current[0] = el)} // Assign ref to the first row
        >
          <div className="flex flex-col gap-8">
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
          <img
            className="w-1/2 ml-auto -mr-32 self-end -mb-28"
            src={blok.visual.filename}
            alt={blok.visual.alt}
          />
        </div>

        <div
          className="flex flex-row my-96"
          ref={(el) => (rowRefs.current[1] = el)} // Assign ref to the second row
        >
          <img
            className="w-1/2 mr-auto -ml-32 transform scale-x-[-1] self-end -mb-28"
            src={blok.visual.filename}
            alt={blok.visual.alt}
          />
          <div className="flex flex-col ml-auto mr-0 gap-8">
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
        </div>

        <div
          className="flex flex-row my-96"
          ref={(el) => (rowRefs.current[2] = el)} // Assign ref to the third row
        >
          <div className="flex flex-col gap-8">
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
          <img
            className="w-1/2 ml-auto -mr-32 self-end -mb-28"
            src={blok.visual.filename}
            alt={blok.visual.alt}
          />
        </div>

        <div
          className="flex flex-row my-96"
          ref={(el) => (rowRefs.current[3] = el)} // Assign ref to the fourth row
        >
          <img
            className="w-1/2 mr-auto -ml-32 transform scale-x-[-1] self-end -mb-28"
            src={blok.visual.filename}
            alt={blok.visual.alt}
          />
          <div className="flex flex-col ml-auto mr-0 gap-8">
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
        </div>

        <div
          className="flex flex-col gap-8 mt-96"
          ref={(el) => (rowRefs.current[4] = el)} // Assign ref to the fifth row
        >
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
          <img
            className="w-1/2 ml-auto -mr-32 self-end -mb-28"
            src={blok.visual.filename}
            alt={blok.visual.alt}
          />
        </div>
      </div>
    </div>
  );
};

export default Strapi;
