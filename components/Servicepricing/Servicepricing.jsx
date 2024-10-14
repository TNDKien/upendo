import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./Servicepricing.css";

const servicepricing = ({ blok }) => (
    <div {...storyblokEditable(blok)}>

        {/* Monthly Plans */}

        <div className="servicepricing_blok">

            <div className="servicepricing_blok_title">
                {render(blok.servicepricing_blok_title)}
            </div>
            <div className="flexboxrow">
                <img
                    className="servicepricing_blok_img"
                    src={blok.servicepricing_blok_img.filename}
                    alt={blok.servicepricing_blok_img.alt || "checkmark"}
                />
                <div className="servicepricing_blok_sub">{render(blok.servicepricing_blok_sub)}</div>
                <div className="servicepricing_blok_price">
                    <div className="servicepricing_blok_price_tekst">{render(blok.servicepricing_blok_price_tekst)}</div>
                </div>
            </div>
        </div>
        <div className="servicepricing_footer_tekst">{render(blok.servicepricing_footer_tekst)}</div>



        {/* One Time Plans Basic */}
    </div>
    //
);

export default servicepricing;
