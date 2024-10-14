import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./Servicepricing.css";

const servicepricing_basic = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        {/* Monthly Plans */}
        <div className="servicepricing_title">
            {render(blok.servicepricing_title)}
        </div>
        <div className="servicepricing_blok_basic">
            <div className="servicepricing_blok_title_basic">
                {render(blok.servicepricing_blok_title)}
            </div>
            <div className="flexboxrow">
                <img
                    className="servicepricing_blok_img"
                    src={blok.servicepricing_blok_img.filename}
                    alt={blok.servicepricing_blok_img.alt || "checkmark"}
                />
                <div className="servicepricing_blok_sub_basic">
                    {render(blok.servicepricing_blok_sub)}
                </div>
                <div className="servicepricing_blok_price_basic">
                    <div className="servicepricing_blok_price_tekst">
                        {render(blok.servicepricing_blok_price_tekst)}
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
                    {render(blok.servicepricing_blok_sub_2)}
                </div>
            </div>
        </div>
    </div>
);

export default servicepricing_basic;
