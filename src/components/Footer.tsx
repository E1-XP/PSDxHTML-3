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
    <footer className="max-w-[1216px] px-min mx-auto">
      <div className="flex justify-between border-b border-sandyAccent">
        <h2 className="h4">{data.logoText}</h2>
        {data.columns.map((column) => (
          <section key={column.heading}>
            <h3 className="h5">{column.heading}</h3>
            <ul>
              {column.links.map((link) => (
                <li className="text" key={link.text}>
                  <Link to={link.to}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section>
          <ul className="flex gap-2">
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
      <div className="flex justify-between">
        <p className="text">{data.copyrightText}</p>
        <div>
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
