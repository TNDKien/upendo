"use client";

import {
  storyblokInit,
  apiPlugin,
  SbReactComponentsMap,
} from "@storyblok/react/rsc";
import Page from "./page.component";
import Feature from "./feature/Feature";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/hero";
import Serviceintro from "./service/serviceintro";
import Servicebody from "./service/servicebody";
import Contact_intro from "./contact/contact_intro";
import Contact_form from "./contact/contact_form";
import Pricing_intro from "./pricing/Pricing_intro";
import Pricing_cards from "./pricing/Pricing_cards";
import Pricing_services from "./pricing/Pricing_services";

const components = {
  page: Page,
  feature: Feature,
  navbar: Navbar,
  hero: Hero,
  serviceintro: Serviceintro,
  servicebody: Servicebody,
  contact_intro: Contact_intro,
  contact_form: Contact_form,
  pricing_intro: Pricing_intro,
  pricing_cards: Pricing_cards,
  pricing_services: Pricing_services,
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
