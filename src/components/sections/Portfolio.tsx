import * as React from "react";

import Button from "../Button";
import { Link } from "gatsby";

const Portfolio = () => {
  const data = {
    tagText: "Portfolio",
    heading: "Latest Work",
    tabs: [
      { text: "Show All", value: 14 },
      { text: "Design", value: 6 },
      { text: "Branding", value: 4 },
      { text: "Illustration", value: 3 },
      { text: "Motion", value: 1 },
    ],
    tiles: [{ category: "Design", name: "SOFA" }],
    buttonText: "Explore more",
  };

  return (
    <section className="bg-purple pt-[92px]">
      <div className="wrapper flex flex-col items-center">
        <h2 className="h5">{data.tagText}</h2>
        <h3 className="h2 text-white mt-5">{data.heading}</h3>
        <ul className="flex gap-[60px] mt-[44px]">
          {data.tabs.map((item) => (
            <li key={item.text}>
              <Link
                to="#"
                className="text text-white opacity-[64%] relative inline-block hover:opacity-100"
              >
                {item.text}
                <span className="text-small inline-block text-white absolute top-0 right-0 -translate-y-[40%] translate-x-full">
                  {item.value}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="pt-[68px] gap-[30px] flex-wrap flex"></ul>
        <Button variant="secondary" dark className="mt-16">
          {data.buttonText}
        </Button>
      </div>
    </section>
  );
};

export default Portfolio;
