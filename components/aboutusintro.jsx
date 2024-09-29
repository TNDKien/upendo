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

    <div className="aboutusend">
      <p>Data simplified.</p>
    </div>

    {/* Visual 1 */}
    <div className="visual">
      <div className="icon-holder">
        {blok.visualfoto ? (
          <img
            className="logo"
            src={blok.visualfoto.filename}
            alt={blok.visualfoto.alt || "visual"}
          />
        ) : (
          <p>Image not available</p>
        )}
      </div>
      <div className="eerstetext">
        <p>
          We help businesses make sense of their data. With customized solutions
          for configuration, optimization, and analysis, we turn complex data
          into clear, actionable insights.
        </p>
      </div>
    </div>

    {/* Visual 2 */}
    <div className="visualtwee">
      <div className="icon-holder">
        {blok.visualtwee ? (
          <img
            className="logo"
            src={blok.visualtwee.filename}
            alt={blok.visualtwee.alt || "visualtwee"}
          />
        ) : (
          <p>Image not available</p>
        )}
      </div>
      <div className="tweedetext">
        <p>
          We specialize in helping businesses of all sizes gain insights from
          their data through At Upendo, everything starts with your business
          goals. We believe that every company is unique, which is why we don’t
          offer one-size-fits-all solutions. Instead, we begin with a thorough
          analysis of what your business needs.
        </p>
      </div>
    </div>

    {/* Extra tekstsectie */}
    <div className="derdetext">
      <p>
        Transparency is at the core of how we work at Upendo. We ensure that
        you’re never met with surprises when it comes to pricing, results, or
        processes. Our team of data experts dives deep into your existing data
        setup to identify and optimize any errors where needed.
      </p>
    </div>
  </div> // Sluit de buitenste div correct af
);

export default AboutUsIntro;
