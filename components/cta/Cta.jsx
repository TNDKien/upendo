import { storyblokEditable } from "@storyblok/react/rsc";
import Button from "../button/Button";

const Cta = ({ blok }) => {
  return (
    <div
      className="flex items-center p-6 lg:p-32 w-full"
      {...storyblokEditable(blok)}
    >
      <img
        className="h-[300px] -mr-20 z-0"
        src={blok.visual.filename}
        alt={blok.visual.alt}
      />
      <img
        className="h-[300px] rounded-tr-[50px]"
        src={blok.image.filename}
        alt={blok.image.alt}
      />

      <div className="flex flex-col justify-between p-12 gap-12 border-y border-r border-limeGreen w-full">
        <p className="font-area font-bold text-2xl text-offWhite">
          {blok.text}
        </p>

        {blok.button &&
          blok.button.map((nestedBlok) => {
            if (nestedBlok.component === "button") {
              return <Button blok={nestedBlok} key={nestedBlok._uid} />;
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default Cta;
