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
import Contact_intro from "./contact_intro";
import Contact_form from "./contact_form";

const components = {
  page: Page,
  feature: Feature,
  kienblok: Kienblok,
  logo: Logo,
  navbar: Navbar,
  hero: Hero,
  contact_intro: Contact_intro,
  contact_form: Contact_form,
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
