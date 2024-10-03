import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./Pricing.css";

const pricing_services = ({ blok }) => (
  <div className="pricing_services" {...storyblokEditable(blok)}>
    <div className="service_title">
            {render(blok.service_title)}
    </div>
    <p className="service_paragraph">{blok.service_paragraph}</p>

    <div className="circle-text-container">
      <div className="circle-text-item">
        <span className="circle1">&#11044;</span>
        <p className="text1">{blok.text1}</p>
      </div>

      <div className="circle-text-item">
        <span className="circle2">&#11044;</span>
        <p className="text2">{blok.text2}</p>
      </div>

      <div className="circle-text-item">
        <span className="circle3">&#11044;</span>
        <p className="text3">{blok.text3}</p>
      </div>

      <div className="circle-text-item">
        <span className="circle4">&#11044;</span>
        <p className="text4">{blok.text4}</p>
      </div>
    </div>

    <a href="/target-page" className="see-more-button">
    <span className="button-text">See More</span>
    <span className="button-arrow">&#8594;</span>
  </a>

    <hr className="divider" />
  </div>
);


export default pricing_services;
