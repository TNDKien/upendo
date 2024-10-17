import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./Servicepricing.css";

const service_optimalisation_onetime = ({ blok }) => (
    <div className="service_optimalisation" {...storyblokEditable(blok)}>
        {/* Monthly Plans */}
        <div className="servicepricing_title">
            One-Time Plans
        </div>
        <div className="servicepricing_blok_basic">
            <div className="servicepricing_blok_title_basic">
                Basic
            </div>
            <div className="flexboxrow">
                <img
                    className="servicepricing_blok_img"
                    src={blok.servicepricing_blok_img.filename}
                    alt={blok.servicepricing_blok_img.alt || "checkmark"}
                />
                <div className="servicepricing_blok_sub_basic">
                    Measure more KPI’s
                </div>
                <div className="servicepricing_blok_price_basic">
                    <div className="servicepricing_blok_price_tekst">
                        €900
                    </div>
                </div>
            </div>
            <div className="flexboxrow">
                <img
                    className="servicepricing_blok_img"
                    src={blok.servicepricing_blok_img.filename}
                    alt={blok.servicepricing_blok_img.alt || "checkmark"}
                />
                <div className="servicepricing_blok_sub_basic">
                    Implement new GA4
                </div>
            </div>
        </div>
        <div className="servicepricing_blok_basic">
            <div className="servicepricing_blok_title_basic">
                Advanced
            </div>
            <div className="flexbox-container">
                <div className="flexbox-column">
                    <div className="flexboxrow-premium">
                        <img
                            className="servicepricing_blok_img_premium"
                            src={blok.servicepricing_blok_img.filename}
                            alt={blok.servicepricing_blok_img.alt || "checkmark"}
                        />
                        <div className="servicepricing_blok_sub_basic">
                            Measure more KPI’s
                        </div>
                        <div className="servicepricing_blok_price_premium">
                            <div className="servicepricing_blok_price_tekst">
                                €1500
                            </div>
                        </div>
                    </div>
                    <div className="flexboxrow-premium">
                        <img
                            className="servicepricing_blok_img_premium"
                            src={blok.servicepricing_blok_img.filename}
                            alt={blok.servicepricing_blok_img.alt || "checkmark"}
                        />
                        <div className="servicepricing_blok_sub_basic">
                            Implement new GA4
                        </div>
                    </div>
                </div>
                <div className="flexbox-column">
                    <div className="flexboxrow-premium">
                        <img
                            className="servicepricing_blok_img_premium"
                            src={blok.servicepricing_blok_img.filename}
                            alt={blok.servicepricing_blok_img.alt || "checkmark"}
                        />
                        <div className="servicepricing_blok_sub_basic">
                            Expand dashboard
                        </div>
                    </div>
                    <div className="flexboxrow-premium">
                        <img
                            className="servicepricing_blok_img_premium"
                            src={blok.servicepricing_blok_img.filename}
                            alt={blok.servicepricing_blok_img.alt || "checkmark"}
                        />
                        <div className="servicepricing_blok_sub_basic">
                            Clean GTM containers
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="servicepricing_blok_premium">
            <div className="servicepricing_blok_title_basic">
                Premium
            </div>
            <div className="flexbox-container">
                <div className="flexbox-column">
                    <div className="flexboxrow-premium">
                        <img
                            className="servicepricing_blok_img_premium"
                            src={blok.servicepricing_blok_img.filename}
                            alt={blok.servicepricing_blok_img.alt || "checkmark"}
                        />
                        <div className="servicepricing_blok_sub_basic">
                            Measure more KPI’s
                        </div>
                        <div className="servicepricing_blok_price_premium">
                            <div className="servicepricing_blok_price_tekst">
                                €2200
                            </div>
                        </div>
                    </div>
                    <div className="flexboxrow-premium">
                        <img
                            className="servicepricing_blok_img_premium"
                            src={blok.servicepricing_blok_img.filename}
                            alt={blok.servicepricing_blok_img.alt || "checkmark"}
                        />
                        <div className="servicepricing_blok_sub_basic">
                            Implement new GA4
                        </div>
                    </div>
                </div>
                <div className="flexbox-column">
                    <div className="flexboxrow-premium">
                        <img
                            className="servicepricing_blok_img_premium"
                            src={blok.servicepricing_blok_img.filename}
                            alt={blok.servicepricing_blok_img.alt || "checkmark"}
                        />
                        <div className="servicepricing_blok_sub_basic">
                            Expand dashboard
                        </div>
                    </div>
                    <div className="flexboxrow-premium">
                        <img
                            className="servicepricing_blok_img_premium"
                            src={blok.servicepricing_blok_img.filename}
                            alt={blok.servicepricing_blok_img.alt || "checkmark"}
                        />
                        <div className="servicepricing_blok_sub_basic">
                            Clean GTM containers
                        </div>
                    </div>
                </div>


            </div>

            {/* Nieuwe rij met sub 5 en sub 6 naast elkaar */}
            <div className="flexboxrow-premium">
                <img
                    className="servicepricing_blok_img_premium_2"
                    src={blok.servicepricing_blok_img.filename}
                    alt={blok.servicepricing_blok_img.alt || "checkmark"}
                />
                <div className="servicepricing_blok_sub_5">
                    Clean GTM containers
                </div>

                <img
                    className="servicepricing_blok_img_premium_3"
                    src={blok.servicepricing_blok_img.filename}
                    alt={blok.servicepricing_blok_img.alt || "checkmark"}
                />
                <div className="servicepricing_blok_sub_6">
                    Clean GTM containers
                </div>
            </div>

        </div>
    </div>
);

export default service_optimalisation_onetime;
