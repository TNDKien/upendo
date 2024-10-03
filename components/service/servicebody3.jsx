import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./servicebody3.css";

const servicebody3 = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="servicebodyheader">
            {render(blok.servicebodyheader)}
        </div>
        <div className="servicebodyheadertekst">
            {render(blok.servicebodyheadertekst)}
        </div>
        <div className="servicebodyheadertekst2">
            {render(blok.servicebodyheadertekst2)}
        </div>
        <div className="servicebodyheadertekst3">
            {render(blok.servicebodyheadertekst3)}
        </div>
    </div>
);

export default servicebody3;
