import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Header = ({ blok }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <div className="header-container" {...storyblokEditable(blok)}>
      <div className="header-content">
        {/* Logo */}
        <a href="/home">
          <img
            className="logo"
            src={blok.logo.filename}
            alt={blok.logo.alt || "Logo"}
          />
        </a>

        {/* Navigation */}
        <nav className={`navigation ${menuOpen ? "menu-open" : "menu-closed"}`}>
          <ul className="navigation-list">
            {/* About Us */}
            <li>
              <a href="/aboutus" className="nav-link">
                About us
              </a>
            </li>
            {/* Services Dropdown */}
            <li className="dropdown">
              <button
                className="dropdown-button nav-link"
                onClick={toggleServices}
              >
                <span className="nav-link btnservice">
                  <div>Services</div>
                  <div className="plusmin">{servicesOpen ? "-" : "+"}</div>
                </span>{" "}
              </button>
              {servicesOpen && (
                <div className="dropdown-menu">
                  <a href="/configuration" className="dropdown-item">
                    Configuration
                    <img
                      className="dropdown-image"
                      src={blok.config_image.filename}
                      alt={blok.config_image.alt}
                    />
                    <p className="dropdown-text">
                      Together with you, we’ll identify your company’s goals and
                      visualize this data from start to finish.
                    </p>
                  </a>

                  <a href="/optimalisation" className="dropdown-item">
                    Optimization
                    <img
                      className="dropdown-image"
                      src={blok.optimalization_image.filename}
                      alt={blok.optimalization_image.alt}
                    />
                    <p className="dropdown-text">
                      We fine-tune your existing setup to fix errors and improve
                      data quality.
                    </p>
                  </a>

                  <a href="/visualisation" className="dropdown-item">
                    Visualization
                    <img
                      className="dropdown-image"
                      src={blok.visualization_image.filename}
                      alt={blok.visualization_image.alt}
                    />
                    <p className="dropdown-text">
                      We build custom dashboards that show your data in a clear
                      and easy way.
                    </p>
                  </a>

                  <a href="/analysis" className="dropdown-item">
                    Analysis
                    <img
                      className="dropdown-image"
                      src={blok.analysis_image.filename}
                      alt={blok.analysis_image.alt}
                    />
                    <p className="dropdown-text">
                      We dig into your data to find trends, fix problems, and
                      provide insights you can use.
                    </p>
                  </a>
                </div>
              )}
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
            <li className="mobile-cta-container">
              <article className="nav-link mobile-cta-text">
                <header className="green-text">
                  Reach Out, We’re Here for You
                </header>
                <p>Want to visualize your data, seamlessly</p>
                <a href="/contact" className="cta">
                  <p className="cta-text">Call us Today!</p>
                  <div className="cta-arrow">&rarr;</div>
                </a>
                <span className="green-text">Make an appointment</span>
              </article>
              <img
                className="cta_image"
                src={blok.cta_image.filename}
                alt={blok.cta_image.alt || "contact person of upendo"}
              />
            </li>
          </ul>
        </nav>

        {/* Contact Us */}
        <a href="/contact" className="contact-button">
          Contact Us
        </a>

        {/* Hamburger Menu Button for Mobile */}
        <button className="menu-button" onClick={toggleMenu}>
          <span className={`hamburger ${menuOpen ? "open" : ""}`}></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
