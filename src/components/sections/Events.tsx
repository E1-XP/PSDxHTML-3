import * as React from "react";

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
        date: { day: 3, month: 11, year: 2021, start: 9, end: 15 },
        heading: "Design Weeks",
        paragraph:
          "Digital agency is a business you hire to outsource your digital.",
        linkText: "Explore now",
      },
      {
        date: { day: 15, month: 11, year: 2021, start: 13, end: 20 },
        heading: "Interior Design",
        paragraph: "Marketing efforts, instead of handling in-house.",
        linkText: "Explore now",
      },
      {
        date: { day: 2, month: 12, year: 2021, start: 10, end: 14 },
        heading: "The F design events",
        paragraph:
          "Provide your business with a variety of digital solutions to promote.",
        linkText: "Explore now",
      },
    ],
  };

  return (
    <section className="bg-purple pb-[62px] text-white">
      <div className="wrapper flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h2 className="h5">{data.tagText}</h2>
          <h3 className="h3 mt-[17px] text-white text-center">
            {data.heading}
          </h3>
        </div>
        <ul className="mt-[35px] flex flex-col gap-8 flex-wrap">
          {data.events.map((item) => (
            <li key={item.heading}>
              <div className="border border-purpleGray rounded-md">
                <div>
                  <h3>
                    <span className="h1 text-white">{item.date.day}</span>
                    <span className="h4 text-white flex flex-col">
                      {item.date.month} {item.date.year}
                    </span>
                  </h3>
                  <p className="flex">
                    <ClockIcon />
                    {item.date.start} - {item.date.end}
                  </p>
                </div>
                <SeparatorLine
                  className="border-purpleGray"
                  wrapperClassName="px-7"
                />
                <div>
                  <h3 className="h4 text-white">{item.heading}</h3>
                  <p>{item.paragraph}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Button variant="secondary" dark className="pt-12">
          {data.buttonText}
        </Button>
      </div>
    </section>
  );
};

export default Events;
