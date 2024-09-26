import { storyblokEditable } from "@storyblok/react/rsc";
import "../app/[locale]/globals.css";
import "../app/[locale]/contact.css";

const ContactForm = ({ blok }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Het formulier als FormData object ophalen
    const formData = new FormData(e.target);

    // Het object loggen om de waarden van het formulier te zien
    console.log('Form submitted:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Hier zou je de data kunnen versturen naar een backend API
  };

  return (
    <div className="contact-form" {...storyblokEditable(blok)}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="surname">Surname*</label>
          <input
            type="text"
            id="surname"
            name="surname"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="telephone">Telephone</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
