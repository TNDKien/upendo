import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "../app/[locale]/serviceintro.css";

const serviceintro = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="servicesubtext">
            {blok.pagename}
        </div>
        <div className="headertekst">
            {render(blok.headertekst)}
        </div>
        <div className="serviceheadertekst">
            {blok.serviceheadertekst}
        </div>
        <div className="servicebuttondesign">
            <div className="servicebutton">
                {render(blok.servicebutton)}
            </div>
        </div>
        <img
            className="servicephoto"
            src={blok.servicephoto.filename}
            alt={blok.servicephoto.alt || "servicephoto"}
        />
    </div>
);

export default serviceintro;