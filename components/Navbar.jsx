import { storyblokEditable } from "@storyblok/react/rsc";
import "../app/[locale]/globals.css";

const Header = ({ blok }) => (
  <div className="blok-feature bg-DarkGreen shadow-md fixed w-full z-10">
    <div
      className="container mx-auto px-4 py-3 flex justify-between items-center"
      {...storyblokEditable(blok)}
    >
      {/* Logo */}
      <img
        className="h-10 w-auto"
        src={blok.logo.filename}
        alt={blok.logo.alt || "Logo"}
      />

      {/* Navigation */}
      <nav className="flex">
        <ul className="flex space-x-6 items-center bg-grey rounded-full px-6 py-2 ml-2">
          {/* About Us */}
          <li>
            <a
              href="/about-us"
              className="text-OffWhite px-4 py-2 hover:bg-DarkTeal rounded-full"
            >
              About Us
            </a>
          </li>

          {/* Services Dropdown */}
          <li className="relative group">
            <a
              href="#"
              className="text-OffWhite px-4 py-2 hover:bg-DarkTeal rounded-full"
            >
              Services
            </a>
            <div className="absolute hidden group-hover:block bg-LimeGreen shadow-lg py-2 mt-1 space-y-1 w-48">
              <a
                href="/service-1"
                className="block px-4 py-2 text-OffWhite hover:bg-LightLime"
              >
                Service 1
              </a>
              <a
                href="/service-2"
                className="block px-4 py-2 text-OffWhite hover:bg-LightLime"
              >
                Service 2
              </a>
              <a
                href="/service-3"
                className="block px-4 py-2 text-OffWhite hover:bg-LightLime"
              >
                Service 3
              </a>
            </div>
          </li>

          {/* Pricing */}
          <li>
            <a
              href="/pricing"
              className="text-OffWhite px-4 py-2 hover:bg-DarkTeal rounded-full"
            >
              Pricing
            </a>
          </li>

          {/* Training */}
          <li>
            <a
              href="/training"
              className="text-OffWhite px-4 py-2 hover:bg-DarkTeal rounded-full"
            >
              Training
            </a>
          </li>
        </ul>
      </nav>

      {/* Contact Us */}
      <a
        href="/contact-us"
        className="ml-4 px-4 py-2 rounded-full text-DarkGreen bg-Pink hover:bg-LimeGreen"
      >
        Contact Us
      </a>
    </div>
  </div>
);

export default Header;
