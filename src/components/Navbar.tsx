import * as React from "react";
import { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Button from "./Button";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const menuItems = ["About", "Services", "Pricing", "Blog"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.preventDefault();

    const sectionName = e.currentTarget.textContent;
    const section = document.getElementById(sectionName?.toLowerCase());

    if (section) section.scrollIntoView({ behavior: "smooth" });
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`flex w-full wrapper py-4 justify-between items-center z-40 bg-purple ${
          isMenuOpen ? "max-lg:fixed" : ""
        }`}
      >
        <Link to="/" className="">
          <h1 className="flex gap-3.5 items-center h4 text-white z-50">
            <StaticImage
              src="../images/logo.svg"
              alt="Agency"
              className="pointer-events-none w-12 h-12"
              placeholder="blurred"
            />
            Agency
          </h1>
        </Link>
        <div
          className={`items-center fixed lg:static flex w-full transition gap-10 lg:gap-0 bg-purple flex-col lg:flex-row top-20 left-0 h-full lg:h-auto pt-[15vh] lg:pt-0 lg:justify-normal z-40 ${
            isMenuOpen
              ? "opacity-100"
              : "opacity-0 pointer-events-none lg:pointer-events-auto lg:opacity-100"
          }`}
        >
          <ul className="flex mx-auto w-1/2 justify-between gap-10 lg:gap-0 flex-col lg:flex-row text-center lg:text-left">
            {menuItems.map((item) => (
              <li
                className="text text-3xl lg:text-base text-white hover:opacity-75 transition"
                key={item}
              >
                <Link to={`#${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
          <Button variant="secondary" dark onClick={onMenuClick}>
            Contact
          </Button>
        </div>
        <Hamburger
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
          className="block lg:hidden z-50"
        />
      </nav>
      <div className={isMenuOpen ? "max-lg:h-20" : ""}></div>
    </>
  );
};

export default Navbar;
