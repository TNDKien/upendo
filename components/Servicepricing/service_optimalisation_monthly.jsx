import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./Servicepricing.css";

const service_optimalisation_monthly = ({ blok }) => (
    <div className="service_optimalisation_monthly" {...storyblokEditable(blok)}>

        {/* Monthly Plans */}
        <div className="servicepricing_title">
            Monthly Plans
        </div>
        <div className="servicepricing_blok">

            <div className="servicepricing_blok_title">
                Basic
            </div>
            <div className="flexboxrow">
                <img
                    className="servicepricing_blok_img"
                    src={blok.servicepricing_blok_img.filename}
                    alt={blok.servicepricing_blok_img.alt || "checkmark"}
                />
                <div className="servicepricing_blok_sub">1 configuration setup, monthly report, email support</div>
                <div className="servicepricing_blok_price">
                    <div className="servicepricing_blok_price_tekst">€500</div>
                </div>
            </div>
        </div>
        <div className="servicepricing_blok">

            <div className="servicepricing_blok_title">
                Standard
            </div>
            <div className="flexboxrow">
                <img
                    className="servicepricing_blok_img"
                    src={blok.servicepricing_blok_img.filename}
                    alt={blok.servicepricing_blok_img.alt || "checkmark"}
                />
                <div className="servicepricing_blok_sub">1 configuration, 1 custom dashboard, optimization, monthly report</div>
                <div className="servicepricing_blok_price">
                    <div className="servicepricing_blok_price_tekst">€1000</div>
                </div>
            </div>
        </div>
        <div className="servicepricing_blok">

            <div className="servicepricing_blok_title">
                Premium
            </div>
            <div className="flexboxrow">
                <img
                    className="servicepricing_blok_img"
                    src={blok.servicepricing_blok_img.filename}
                    alt={blok.servicepricing_blok_img.alt || "checkmark"}
                />
                <div className="servicepricing_blok_sub">Unlimited configurations, custom dashboards, full optimization, monthly reports</div>
                <div className="servicepricing_blok_price">
                    <div className="servicepricing_blok_price_tekst">€1500</div>
                </div>
            </div>
        </div>
        
        {/* <div className="servicepricing_footer_tekst">More Info</div> */}



        {/* One Time Plans Basic */}
    </div>
    //
);

export default service_optimalisation_monthly;
