import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./Service_plans_text.css";

// Component waarbij de opties voor de prijzen worden getoont.

const service_plans_text = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div className="text_service_blok">
      <div className="servicetext">{render(blok.service_text)}</div>
      <div className="servicelink">{render(blok.service_link)}</div>
    </div>
  </div>
);

export default service_plans_text;
