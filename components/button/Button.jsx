import { storyblokEditable } from "@storyblok/react/rsc";

const SeeMoreButton = ({ blok }) => {
  // boolean check for text and background colors of buttons
  const textColorClass = blok.check ? "text-limeGreen" : "text-pink";
  const bgColorClass = blok.check ? "bg-limeGreen" : "bg-pink";

  return (
    <div className="flex items-center text-base" {...storyblokEditable(blok)}>
      {/* Button */}
      <p
        className={`z-10 p-3 px-6 m-0 rounded-full bg-darkTeal ${textColorClass}`}
      >
        {blok.see_more && (
          <a href={`/${blok.see_more.story.url}`} rel="noopener noreferrer">
            {blok.see_more.name || "See More"}
          </a>
        )}
      </p>

      {/* Right Arrow */}
      <div
        className={`${bgColorClass} text-darkTeal -ml-10 pl-12 pr-4 pb-2 pt-1 rounded-r-full text-3xl`}
      >
        &rarr;
      </div>
    </div>
  );
};

export default SeeMoreButton;
