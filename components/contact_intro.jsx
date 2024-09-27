import { storyblokEditable } from "@storyblok/react/rsc";
import "../app/[locale]/globals.css";
import "../app/[locale]/contact.css";

const contact_intro = ({ blok }) => (
  <div className="contact-intro" {...storyblokEditable(blok)}>
    <p className="accent">{blok.contact_accent}</p>
    <h2 className="title">{blok.contact_titel}</h2>
    <h2 className="paragraph">{blok.contact_paragraph}</h2>
    <a  href={blok.linkedin.url}>
        <p className="link">LinkedIn</p>
    </a>
    <p className="contact">{blok.contact_contact}</p>
  </div>
);

export default contact_intro;
