import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./Prices_cardAnnual.css";

const prices_cardAnnual = ({ blok }) => (
  <div className="prices_cardAnnual" {...storyblokEditable(blok)}>
    <div className="squareAnnual">
        <h2>One-Time Service</h2>
        <div className="square-tableAnnual">
           <div className="headerAnnual">
            <div className="left-columnAnnual">
              <p className="leftAnnual">Service</p>
            </div>
            <div className="right-columnAnnual">
              <p className="rightAnnual">Price</p>
            </div>
           </div> 
          <div className="tableAnnual">
            <div className="left-columnAnnual">
              <p className="leftAnnual">Basic Annual</p>
              <p className="leftAnnual">Standard Annual</p>
              <p className="leftAnnual">Premium Annual</p>
            </div>
            <div className="right-columnAnnual">
              <p className="rightAnnual">{blok.annual_price_top}</p>
              <p className="rightAnnual">{blok.annual_price_mid}</p>
              <p className="rightAnnual">{blok.annual_price_last}</p>
            </div>
          </div>
        </div>
      </div> 
    </div>
);


export default prices_cardAnnual;
