import { storyblokEditable } from "@storyblok/react/rsc";
import "../app/[locale]/globals.css";

const Header = ({ blok }) => (
  <div className="header-container" {...storyblokEditable(blok)}>
    <div className="header-content">
      {/* Logo */}
      <img
        className="logo"
        src={blok.logo.filename}
        alt={blok.logo.alt || "Logo"}
      />

      {/* Navigation */}
      <nav className="navigation">
        <ul className="navigation-list">
          {/* About Us */}
          <li>
            <a href="/about-us" className="nav-link">
              About Us
            </a>
          </li>

          {/* Services Dropdown */}
          <li className="dropdown">
            <a href="#" className="nav-link">
              Services
            </a>
            <div className="dropdown-menu">
              <a href="/service-1" className="dropdown-item">
                Service 1
              </a>
              <a href="/service-2" className="dropdown-item">
                Service 2
              </a>
              <a href="/service-3" className="dropdown-item">
                Service 3
              </a>
            </div>
          </li>

          {/* Pricing */}
          <li>
            <a href="/pricing" className="nav-link">
              Pricing
            </a>
          </li>

          {/* Training */}
          <li>
            <a href="/training" className="nav-link">
              Training
            </a>
          </li>
        </ul>
      </nav>

      {/* Contact Us */}
      <a href="/contact-us" className="contact-button">
        Contact Us
      </a>
    </div>
  </div>
);

export default Header;
