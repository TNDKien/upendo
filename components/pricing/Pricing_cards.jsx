import { storyblokEditable } from "@storyblok/react/rsc";
import Image from 'next/image';
import linerLeft from "./linerLeft.png";
import linerRight from "./linerRight.png";

const pricing_cards = ({ blok }) => (
  <div className="pricing_cards" {...storyblokEditable(blok)}>
    <div className="cardOne">
      <h3 className="card_titleOne">{blok.card_titleOne}</h3>
      <span className="card_numberOne">{'{1}'}</span>
      <img
        className="card_imgOne"
        src={blok.card_imgOne?.filename} 
        alt={blok.card_imgOne?.alt || "Card One Image"} 
      />
      <p className="card_paragraphOne">{blok.card_paragraphOne}</p>
      <a href="/link-to-page-one" className="card_linkOne">
        &gt;
      </a>
      <div>
        <Image
          className="liner_left"
          src={linerLeft}
          alt="Liner Left Image"
        />
      </div>
    </div>

    <div className="cardMonthly">
      <h3 className="card_titleMonthly">{blok.card_titleMonthly}</h3>
      <span className="card_numberMonthly">{'{2}'}</span>
      <img
        className="card_imgMonthly"
        src={blok.card_imgMonthly?.filename}
        alt={blok.card_imgMonthly?.alt || "Card Monthly Image"} 
      />
      <p className="card_paragraphMonthly">{blok.card_paragraphMonthly}</p>
      <a href="/link-to-page-one" className="card_linkMonthly">
        &gt;
      </a>
      <div>
        <Image
          className="liner_right"
          src={linerRight}
          alt="Liner right Image"
        />
      </div>
    </div>

    <div className="cardAnnual">
      <h3 className="card_titleAnnual">{blok.card_titleAnnual}</h3>
      <span className="card_numberAnnual">{'{3}'}</span>
      <img
        className="card_imgAnnual"
        src={blok.card_imgAnnual?.filename}
        alt={blok.card_imgAnnual?.alt || "Card Monthly Image"} 
      />
      <p className="card_paragraphAnnual">{blok.card_paragraphAnnual}</p>
      <a href="/link-to-page-one" className="card_linkAnnual">
        &gt;
      </a>
      <div>
        <Image
          className="liner_left"
          src={linerLeft}
          alt="Liner Left Image"
        />
      </div>
    </div>
  </div>
);

export default pricing_cards;
