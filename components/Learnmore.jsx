import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Learnmore = ({ blok }) => {
  // Check of blok bestaat, om fouten te voorkomen
  if (!blok) {
    return null; // Render niets als blok niet bestaat
  }

  return (
    <div {...storyblokEditable(blok)}>
      <div className="learnmoretext">{render(blok.learnmoretext)}</div>
    </div>
  );
};

export default Learnmore;
