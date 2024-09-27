import { storyblokEditable } from "@storyblok/react/rsc";
import "../app/[locale]/aboutusintro.css";
import "../app/[locale]/aboutusintrotext.css";
import "../app/[locale]/aboutusintrocolor.css";

const AboutUsIntro = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div className="aboutussubtext">{blok.aboutussubtext}</div>

    <div className="grotemiauw">
      <div className="aboutusintrotext">
        <p>Our top priority is making data</p>
      </div>
    </div>

    <div className="aboutusintrocolor"></div>
    <p className="simpleText">
      simple<span className="white"> and</span>
    </p>

    {/* Tijdelijk de lege div verwijderd */}
    {/* <div className="whitetext"> </div> */}

    <div className="simpleText">
      <p>
        accessible<span className="white">.</span>
      </p>
    </div>
    <div className="aboutusend">
      <p>Data simplified.</p>
    </div>
  </div>
);

export default AboutUsIntro;
