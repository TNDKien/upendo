import { storyblokEditable } from "@storyblok/react/rsc";
import "./aboutusintro.css";
import "./aboutusintrotext.css";
import "./aboutusintrocolor.css";
import { render } from "storyblok-rich-text-react-renderer";

const AboutUsIntro = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="aboutus-container">
    <div className="aboutussubtext">{blok.aboutussubtext}</div>

    <div className="grotemiauw">
      <div className="aboutusintrotext">
        <p>
          Our top priority is making<span className="zeng"> data</span>
        </p>
      </div>
      <div className="aboutusintrocolor"></div>
      <div className="introtext">
        <p className="simpleText">
          simple<span className="white"> and</span>
        </p>
        <p className="simpleText">
          accessible<span className="white">.</span>
        </p>
      </div>
    </div>
  </div>
);

export default AboutUsIntro;
