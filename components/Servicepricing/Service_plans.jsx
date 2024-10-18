import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./Serviceplans.css";

const service_plans = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div className="serviceplanstitel">{render(blok.service_plans_titel)}</div>
    <div className="plans_container">
      <div className="serviceplanstitle1">
        {render(blok.service_plans_titel1)}
      </div>

      <div className="service_plans_text_opsomming">
        {/* Visual */}
        <div className="service_lijntje"></div>
        {/* De verschillende punten */}
        <div className="serviceplanstext1">
          {render(blok.service_plans_text1)}
        </div>
      </div>
    </div>
  </div>
);

export default service_plans;
