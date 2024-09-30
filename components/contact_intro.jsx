import { storyblokEditable } from "@storyblok/react/rsc";
import "../app/[locale]/globals.css";
import "../app/[locale]/contact.css";

const contact_intro = ({ blok }) => {
    // Replace only the word "today" with a span tag that has a custom CSS class
    const highlightedTitle = blok.contact_titel.replace(
      /today/i, // Search for the word "today", case insensitive
      '<span class="highlighted-word">today</span>'
    );
  
    return (
      <div className="contact-intro" {...storyblokEditable(blok)}>
        <p className="accent">{blok.contact_accent}</p>
        {/* Use dangerouslySetInnerHTML to render the highlighted text with the span tag */}
        <h2 className="title" dangerouslySetInnerHTML={{ __html: highlightedTitle }}></h2>
        <h2 className="paragraph">{blok.contact_paragraph}</h2>
        <a href={blok.linkedin.url}>
          <p className="link">LinkedIn</p>
        </a>
        <p className="contact">{blok.contact_contact}</p>
      </div>
    );
  };

export default contact_intro;
