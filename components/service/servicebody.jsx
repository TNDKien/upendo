import { storyblokEditable } from "@storyblok/react/rsc";
import "./servicebody.css";

const servicebody = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div className="servicebodytitel">{blok.servicebodytitel}</div>
    <div className="servicebodytekst1">{blok.servicebodytekst1}</div>
    <div className="servicebodytekst2">{blok.servicebodytekst1}</div>
  </div>
);

export default servicebody;
