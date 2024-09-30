import { storyblokEditable } from "@storyblok/react/rsc";
import "./serviceintro.css";

const serviceintro = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div className="servicesubtext">
      <p>Configuration</p>
    </div>
    <div className="headertekst">
      <p>Setting the</p>
      <p>
        <span className="headertekstbold">foundation</span> for
      </p>
      <p>clear insights, one</p>
      <p>
        <span className="headertekstbold">configuration</span> at
      </p>
      <p>a time.</p>
    </div>
    <div className="serviceheadertekst">{blok.serviceheadertekst}</div>
    <div className="servicebuttondesign">
      <div className="servicebutton">{blok.servicebutton}</div>
    </div>
    <img
      className="servicephoto"
      src={blok.servicephoto.filename}
      alt={blok.servicephoto.alt || "servicephoto"}
    />
  </div>
);

export default serviceintro;
