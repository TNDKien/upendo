import { storyblokEditable } from "@storyblok/react/rsc";

const Button = ({ blok }) => {
  const textColorClass = blok.check ? "text-limeGreen" : "text-pink";
  const bgColorClass = blok.check ? "bg-limeGreen" : "bg-pink";

  return (
    <div
      className="relative flex items-center text-base overflow-visible w-auto group"
      {...storyblokEditable(blok)}
    >
      {/* Moving part */}
      <p
        className={`z-10 p-3 px-8 m-0 absolute  left-0 rounded-full bg-darkTeal ${textColorClass} transition-transform duration-300 ease-out group-hover:translate-x-1/3`}
      >
        <a href={`/${blok.button_ref.story?.url}`} rel="noopener noreferrer">
          {blok.button_name}
        </a>
      </p>

      {/* Fixed part */}
      <div
        className={`${bgColorClass} flex font-inter items-center justify-between text-darkTeal px-4 py-1.5 w-auto rounded-full text-3xl relative`}
      >
        <span>&rarr;</span>
        <span className={`${textColorClass} whitespace-nowrap text-2xl`}>
          {blok.button_name}
        </span>
        <span>&rarr;</span>
      </div>
    </div>
  );
};

export default Button;
