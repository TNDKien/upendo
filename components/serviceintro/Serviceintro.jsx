import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./serviceintro.css";
import Button from "../button/Button";
 

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
        <div className="p-6 lg:ml-24">
          {blok.button &&
            blok.button.map((nestedBlok) => {
              if (nestedBlok.component === "button") {
                return <Button blok={nestedBlok} key={nestedBlok._uid} />;
              }
              return null;
            })}
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
