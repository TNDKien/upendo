import { storyblokEditable } from "@storyblok/react/rsc";

const CompoKop = ({ blok }) => (
  <div className="blok-feature" {...storyblokEditable(blok)}>
    <div className="visualblok">
      <h1 className="compotext">{blok.title}</h1>
      <img
        className="Visuallinksgroot"
        src={blok.visuallinksgroot.filename}
        alt={blok.visuallinksgroot.alt || "Visuallinksgroot"}
      />
    </div>
    <div>
      <img
        className="Kadertext"
        src={blok.kadertext.filename}
        alt={blok.kadertext.alt || "Kadertext"}
      />
    </div>
    <p className="textkader">{blok.paragraph}</p>
  </div>
);

export default CompoKop;
