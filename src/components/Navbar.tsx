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
    <nav className="flex max-w-[1216px] mx-auto px-min py-4 justify-between items-center">
      <h1 className="flex h4 text-white gap-3.5 items-center">
        <StaticImage
          src="../images/logo.svg"
          alt="Agency"
          className="pointer-events-none"
        />
        Agency
      </h1>
      <div className="items-center hidden lg:flex">
        <ul className="flex">
          {menuItems.map((item) => (
            <li className="text text-white" key={item}>
              <Link to={item}>{item}</Link>
            </li>
          ))}
        </ul>
        <Button variant="outline" dark>
          Contact
        </Button>
      </div>
      <Hamburger
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        className="block lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
