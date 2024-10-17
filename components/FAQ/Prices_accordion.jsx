import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";


const prices_accordion = ({ blok }) => (
  <div className="prices_accordion" {...storyblokEditable(blok)}>
    <p className="prices_accent">{blok.prices_accent}</p>
    <div className="prices_title">
            {render(blok.prices_title)}
    </div>
    <p className="prices_paragraph">{blok.prices_paragraph}</p>
  </div>
);


export default prices_accordion;