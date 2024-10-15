import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./Servicepricing.css";

const servicepricing_premium = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="servicepricing_blok_premium">
            <div className="servicepricing_blok_title_basic">
                {render(blok.servicepricing_blok_title)}
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
                            {render(blok.servicepricing_blok_sub)}
                        </div>
                        <div className="servicepricing_blok_price_premium">
                            <div className="servicepricing_blok_price_tekst">
                                {render(blok.servicepricing_blok_price_tekst)}
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
                            {render(blok.servicepricing_blok_sub_2)}
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
                            {render(blok.servicepricing_blok_sub_3)}
                        </div>
                    </div>
                    <div className="flexboxrow-premium">
                        <img
                            className="servicepricing_blok_img_premium"
                            src={blok.servicepricing_blok_img.filename}
                            alt={blok.servicepricing_blok_img.alt || "checkmark"}
                        />
                        <div className="servicepricing_blok_sub_basic">
                            {render(blok.servicepricing_blok_sub_4)}
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
                    {render(blok.servicepricing_blok_sub_5)}
                </div>

                <img
                    className="servicepricing_blok_img_premium_3"
                    src={blok.servicepricing_blok_img.filename}
                    alt={blok.servicepricing_blok_img.alt || "checkmark"}
                />
                <div className="servicepricing_blok_sub_6">
                    {render(blok.servicepricing_blok_sub_6)}
                </div>
            </div>

        </div>
    </div>
);

export default servicepricing_premium;
