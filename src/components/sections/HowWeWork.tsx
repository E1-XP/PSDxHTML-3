import { Link } from "gatsby";
import * as React from "react";

const HowWeWork = () => {
  const data = {
    tagText: "How we work",
    heading: "Making Your Projects Look Awesome",
    paragraph:
      "Technical skills, design, business understanding, ability to put themselves in the merchant's shoes.",
    linkText: "Read More",
    features: [
      { value: "1", description: "Full service range including" },
      { value: "2", description: "Technical skills, design, business" },
      { value: "3", description: "Themselves in the merchant's" },
    ],
  };

  return (
    <section className="wrapper flex md:gap-[130px] flex-col md:flex-row pt-[94px] md:pt-[140px] pb-[71px] md:pb-[108px]">
      <div className="md:w-[42%]">
        <h2 className="h5">{data.tagText}</h2>
        <h3 className="h3 mt-[17px]">{data.heading}</h3>
        <p className="text mt-[15px] md:mt-[31px]">{data.paragraph}</p>
        <Link
          to="#"
          className="text mt-8 md:mt-7 hover:opacity-75 inline-block"
        >
          {data.linkText}
        </Link>
      </div>
      <div className="md:flex md:items-center md:w-1/2">
        <ul className="flex flex-col gap-8 mt-[72px] md:mt-16">
          {data.features.map((item) => (
            <li key={item.value} className="flex">
              <h4 className="flex items-center h4">
                <span className="block h1 min-w-[100px] ">{item.value}</span>{" "}
                {item.description}
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HowWeWork;
