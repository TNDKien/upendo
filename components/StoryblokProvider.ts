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
import Trainingcard from "./training/Trainingcard";
import Page_name from "./page_name/Page_name";
import Intro_training from "./intro_training/Intro_training";
import Schedule from"./schedule/Schedule";
import Intro_schedule from "./intro_schedule/Intro_schedule";
import Schedule_section from "./schedule_section/Schedule_section";
import Date_picker from "./date_picker/Date_Picker";

const components = {
  page: Page,
  feature: Feature,
  navbar: Navbar,
  hero: Hero,
  serviceintro: Serviceintro,
  servicebody: Servicebody,
  contact_intro: Contact_intro,
  contact_form: Contact_form,
  trainingcard: Trainingcard,
  page_name: Page_name,
  intro_training: Intro_training,
  intro_schedule: Intro_schedule,
  schedule_section: Schedule_section,
  schedule: Schedule,
  date_picker: Date_picker,
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
