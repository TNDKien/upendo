import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./Pricing.css";

const pricing_intro = ({ blok }) => (
  <div className="pricing_intro" {...storyblokEditable(blok)}>
    <p className="accent">{blok.pricing_accent}</p>
    <div className="pricing_title">
            {render(blok.pricing_title)}
    </div>
    <p className="pricing_paragraph">{blok.pricing_paragraph}</p>
  </div>
);


export default pricing_intro;
