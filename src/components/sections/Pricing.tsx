import * as React from "react";

import PlusIcon from "../icons/Plus";
import MinusIcon from "../icons/Minus";
import Button from "../Button";

const Pricing = () => {
  const data = {
    tagText: "Pricing",
    heading: "Check Our Pricing Plans",
    plans: [
      {
        tagText: "Consultation",
        price: "Free",
        paragraph:
          "Your digital marketing efforts, instead of handling in-house.",
        features: [
          { included: true, text: "Brand Design" },
          { included: false, text: "Market Analysis" },
          { included: false, text: "Production" },
        ],
        buttonText: "Contact Us",
      },
      {
        badge: "Popular",
        tagText: "Design",
        price: "$1500",
        paragraph:
          "Provide your business with a variety of digital solutions to promote.",
        features: [
          { included: true, text: "Brand Design" },
          { included: true, text: "Market Analysis" },
          { included: false, text: "Production" },
        ],
        buttonText: "Contact Us",
      },
      {
        tagText: "Design+Code",
        price: "$2900",
        paragraph: "Help you hit your marketing goals and grow your business.",
        features: [
          { included: true, text: "Brand Design" },
          { included: true, text: "Market Analysis" },
          { included: true, text: "Production" },
        ],
        buttonText: "Contact Us",
      },
    ],
  };

  return (
    <section id="pricing" className="wrapper pt-[62px] md:pt-[54px] pb-[46px] md:pb-[78px]">
      <div>
        <h2 className="h5">{data.tagText}</h2>
        <h3 className="h3 lg:h2 max-w-[358px] mt-[17px] lg:mt-5">
          {data.heading}
        </h3>
      </div>
      <ul className="mt-[35px] lg:mt-4 flex flex-col lg:flex-row items-center lg:items-end">
        {data.plans.map((item, i) => (
          <li
            key={item.tagText}
            className="max-lg:w-full lg:basis-1/3 lg:[&>div]:first-of-type:rounded-s-md lg:[&>div]:last-of-type:rounded-e-md lg:[&>div]:first-of-type:border-r-0 lg:[&>div]:last-of-type:border-l-0 max-lg:[&>div]:last-of-type:border-b max-lg:[&>div]:first-of-type:rounded-t-md max-lg:[&>div]:last-of-type:rounded-b-md"
          >
            <div
              className={`border border-sandyAccent p-12 transition max-lg:border-b-0 ${
                i === 1 ? "bg-white lg:rounded-t-md" : ""
              } ${item.badge ? "pt-8" : ""}`}
            >
              {item.badge && (
                <span className="bg-orange text text-white rounded-[19px] pl-[17px] pr-[15px] pt-[4px] pb-[2px] inline-block -ml-[8px] mb-[22px]">
                  {item.badge}
                </span>
              )}
              <p className="h5">{item.tagText}</p>
              <p className="h3 max-w-[358px] mt-[17px]">{item.price}</p>
              <p className="text mt-[15px]">{item.paragraph}</p>
              <ul className="mt-[27px] flex flex-col gap-4">
                {item.features.map((itm) => (
                  <li key={itm.text} className="text flex items-center gap-4">
                    <span>{itm.included ? <PlusIcon /> : <MinusIcon />}</span>
                    <span
                      className={`text ${itm.included ? "" : "opacity-[0.64]"}`}
                    >
                      {itm.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                variant={i === 1 ? "primary" : "secondary"}
                className="mt-9"
              >
                {item.buttonText}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Pricing;
