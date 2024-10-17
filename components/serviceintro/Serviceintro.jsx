import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./serviceintro.css";

const serviceintro = ({ blok }) => {
  const buttonIsActive = blok.boolean;
  const buttonStyle = {
    backgroundColor: buttonIsActive ? "#F4C5FF" : "#003846",
  };

  return (
    <div {...storyblokEditable(blok)}>
      <div className="servicesubtext">{blok.pagename}</div>
      <div className="headertekst">{render(blok.headertekst)}</div>
      <div className="serviceheadertekst">{blok.serviceheadertekst}</div>
      <div className="serviceblok">
        <div className="servicebuttondesign" style={buttonStyle}>
          <div className="servicebutton">{render(blok.servicebutton)}</div>
        </div>
        <img
          className="servicephoto"
          src={blok.servicephoto.filename}
          alt={blok.servicephoto.alt || "servicephoto"}
        />
      </div>
    </div>
  );
};

export default serviceintro;