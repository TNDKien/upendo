import { storyblokEditable } from "@storyblok/react/rsc";
import "../app/[locale]/aboutusintro.css";
import "../app/[locale]/aboutusintrotext.css";
import "../app/[locale]/aboutusintrocolor.css";

const AboutUsIntro = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div className="aboutussubtext">{blok.aboutussubtext}</div>

    <div className="grotemiauw">
      <div className="aboutusintrotext">
        <p>
          Our top priority is making<span className="zeng"> data</span>
        </p>
      </div>{" "}
      <div className="aboutusintrocolor"></div>
      {/* Tijdelijk de lege div verwijderd */}
      {/* <div className="whitetext"> </div> */}
      <div className="introtext">
        <p className="simpleText">
          simple<span className="white"> and</span>
        </p>
        <p className="simpleText">
          accessible<span className="white">.</span>
        </p>
      </div>
    </div>

    <div className="aboutusend">
      <p>Data simplified.</p>
    </div>
    <div className="visual">
      <div className="icon-holder">
        <img
          className="logo"
          src={blok.visualfoto.filename}
          alt={blok.visualfoto.alt || "visual"}
        />
      </div>
    </div>
  </div>
);

export default AboutUsIntro;
