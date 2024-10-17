import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const aboutusbody = ({ blok }) => (
  <div className="Containerbody">
    <div className="blok-aboutustexteen" {...storyblokEditable(blok)}>
      <img
        className="logotwee"
        src={blok.visualfototwee.filename}
        alt={blok.visualfototwee.alt || "Logotwee"}
      />
      {render(blok.aboutustexteen)}
    </div>
  </div>
);

export default aboutusbody;
