import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import Image from 'next/image'; 
import "./Pricing.css";

const pricing_intro = ({ blok }) => (
  <div className="pricing_intro" {...storyblokEditable(blok)}>

    <div className="intro">
      <p className="accent">{blok.pricing_accent}</p>
      <div className="pricing_title">
        {render(blok.pricing_title)}
      </div>
      <div className="content_wrapper">
        <p className="pricing_paragraph">{blok.pricing_paragraph}</p>

        {blok.intro_img && (
          <div className="intro_img_container">
            <Image
              src={blok.intro_img.filename}
              alt={blok.intro_img.alt || "Intro Image"}
              width={400}
              height={300}
              className="intro_img"
            />
          </div>
        )}
      </div>
    </div>
    
  </div>
);

export default pricing_intro;
