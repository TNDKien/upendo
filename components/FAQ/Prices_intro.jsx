import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import Image from 'next/image'; 
import Button from "../button/Button";
import "./Prices_intro.css";

const prices_intro = ({ blok }) => (
  <div className="prices_intro" {...storyblokEditable(blok)}>
    <p className="prices_accent">{blok.prices_accent}</p>
    <div className="prices_title">
            {render(blok.prices_title)}
    </div>

    <div className="content_wrapper_prices">
        <p className="prices_paragraph">{blok.prices_paragraph}</p>
        
        {blok.intro_prices_img && (
              <div className="intro_prices_img_container">
                <Image
                  src={blok.intro_prices_img.filename}
                  alt={blok.intro_prices_img.alt || "Intro Prices Image"}
                  width={400}
                  height={300}
                  className="intro_prices_img"
                />
              </div>
            )}
    </div>
    <div className="prices_button">
          {blok.button &&
            blok.button.map((nestedBlok) => {
              if (nestedBlok.component === "button") {
                return <Button blok={nestedBlok} key={nestedBlok._uid} />;
              }
              return null;
            })}
        </div>
  </div>
);


export default prices_intro;
