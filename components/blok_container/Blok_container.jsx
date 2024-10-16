import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import Service_plans from "../Servicepricing/Service_plans";
import Pricing_services from "../pricing/Pricing_services";

const Blok_container = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="">
      <div className="flex">
        {blok.components &&
          blok.components.map((nestedBlok) => {
            {
              /* // Kopieer onderstaande comment en pas de componentnaam aan, deze staan in hoofdletters

              else if (nestedBlok.component === "CONFIG_NAAM") {
               return <NAAM_IMPORT_COMPONENT blok={nestedBlok} key={nestedBlok._uid} />;
              }
              */
            }
            if (nestedBlok.component === "service_plans") {
              return <Service_plans blok={nestedBlok} key={nestedBlok._uid} />;
            } else if (nestedBlok.component === "pricing_services") {
              return (
                <Pricing_services blok={nestedBlok} key={nestedBlok._uid} />
              );
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default Blok_container;
