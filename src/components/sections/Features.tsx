import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Link } from "gatsby";

import CheckmarkIcon from "../icons/Checkmark";
import PocketKnifeIcon from "../icons/PocketKnife";

const Features = () => {
  const data = {
    section1: {
      tagText: "Features",
      heading: "Give Your Site A New Look",
      paragraph:
        "Service range including technical skills, design, business understanding.",
      features: [
        { description: "Range including technical skills" },
        { description: "Business understanding" },
        { description: "Partner on the long run" },
      ],
    },
    section2: {
      tagText: "Features",
      paragraph: "Long run, and work as an extension of the merchant's team.",
      linkText: "Read More",
      features: [
        {
          icon: true,
          heading: "Professional",
          description: "Full service range including technical skills, design.",
        },
        {
          heading: "Accessibility",
          description: "Business understanding, ability to put themselves.",
        },
      ],
    },
  };

  return (
    <section className="wrapper flex flex-col gap-[130px] md:gap-[202px] pb-[56px] md:pb-[81px] ">
      <div className="flex gap-1 md:gap-8 xl:gap-[130px] justify-between flex-col md:flex-row pt-[40px] md:pt-[100px]">
        <div className="flex justify-center md:items-center md:w-1/2">
          <StaticImage
            src="./../../images/features.svg"
            alt="Features Collage"
            className="pointer-events-none"
            placeholder="blurred"
          />
        </div>
        <div className="md:pt-[70px] md:w-[42%] md:-order-1">
          <h2 className="h5">{data.section1.tagText}</h2>
          <h3 className="h3 lg:h2 mt-[17px] md:mt-5">
            {data.section1.heading}
          </h3>
          <p className="text-big mt-[13px] md:mt-[26px]">
            {data.section1.paragraph}
          </p>
          <ul className="flex flex-col gap-4 pt-[30px] md:pt-6">
            {data.section1.features.map((item) => (
              <li key={item.description} className="flex items-center gap-4">
                <span className="h-8 w-8 bg-orange rounded-full text-white flex items-center justify-center">
                  <CheckmarkIcon />
                </span>
                <p className="text">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-9 md:gap-8 xl:gap-[130px]">
        <div className="flex flex-col justify-center">
          <h2 className="h5">{data.section2.tagText}</h2>
          <p className="text-big mt-[30px]">{data.section2.paragraph}</p>
          <Link to="#" className="text hover:opacity-75 mt-8 md:mt-[28px] inline-block">
            {data.section2.linkText}
          </Link>
        </div>
        <div>
          <ul className="flex flex-col md:flex-row">
            {data.section2.features.map((item) => (
              <li
                key={item.heading}
                className="basis-1/2 first-of-type:bg-white last-of-type:md:mt-16 p-12 md:p-8 lg:p-12 pb-[46px] md:pb-8 lg:pb-[46px] [&>h3]:last-of-type:pt-[57px] border border-sandyAccent rounded-md last-of-type:rounded-t-none md:last-of-type:rounded-tl-none first-of-type:rounded-bl-none md:first-of-type:rounded-bl-md md:last-of-type:rounded-t-md md:last-of-type:rounded-l-none last-of-type:border-t-0 md:last-of-type:border-t last-of-type:md:border-l-0 first-of-type:rounded-br-none"
              >
                {item.icon && (
                  <div className="h-20 w-20 bg-orange rounded-full flex items-center justify-center">
                    <PocketKnifeIcon />
                  </div>
                )}
                <p className="h4 pt-[41px]">{item.heading}</p>
                <p className="text pt-[19px]">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
