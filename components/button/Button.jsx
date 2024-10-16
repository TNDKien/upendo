import { storyblokEditable } from "@storyblok/react/rsc";

const SeeMoreButton = ({ blok }) => {
  // boolean check for text and background colors of buttons
  const textColorClass = blok.check ? "text-limeGreen" : "text-pink";
  const bgColorClass = blok.check ? "bg-limeGreen" : "bg-pink";

  return (
    <div
      className="relative flex items-center text-base overflow-hidden w-48 group"
      {...storyblokEditable(blok)}
    >
      {/* Button */}
      <p
        className={`z-10 p-3 px-8 m-0 absolute left-0 rounded-full bg-darkTeal ${textColorClass} transition-transform duration-300 ease-out group-hover:translate-x-[37%]`}
      >
        <a href={`/${blok.button_ref.story.url}`} rel="noopener noreferrer">
          {blok.button_name}
        </a>
      </p>

      {/* Right Arrow */}
      <div
        className={`${bgColorClass} flex items-center justify-between text-darkTeal px-3 py-1.5 w-full rounded-full text-3xl relative`}
      >
        <span>&rarr;</span>
        <span className={`${textColorClass} whitespace-nowrap`}>
          {blok.button_name}
        </span>
        <span>&rarr;</span>
      </div>
    </div>
  );
};

export default SeeMoreButton;
