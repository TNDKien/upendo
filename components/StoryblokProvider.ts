"use client";

import {
  storyblokInit,
  apiPlugin,
  SbReactComponentsMap,
} from "@storyblok/react/rsc";
import Page from "./page.component";
import Feature from "./feature/Feature";
import Navbar from "./navbar/Navbar";
import Serviceintro from "./service/serviceintro";
import Servicebody from "./service/Servicebody";
import Home_service_intro from "./home_content/Home_service_intro";
import Home_servicecard from "./home_content/Home_servicecard";
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

import Aboutusintro from "./aboutusintro";
import aboutusbodytexteen from "./aboutusbody";
import Visualtweelogo from "./visualtweelogo";
import Toolskop from './toolskop';
import Ourtoolsfoto from './Ourtoolsfoto';
import Howweserve from './Howweserve';
import Efficientkop from './efficientkop';
import Logokopefficient from './Logokopefficient';
import Value from "./Value";
import CompoKop from "./CompoKop";
import Collaboratebutton from "./Collaboratebutton"
import Learnmore from "./Learnmore"
const components = {
  page: Page,
  feature: Feature,
  navbar: Navbar,
  hero: Hero,
  serviceintro: Serviceintro,
  servicebody: Servicebody,
  contact_intro: Contact_intro,
  contact_form: Contact_form,
  home_service_intro: Home_service_intro,
  home_servicecard: Home_servicecard,
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
