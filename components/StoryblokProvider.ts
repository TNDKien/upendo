"use client";

import {
  storyblokInit,
  apiPlugin,
  SbReactComponentsMap,
} from "@storyblok/react/rsc";
import Page from "./page.component";
import Feature from "./Feature";
import Kienblok from "./Kienblok";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Hero from "./hero";
import Serviceintro from "./serviceintro"
import Servicebody from "./servicebody"
import Servicebody2 from "./servicebody2"
import Servicebody3 from "./servicebody3"
import servicebody from "./servicebody";
import servicepackage from "./servicepackage";

const components = {
  page: Page,
  feature: Feature,
  kienblok: Kienblok,
  logo: Logo,
  navbar: Navbar,
  hero: Hero,
  serviceintro: Serviceintro,
  servicebody: Servicebody,
  servicebody2: Servicebody2,
  servicebody3: Servicebody3,
  servicepackage: servicepackage,
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
