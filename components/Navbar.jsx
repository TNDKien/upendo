import { storyblokEditable } from "@storyblok/react/rsc";

const Header = ({ blok }) => (
  <div className="blok-feature" {...storyblokEditable(blok)}>
    <img
      className="nav"
      src={blok.logo.filename}
      alt={blok.logo.alt || "Logo"}
    />
    <nav className="nav">
      <ul>
        <li>
          <a href="/about-us">About Us</a>
        </li>
        <li className="dropdown">
          <a href="#">Services</a>
          <div className="dropdown-content">
            <a href="/service-1">Service 1</a>
            <a href="/service-2">Service 2</a>
            <a href="/service-3">Service 3</a>
          </div>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/contact-us">Contact Us</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
