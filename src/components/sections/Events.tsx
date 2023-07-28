import * as React from "react";
import { Link } from "gatsby";
import format from "date-fns/format";

import Button from "../Button";
import ClockIcon from "../icons/Clock";
import SeparatorLine from "../Separator";

const Events = () => {
  const data = {
    tagText: "Events",
    heading: "Explore Future Conferences",
    buttonText: "Explore more",
    events: [
      {
        date: { start: 1635926400000, end: 1635948000000 },
        heading: "Design Weeks",
        paragraph:
          "Digital agency is a business you hire to outsource your digital.",
        linkText: "Explore now",
      },
      {
        date: { start: 1636977600000, end: 1637002800000 },
        heading: "Interior Design",
        paragraph: "Marketing efforts, instead of handling in-house.",
        linkText: "Explore now",
      },
      {
        date: { start: 1638435600000, end: 1638450000000 },
        heading: "The F design events",
        paragraph:
          "Provide your business with a variety of digital solutions to promote.",
        linkText: "Explore now",
      },
    ],
  };

  return (
    <section className="bg-purple pt-[70px] pb-[62px] md:pb-[70px] text-white">
      <div className="wrapper flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h2 className="h5">{data.tagText}</h2>
          <h3 className="h3 mt-[17px] md:mt-5 text-white text-center max-w-[428px]">
            {data.heading}
          </h3>
        </div>
        <ul className="mt-[35px] md:mt-16 grid grid-cols-1 gap-x-[30px] gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {data.events.map((item) => (
            <li key={item.heading}>
              <div className="border border-purpleGray rounded-md px-7 md:px-10 py-9 h-full flex flex-col">
                <div className="mb-9">
                  <p className="flex gap-3">
                    <span className="h1 text-white">
                      {format(item.date.start, "d")}{" "}
                    </span>
                    <span className="h4 text-white flex flex-col mt-[5px]">
                      <span>{format(item.date.start, "LLLL")}</span>{" "}
                      <span>{format(item.date.start, "y")}</span>
                    </span>
                  </p>
                  <p className="flex mt-2 gap-2 items-center text text-white">
                    <ClockIcon />
                    {format(item.date.start, "K:mm aaa")} -
                    {format(item.date.end, "K:mm aaa")}
                  </p>
                </div>
                <SeparatorLine className="!border-purpleGray" asComponent />
                <div className="mt-10 flex flex-col h-full">
                  <p className="h4 text-white">{item.heading}</p>
                  <p className="text text-white opacity-[0.64] mt-[19px]">
                    {item.paragraph}
                  </p>
                  <Link
                    to="#"
                    className="text text-white hover:opacity-[0.64] inline-block mt-auto pt-[26px]"
                  >
                    {item.linkText}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Button variant="secondary" dark className="mt-12 md:mt-16">
          {data.buttonText}
        </Button>
      </div>
    </section>
  );
};

export default Events;
