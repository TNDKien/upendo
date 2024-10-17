import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Toolskop = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="px-32 pb-8 pt-16 font-mono">{render(blok.toolstext)}</div>
    </div>
  );
};

export default Toolskop;
