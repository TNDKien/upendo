import { storyblokEditable } from "@storyblok/react/rsc";
import "./Prices_cardMonthly.css";
import "./Prices_intro.css";

const Prices_cardMonthly = ({ blok }) => (
  <div className="prices_cardMonthly" {...storyblokEditable(blok)}>
    <div className="squareMonthly">
        <h2>Monthly plans</h2>
        <div className="square-tableMonthly">
           <div className="headerMonthly">
            <div className="left-columnMonthly">
              <p className="leftMonthly">Service</p>
            </div>
            <div className="right-columnMonthly">
              <p className="rightMonthly">Price</p>
            </div>
           </div> 
          <div className="tableMonthly">
            <div className="left-columnMonthly">
              <p className="leftMonthly">Basic</p>
              <p className="leftMonthly">Standard</p>
              <p className="leftMonthly">Premium</p>
            </div>
            <div className="right-columnMonthly">
              <p className="rightMonthly">{blok.monthly_price_top}</p>
              <p className="rightMonthly">{blok.monthly_price_mid}</p>
              <p className="rightMonthly">{blok.monthly_price_last}</p>
            </div>
          </div>
        </div>
      </div> 
    </div>
);


export default Prices_cardMonthly;