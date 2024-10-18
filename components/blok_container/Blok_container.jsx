import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import Service_plans from "../Servicepricing/Service_plans";
import Pricing_services from "../pricing/Pricing_services";
import Aboutusbody from "../aboutus/aboutusbody";
import Howweserve from "../howweserve/Howweserve";
import Value from "../value/Value";
import Service_optimalisation_monthly from "../Servicepricing/Service_optimalisation_monthly";
import Service_optimalisation_onetime from "../Servicepricing/Service_optimalisation_onetime";
import Accordion from "../accordion/Accordion";
import Prices_cardOne from "../FAQ/Prices_cardOne";
import Prices_cardAnnual from "../FAQ/Prices_cardAnnual";
import Prices_cardMonthly from "../FAQ/Prices_cardMonthly";

const Blok_container = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="p-0 lg:px-32">
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:gap-y-8">
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
            } else if (nestedBlok.component === "aboutusbody") {
              return <Aboutusbody blok={nestedBlok} key={nestedBlok._uid} />;
            } else if (nestedBlok.component === "howweserve") {
              return <Howweserve blok={nestedBlok} key={nestedBlok._uid} />;
            } else if (nestedBlok.component === "value") {
              return <Value blok={nestedBlok} key={nestedBlok._uid} />;
            } else if (
              nestedBlok.component === "service_optimalisation_monthly"
            ) {
              return (
                <Service_optimalisation_monthly
                  blok={nestedBlok}
                  key={nestedBlok._uid}
                />
              );
            } else if (
              nestedBlok.component === "service_optimalisation_onetime"
            ) {
              return (
                <Service_optimalisation_onetime
                  blok={nestedBlok}
                  key={nestedBlok._uid}
                />
              );
            } else if (nestedBlok.component === "accordion") {
              return <Accordion blok={nestedBlok} key={nestedBlok._uid} />;
            }else if (nestedBlok.component === "prices_cardOne") {
              return <Prices_cardOne blok={nestedBlok} key={nestedBlok._uid} />;
             }
             else if (nestedBlok.component === "prices_cardAnnual") {
              return <Prices_cardAnnual blok={nestedBlok} key={nestedBlok._uid} />;
             }
             else if (nestedBlok.component === "prices_cardMonthly") {
              return <Prices_cardMonthly blok={nestedBlok} key={nestedBlok._uid} />;
             }
            return null;
          })}
      </div>
    </div>
  );
};

export default Blok_container;
