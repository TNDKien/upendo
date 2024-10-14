import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./servicebodyoptimalisation.css";

const servicebodyoptimalisation = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="servicebodyheader">
            {render(blok.serviceoptimalisationheader)}
        </div>
        <div className="serviceoptimalisationheadertekst">
            {render(blok.serviceoptimalisationheadertekst)}
        </div>
        <div className="serviceoptimalisationheadertekst2">
            {render(blok.serviceoptimalisationheadertekst2)}
        </div>
    </div>
);

export default servicebodyoptimalisation;
