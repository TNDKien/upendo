import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Howweserve = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="p-6 w-full lg:p-0 lg:w-80 lg:mr-24 font-mono py-6 text-xl">
        {render(blok.howtext)}
      </div>
    </div>
  );
};

export default Howweserve;
