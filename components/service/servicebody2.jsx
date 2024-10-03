import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./servicebody2.css";

const Servicebody2 = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="servicebodyconfigtitel">
            {render(blok.servicebodyconfigtitel)}
        </div>
        <div className="servicebodyconfgititeltekst">
            {render(blok.servicebodyconfgititeltekst)}
        </div>
        <div className="servicebodyconfigtitel">
            {render(blok.servicebodyconfigtitel2)}
        </div>
        <div className="servicebodyconfgititeltekst">
            {render(blok.servicebodyconfgititeltekst2)}
        </div>
        <div className="servicebodyconfigtitel">
            {render(blok.servicebodyconfigtitel3)}
        </div>
        <div className="servicebodyconfgititeltekst">
            {render(blok.servicebodyconfgititeltekst3)}
        </div>
        <div className="servicebodyconfigtitel">
            {render(blok.servicebodyconfigtitel4)}
        </div>
        <div className="servicebodyconfgititeltekst">
            {render(blok.servicebodyconfgititeltekst4)}
        </div>
        <div className="servicebodyconfigtitel">
            {render(blok.servicebodyconfigtitel5)}
        </div>
        <div className="servicebodyconfgititeltekst">
            {render(blok.servicebodyconfigtiteltekst5)}
        </div>
        <div className="servicebodybuttondesign">
            <div className="servicebodybutton">
                {render(blok.servicebodybutton)}
            </div>
        </div>
    </div>
);

export default Servicebody2;
