"use client";

import {
  storyblokInit,
  apiPlugin,
  SbReactComponentsMap,
} from "@storyblok/react/rsc";
import Page from "./page.component";
import Navbar from "./navbar/Navbar";
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
import Service_plans from "./Servicepricing/Service_plans";
import Service_plans_text from "./Servicepricing/Service_plans_text";
import service_dashboard_button from "./service_dashboard_button/Service_dashboard_button";
import Aboutusintro from "./aboutus/aboutusintro";
import aboutusbodytexteen from "./aboutus/aboutusbody";
import Visualtweelogo from "./visualtweelogo/visualtweelogo";
import Toolskop from "./toolskop/toolskop";
import Ourtoolsfoto from "./ourtoolsfoto/Ourtoolsfoto";
import Howweserve from "./howweserve/Howweserve";
import Efficientkop from "./efficientkop/efficientkop";
import Logokopefficient from "./logokopefficient/Logokopefficient";
import Value from "./value/Value";
import CompoKop from "./compokop/CompoKop";
import Collaboratebutton from "./Collabarate/Collaboratebutton";
import Learnmore from "./learnmore/Learnmore";
import Serviceintro from "./serviceintro/Serviceintro";
import Servicebody from "./servicebody/Servicebody";
import Servicebody2 from "./servicebody2/Servicebody2";
import Servicebody3 from "./servicebody3/Servicebody3";
import Servicepricing from "./Servicepricing/Servicepricing";
import Servicepricing_basic from "./Servicepricing/Servicepricing_basic";
import Servicepricing_advanced from "./Servicepricing/Servicepricing_advanced";
import Servicepricing_premium from "./Servicepricing/Servicepricing_premium";
import Serviceoptimalisation_footer from "./Serviceoptimalisation_footer/Serviceoptimalisation_footer";
import Prices_intro from "./FAQ/Prices_intro";
import Button from "./button/Button";
import Schedule from "./schedule/Schedule";
import Cta from "./cta/Cta";
import Blok_container from "./blok_container/Blok_container";
import Servicepackage from "./servicepackage/Servicepackage";
import Prices_accordion from "./FAQ/Prices_accordion";
import Prices_cardAnnual from "./FAQ/Prices_cardAnnual";
import Prices_cardMonthly from "./FAQ/Prices_cardMonthly";
import Prices_cardOne from "./FAQ/Prices_cardOne";
import Service_optimalisation_monthly from "./Servicepricing/Service_optimalisation_monthly";
import Service_optimalisation_onetime from "./Servicepricing/Service_optimalisation_onetime";

import Accordion from "./accordion/Accordion";
import Schedule_section from "./schedule_section/Schedule_section";
import Intro_schedule from "./intro_schedule/Intro_schedule";

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
  trainingcard: Trainingcard,
  page_name: Page_name,
  intro_training: Intro_training,
  strapi: Strapi,
  servicepricing: Servicepricing,
  servicepricing_basic: Servicepricing_basic,
  servicepricing_advanced: Servicepricing_advanced,
  servicepricing_premium: Servicepricing_premium,
  service_dashboard_button: service_dashboard_button,
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
  prices_intro: Prices_intro,
  button: Button,
  intro_schedule: Intro_schedule,
  schedule_section: Schedule_section,
  schedule: Schedule,
   cta: Cta,
  blok_container: Blok_container,
  servicebody2: Servicebody2,
  servicebody3: Servicebody3,
  servicepackage: Servicepackage,
  prices_accordion: Prices_accordion,
  prices_cardAnnual: Prices_cardAnnual,
  prices_cardMonthly: Prices_cardMonthly,
  prices_cardOne: Prices_cardOne,
  serviceoptimalisation_footer: Serviceoptimalisation_footer,
  service_optimalisation_monthly: Service_optimalisation_monthly,
  service_optimalisation_onetime: Service_optimalisation_onetime,
  accordion: Accordion,
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
