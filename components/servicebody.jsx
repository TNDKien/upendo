import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "../app/[locale]/servicebody.css";

const servicebody = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="servicebodytitel">
            {render(blok.servicebodytitel)}
        </div>
        <div className="servicebodytekst1">
            {render(blok.servicebodytekst1)}
        </div>
        <div className="servicebodytekst2">
            {render(blok.servicebodytekst2)}
        </div>
    </div>
);

export default servicebody;
