import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import Button from "./Button";

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
    <section className="max-w-[1216px] px-min mx-auto ">
      <div className="flex">
        <div>
          <StaticImage src="./../images/about.svg" alt="About visualization" />
        </div>
        <div>
          <h2 className="h5">{data.tagText}</h2>
          <h3 className="h2">{data.heading}</h3>
          <p className="text-big">{data.subtitle}</p>
          <p className="text">{data.paragraph}</p>
          <Button variant="secondary">{data.buttonText}</Button>
        </div>
      </div>
      <ul className="flex">
        {data.stats.map((stat) => (
          <li key={stat.description}>
            <h3>{stat.value}</h3>
            <p>{stat.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default aboutSection;
