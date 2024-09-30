import { storyblokEditable } from "@storyblok/react/rsc";
import "./contact.css";

const contact_intro = ({ blok }) => (
  <div className="contact-intro" {...storyblokEditable(blok)}>
    <p className="accent">{blok.contact_accent}</p>
    <h2>{blok.contact_titel}</h2>
    <h2>{blok.contact_paragraph}</h2>
    <a href={blok.linkedin.url}>linkje</a>
    <p>{blok.contact_contact}</p>
  </div>
);

export default contact_intro;
