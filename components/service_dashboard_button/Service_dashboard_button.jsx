import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./service_dashboard_button.css";

const Service_dashboard_button = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="dashboard_button_design">
            <div className="dashboard_button_tekst">
                {render(blok.dashboard_button_tekst)}
            </div>
        </div>
    </div>
);

export default Service_dashboard_button;
