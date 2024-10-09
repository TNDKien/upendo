import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./Servicepricing.css";

const servicepricing_premium = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="servicepricing_blok_basic">
            <div className="servicepricing_blok_title_basic">
                {render(blok.servicepricing_blok_title)}
            </div>
            <div className="flexbox-container">
                <div className="flexbox-column">
                    <div className="flexboxrow">
                        <img
                            className="servicepricing_blok_img"
                            src={blok.servicepricing_blok_img.filename}
                            alt={blok.servicepricing_blok_img.alt || "checkmark"}
                        />
                        <div className="servicepricing_blok_sub_basic">
                            {render(blok.servicepricing_blok_sub)}
                        </div>
                    </div>
                    <div className="flexboxrow">
                        <img
                            className="servicepricing_blok_img"
                            src={blok.servicepricing_blok_img.filename}
                            alt={blok.servicepricing_blok_img.alt || "checkmark"}
                        />
                        <div className="servicepricing_blok_sub_basic">
                            {render(blok.servicepricing_blok_sub_2)}
                        </div>
                    </div>
                </div>
                <div className="flexbox-column">
                    <div className="flexboxrow">
                        <img
                            className="servicepricing_blok_img"
                            src={blok.servicepricing_blok_img.filename}
                            alt={blok.servicepricing_blok_img.alt || "checkmark"}
                        />
                        <div className="servicepricing_blok_sub_basic">
                            {render(blok.servicepricing_blok_sub)}
                        </div>
                    </div>
                    <div className="flexboxrow">
                        <img
                            className="servicepricing_blok_img"
                            src={blok.servicepricing_blok_img.filename}
                            alt={blok.servicepricing_blok_img.alt || "checkmark"}
                        />
                        <div className="servicepricing_blok_sub_basic">
                            {render(blok.servicepricing_blok_sub_2)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default servicepricing_premium;