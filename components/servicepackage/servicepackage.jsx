import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./servicepackage.css";

const servicepackage = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="flexboxrow2">
            <div className="flexboxfiguur"></div>
            <div className="flexboxrowtekst">
                {render(blok.flexboxrowtekst)}
            </div>
        </div>
        <div className="flexboxrow2">
            <div className="flexboxfiguur"></div>
            <div className="flexboxrowtekst">
                {render(blok.flexboxrowtekst2)}
            </div>
        </div>
        <div className="flexboxrow2">
            <div className="flexboxfiguur"></div>
            <div className="flexboxrowtekst">
                {render(blok.flexboxrowtekst3)}
            </div>
        </div>
        <div className="flexboxrow2">
            <div className="flexboxfiguur"></div>
            <div className="flexboxrowtekst">
                {render(blok.flexboxrowtekst4)}
            </div>
        </div>
        <div className="flexboxrow2">
            <div className="flexboxfiguur"></div>
            <div className="flexboxrowtekst">
                {render(blok.flexboxrowtekst5)}
            </div>
        </div>
    </div>
);

export default servicepackage;
