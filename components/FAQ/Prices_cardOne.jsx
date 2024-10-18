import { storyblokEditable } from "@storyblok/react/rsc";
import "./Prices_cardOne.css";
import "./Prices_intro.css";

const prices_cardOne = ({ blok }) => (
  <div className="prices_cardOne" {...storyblokEditable(blok)}>
    <div className="squareOne">
        <h2>One-Time Service</h2>
        <div className="square-tableOne">
           <div className="headerOne">
            <div className="left-columnOne">
              <p className="leftOne">Service</p>
            </div>
            <div className="right-columnOne">
              <p className="rightOne">Price</p>
            </div>
           </div> 
          <div className="tableOne">
            <div className="left-columnOne">
              <p className="leftOne">GTM Configuration</p>
              <p className="leftOne">Dashboard Creation</p>
              <p className="leftOne">Data Analysis & Reporting</p>
              <p className="leftOne">Training</p>
            </div>
            <div className="right-columnOne">
              <p className="rightOne">{blok.oneTime_price_top}</p>
              <p className="rightOne">{blok.oneTime_price_second}</p>
              <p className="rightOne">{blok.oneTime_price_third}</p>
              <p className="rightOne">{blok.oneTime_price_last}</p>
            </div>
          </div>
        </div>
      </div> 
    </div>
);


export default prices_cardOne;
