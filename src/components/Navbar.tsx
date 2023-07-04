import * as React from "react";
import { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Button from "./Button";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const menuItems = ["About", "Services", "Pricing", "Blog"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex w-full wrapper py-4 justify-between items-center">
      <h1 className="flex h4 text-white gap-3.5 items-center z-50">
        <StaticImage
          src="../images/logo.svg"
          alt="Agency"
          className="pointer-events-none w-12 h-12"
        />
        Agency
      </h1>
      <div
        className={`items-center fixed lg:static flex w-full transition gap-10 lg:gap-0 bg-purple flex-col lg:flex-row top-20 left-0 h-full lg:h-auto pt-[15vh] lg:pt-0 lg:justify-normal z-40 ${
          isMenuOpen ? "opacity-100" : "opacity-0 lg:opacity-100"
        }`}
      >
        <ul className="flex mx-auto w-1/2 justify-between gap-10 lg:gap-0 flex-col lg:flex-row text-center lg:text-left">
          {menuItems.map((item) => (
            <li
              className="text text-3xl lg:text-base text-white hover:opacity-75 transition"
              key={item}
            >
              <Link to={item}>{item}</Link>
            </li>
          ))}
        </ul>
        <Button variant="secondary" dark>
          Contact
        </Button>
      </div>
      <Hamburger
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        className="block lg:hidden z-50"
      />
    </nav>
  );
};

export default Navbar;
