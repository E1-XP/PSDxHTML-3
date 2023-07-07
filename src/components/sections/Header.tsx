import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Navbar from "../Navbar";
import Button from "../Button";

const Header = () => {
  const data = {
    tagText: "Modern studio",
    heading: `We’re Help\nTo Build Your Dream Project`,
    subtitle:
      "Agency provides a full service range including technical skills, design, business understanding.",

    buttonText: "How we work",
    helperText: "Contact Us",

    quoteText: `"Put themselves in the merchant's shoes"`,
    quoteAuthor: "Meta Inc.",
    reviewAltText: "Reviewer from Meta Inc. company",
  };

  return (
    <header className="bg-purple min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col md:flex-row wrapper grow gap-4">
        <div className="md:w-1/2 flex items-start lg:items-center md:mt-[100px] lg:mt-0 justify-center">
          <StaticImage
            src="./../../images/pic.svg"
            alt="Workflow illustration"
            className="pointer-events-none"
          />
        </div>
        <div className="md:w-1/2 md:-order-1 flex flex-col gap-5 md:gap-6 mt-4 md:mt-[108px]">
          <p className="h5">{data.tagText}</p>
          <h2 className="h2 lg:h1 whitespace-pre-wrap !text-white  before:lg:content-[url('./../images/Star.svg')] relative before:absolute z-[1] before:-z-[1] before:left-[278px] before:-top-[31px]">
            {data.heading.replace("<br/>", "\n")}
          </h2>
          <p className="text text-white opacity-[64%] -mt-2 lg:mt-0">
            {data.subtitle}
          </p>
          <div className="flex items-center gap-[46px] mt-2.5">
            <Button>{data.buttonText}</Button>
            <Link
              to="#"
              className="text text-white transition hover:opacity-75"
            >
              {data.helperText}
            </Link>
          </div>
          <div className="flex md:mt-auto mt-7 mb-8 md:mb-16 gap-4">
            <div className="bg-magenta rounded-full w-12 h-12 flex shrink-0 items-end justify-center">
              <StaticImage
                src="./../../images/Bitmap.png"
                alt={data.reviewAltText}
                className="pointer-events-none"
              />
            </div>
            <div className="flex flex-col justify-between">
              <p className="text lg:leading-none text-white opacity-[64%]">
                {data.quoteText}
              </p>
              <span className="text lg:leading-none text-white">
                {data.quoteAuthor}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
