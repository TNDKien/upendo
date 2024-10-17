import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./serviceoptimalisation_footer.css";

const Serviceoptimalisation_footer = ({ blok }) => {
    const buttonIsActive = blok.boolean;
    const buttonStyle = {
        backgroundColor: buttonIsActive ? '#F4C5FF' : '#003846',
    };

    return (
        <div className="serviceoptimalisation_footer" {...storyblokEditable(blok)}>
            <div className="footer_header">
                {render(blok.footer_header)}
            </div>
            <div className="footer_tekst_bold">
                {render(blok.footer_tekst_monthly)}
            </div>
            <div className="footer_tekst_normal_sub">
                {render(blok.footer_tekst_monthly_sub)}
            </div>
            <div className="footer_tekst_bold">
                {render(blok.footer_tekst_onetime)}
            </div>
            <div className="footer_tekst_normal_sub">
                {render(blok.footer_tekst_onetime_sub)}
            </div>
            <div className="footer_tekst_bold">
                {render(blok.footer_tekst_notsure)}
            </div>
            <div className="footer_tekst_normal_sub_2">
                {render(blok.footer_tekst_notsure_sub)}
            </div>
            <div className="servicebodybuttondesign">
                <div className="servicebodybutton">
                    {render(blok.servicebodybutton)}
                </div>
            </div>
        </div>
    );
};

export default Serviceoptimalisation_footer;
