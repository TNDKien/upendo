import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./servicebody2.css";
import Button from "../button/Button";
 

const Servicebody2 = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div className="service_blok">
      <div className="service_info">
        <div className="servicebodyconfigtitel">
          {render(blok.servicebodyconfigtitel)}
        </div>
        <div className="servicebodyconfgititeltekst">
          {render(blok.servicebodyconfgititeltekst)}
        </div>
      </div>
      <div className="service_info">
        <div className="servicebodyconfigtitel">
          {render(blok.servicebodyconfigtitel2)}
        </div>
        <div className="servicebodyconfgititeltekst">
          {render(blok.servicebodyconfgititeltekst2)}
        </div>
      </div>
      <div className="service_info">
        <div className="servicebodyconfigtitel">
          {render(blok.servicebodyconfigtitel3)}
        </div>
        <div className="servicebodyconfgititeltekst">
          {render(blok.servicebodyconfgititeltekst3)}
        </div>
      </div>
      <div className="service_info">
        <div className="servicebodyconfigtitel">
          {render(blok.servicebodyconfigtitel4)}
        </div>
        <div className="servicebodyconfgititeltekst">
          {render(blok.servicebodyconfgititeltekst4)}
        </div>
      </div>
      <div className="service_info">
        <div className="servicebodyconfigtitel">
          {render(blok.servicebodyconfigtitel5)}
        </div>
        <div className="servicebodyconfgititeltekst">
          {render(blok.servicebodyconfigtiteltekst5)}
        </div>
      </div>
      <div className="service_info">
        <div className="servicebodyconfigtitel">
          {render(blok.servicebodyconfigtitel6)}
        </div>
        <div className="servicebodyconfgititeltekst">
          {render(blok.servicebodyconfigtiteltekst6)}
        </div>
      </div>
    </div>
    <div className="buttonservice">
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

export default Servicebody2;
