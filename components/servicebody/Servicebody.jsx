import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./servicebody.css";

const servicebody = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div className="servicebodytitel">{render(blok.servicebodytitel)}</div>
    <div className="servicecontainer">
      <div className="servicebodytekst1">{render(blok.servicebodytekst1)}</div>
      <div className="servicebodytekst2">{render(blok.servicebodytekst2)}</div>
    </div>
  </div>
);

export default servicebody;
