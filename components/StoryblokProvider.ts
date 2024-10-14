"use client";

import {
  storyblokInit,
  apiPlugin,
  SbReactComponentsMap,
} from "@storyblok/react/rsc";
import Page from "./page.component";
import Navbar from "./navbar/Navbar";
import Serviceintro from "./service/serviceintro";
import Servicebody from "./service/Servicebody";
import Intro from "./intro/Intro";
import Servicecard from "./servicecard/Servicecard";
import Pricing_intro from "./pricing/Pricing_intro";
import Pricing_cards from "./pricing/Pricing_cards";
import Pricing_services from "./pricing/Pricing_services";
import Footer from "./footer/Footer";
import Infinite_banner from "./infinite_banner/Infinite_banner";
import Page_name from "./page_name/Page_name";
import Intro_training from "./intro_training/Intro_training";
import Contact_intro from "./contact/Contact_intro";
import Contact_form from "./contact/Contact_form";
import Hero from "./hero/Hero";
import Trainingcard from "./training/Trainingcard";
import Strapi from "./strapi/Strapi";
import Servicebody2 from "./service/Servicebody2";
import Servicebody3 from "./service/Servicebody3";
import servicebody from "./service/Servicebody";
import servicepackage from "./service/servicepackage";
import Servicepricing from "./service/Servicepricing";
import Servicepricing_basic from "./service/Servicepricing_basic";
import Servicepricing_advanced from "./service/Servicepricing_advanced";
import Servicepricing_premium from "./service/Servicepricing_premium";
import Serviceoptimalisation_footer from "./service/Serviceoptimalisation_footer";
import Service_plans from "./service/Service_plans";
import Service_plans_text from "./service/Service_plans_text";

import Aboutusintro from "./aboutus/aboutusintro";
import aboutusbodytexteen from "./aboutus/aboutusbody";
import Visualtweelogo from "./aboutus/visualtweelogo";
import Toolskop from "./aboutus/toolskop";
import Ourtoolsfoto from "./aboutus/Ourtoolsfoto";
import Howweserve from "./aboutus/Howweserve";
import Efficientkop from "./aboutus/efficientkop";
import Logokopefficient from "./aboutus/Logokopefficient";
import Value from "./aboutus/Value";
import CompoKop from "./aboutus/CompoKop";
import Collaboratebutton from "./aboutus/Collaboratebutton";
import Learnmore from "./aboutus/Learnmore";

const components = {
  page: Page,
  navbar: Navbar,
  hero: Hero,
  serviceintro: Serviceintro,
  servicebody: Servicebody,
  contact_intro: Contact_intro,
  contact_form: Contact_form,
  intro: Intro,
  servicecard: Servicecard,
  pricing_intro: Pricing_intro,
  pricing_cards: Pricing_cards,
  pricing_services: Pricing_services,
  footer: Footer,
  infinite_banner: Infinite_banner,
  servicebody2: Servicebody2,
  servicebody3: Servicebody3,
  servicepackage: servicepackage,
  trainingcard: Trainingcard,
  page_name: Page_name,
  intro_training: Intro_training,
  strapi: Strapi,
  servicepricing: Servicepricing,
  servicepricing_basic: Servicepricing_basic,
  servicepricing_advanced: Servicepricing_advanced,
  servicepricing_premium: Servicepricing_premium,
  Serviceoptimalisation_footer: Serviceoptimalisation_footer,
  service_plans: Service_plans,
  service_plans_text: Service_plans_text,
  aboutusintro: Aboutusintro,
  aboutusbody: aboutusbodytexteen,
  visualtweelogo: Visualtweelogo,
  toolskop: Toolskop,
  ourtoolsfoto: Ourtoolsfoto,
  howweserve: Howweserve,
  efficientkop: Efficientkop,
  logokopefficient: Logokopefficient,
  value: Value,
  compokop: CompoKop,
  collaboratebutton: Collaboratebutton,
  learnmore: Learnmore,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: components as SbReactComponentsMap,
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

console.log(process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN);
