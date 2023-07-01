import * as React from "react";
import { Link } from "gatsby";

import FacebookIcon from "./icons/Facebook";
import TwitterIcon from "./icons/Twitter";
import InstagramIcon from "./icons/Instagram";

const Footer = () => {
  const data = {
    logoText: "Agency",
    columns: [
      {
        heading: "Menu",
        links: [
          { text: "About", to: "#" },
          { text: "Services", to: "#" },
          { text: "Blog", to: "#" },
          { text: "Contact", to: "#" },
        ],
      },
      {
        heading: "Service",
        links: [
          { text: "Design", to: "#" },
          { text: "Development", to: "#" },
          { text: "Marketing", to: "#" },
          { text: "See more", to: "#" },
        ],
      },
    ],
    social: [
      { text: "Facebook", icon: FacebookIcon },
      { text: "Twitter", icon: TwitterIcon },
      { text: "Instagram", icon: InstagramIcon },
    ],
    copyrightText: "Copyright © 2022 Laaqiq. All Rights Reserved.",
    links: [
      { text: "Terms of use", to: "#" },
      { text: "Privacy policy", to: "#" },
    ],
  };

  return (
    <footer className="max-w-[1216px] px-min mx-auto pt-[121px] md:pt-[90px] pb-9 md:pb-14">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-[50px] md:gap-0 border-b border-sandyAccent pb-16 md:pb-[68px]">
        <h2 className="h4">{data.logoText}</h2>
        {data.columns.map((column) => (
          <section key={column.heading}>
            <h3 className="h5 mb-4 text-center md:text-start">
              {column.heading}
            </h3>
            <ul className="text-center md:text-start">
              {column.links.map((link) => (
                <li className="text" key={link.text}>
                  <Link to={link.to}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section>
          <ul className="flex gap-2 md:-mt-2.5">
            {data.social.map((link) => (
              <li
                className="h-12 w-12 bg-orange rounded-full text-white flex items-center justify-center"
                key={link.text}
              >
                {<link.icon className="h-[18px] w-[18px]" />}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-11 gap-8 md:gap-0">
        <p className="text opacity-[64%] text-center md:text-start">
          {data.copyrightText}
        </p>
        <div className="flex gap-[68px]">
          {data.links.map((link) => (
            <Link className="text" to={link.to} key={link.text}>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
