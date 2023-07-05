import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import Button from "../Button";

const aboutSection = () => {
  const data = {
    tagText: "About",
    heading: "An Experience Design Agency",
    subtitle: "Provides a full service range",
    paragraph:
      "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.",
    buttonText: "About text",
    stats: [
      { value: "42%", description: "Years of experience" },
      { value: "73+", description: "Agency members" },
      { value: "5.000", description: "Projects complete" },
    ],
  };

  return (
    <section className="wrapper pt-[71px] md:pt-[101px] ">
      <div className="flex md:gap-8 xl:gap-[130px] pb-[112px] md:pb-[161px] justify-between flex-col md:flex-row">
        <div className="flex justify-center md:items-center md:w-1/2">
          <StaticImage src="./../../images/about.svg" alt="About Collage" />
        </div>
        <div className="pt-4 md:pt-[70px] md:w-[42%]">
          <h2 className="h5">{data.tagText}</h2>
          <h3 className="h3 lg:h2 mt-5">{data.heading}</h3>
          <p className="text-big mt-[26px]">{data.subtitle}</p>
          <p className="text mt-[18px]">{data.paragraph}</p>
          <Button variant="secondary" className="mt-[34px]">
            {data.buttonText}
          </Button>
        </div>
      </div>
      <ul className="flex flex-col md:flex-row w-full">
        {data.stats.map((stat) => (
          <li
            key={stat.description}
            className="border border-sandyAccent grow pl-12 pt-[45px] pb-[38px] flex flex-col gap-[13px] first-of-type:rounded-t-md last-of-type:rounded-b-md md:first-of-type:rounded-t-none md:last-of-type:rounded-b-none md:first-of-type:!rounded-l-md md:last-of-type:!rounded-r-md border-b-0 last-of-type:border-b md:border-b md:border-r-0 md:last-of-type:border-r"
          >
            <h3 className="h3">{stat.value}</h3>
            <p className="text-big">{stat.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default aboutSection;
