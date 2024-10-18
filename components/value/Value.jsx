import { storyblokEditable } from "@storyblok/react/rsc";

const Value = ({ blok }) => (
  <div className="p-6 lg:p-0 lg:w-80 lg:mr-20" {...storyblokEditable(blok)}>
    <div className="flex justify-between py-6">
      <h1 className="font-mono font-medium text-limeGreen">{blok.title}</h1>
      <img
        className="w-6 h-6"
        src={blok.visual.filename}
        alt={blok.visual.alt || "Visual"}
      />
    </div>
    <p className="font-inter">{blok.paragraph}</p>
    <p className="py-6 ">
      <a
        className="font-mono underline underline-offset-2"
        href={`/${blok.link.story.url}`}
      >
        Learn more
      </a>
    </p>
  </div>
);

export default Value;
