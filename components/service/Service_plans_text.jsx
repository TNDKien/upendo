import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./Service_plans_text.css";

const service_plans_text = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div className="servicetext">{render(blok.service_text)}</div>
    <div className="servicelink">{render(blok.service_link)}</div>
  </div>
);

export default service_plans_text;
