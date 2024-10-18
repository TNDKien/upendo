import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const aboutusbody = ({ blok }) => (
  <div
    className="flex flex-col p-6 gap-2 lg:w-80 lg:p-0 lg:mr-[72px]"
    {...storyblokEditable(blok)}
  >
    <img
      className="w-6 h-6"
      src={blok.visualfototwee.filename}
      alt={blok.visualfototwee.alt || "Logotwee"}
    />
    {render(blok.aboutustexteen)}
  </div>
);

export default aboutusbody;
