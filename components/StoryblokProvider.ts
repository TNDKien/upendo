"use client";

import {
  storyblokInit,
  apiPlugin,
  SbReactComponentsMap,
} from "@storyblok/react/rsc";
import Page from "./page.component";
import Feature from "./feature/Feature";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import Serviceintro from "./service/serviceintro";
import Servicebody from "./service/servicebody";
import Contact_intro from "./contact/Contact_intro";
import Contact_form from "./contact/Contact_form";
import Home_service_intro from "./home_content/Home_service_intro";
import Home_servicecard from "./home_content/Home_servicecard";
import Pricing_intro from "./pricing/Pricing_intro";
import Pricing_cards from "./pricing/Pricing_cards";
import Pricing_services from "./pricing/Pricing_services";
import Footer from "./footer/Footer";
import Infinite_banner from "./infinite_banner/Infinite_banner";
import Servicebody2 from "./service/servicebody2";
import Servicebody3 from "./service/servicebody3";
import servicebody from "./service/servicebody";
import servicepackage from "./service/servicepackage";
import Trainingcard from "./training/Trainingcard";
import Page_name from "./page_name/Page_name";
import Intro_training from "./intro_training/Intro_training";

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
