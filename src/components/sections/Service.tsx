import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Link } from "gatsby";

import Button from "../Button";
import PresentationIcon from "../icons/Presentation";
import WorkIcon from "./../icons/Work";
import CogIcon from "./../icons/Cog";

const Service = () => {
  const data = {
    section1: {
      tagText: "Service",
      heading: "Making Complex Digital Products",
      paragraph:
        "Agency provides a full service range including technical skills, design, business.",
      quoteText: `"Understanding, ability to put themselves in the merchant's shoes. It is meant to partner."`,
      quoteAuthor: "Jenny Murtaugh",
      buttonText: "Explore",
    },
    section2: {
      tagText: "Service",
      heading: "How Our Agency Can Help",
      services: [
        {
          icon: PresentationIcon,
          title: "Design",
          paragraph:
            "Agency provides a full service range including technical skills, design.",
          linkText: "Learn More",
        },
        {
          icon: WorkIcon,
          title: "Development",
          paragraph:
            "Full service range including technical skills, design, business.",
          linkText: "Discover More",
        },
        {
          icon: CogIcon,
          title: "Marketing",
          paragraph:
            "Technical skills, design, business understanding, ability.",
          linkText: "Explore Now",
        },
      ],
    },
  };

  return (
    <section
      id="services"
      className="wrapper pt-[56px] md:pt-[80px] flex flex-col gap-[124px] md:gap-[141px] pb-[114px] md:pb-32"
    >
      <div className="flex flex-col md:flex-row gap-1.5 md:gap-16 lg:gap-[120px]">
        <div className="flex justify-center md:items-center md:basis-1/2 -order-1">
          <StaticImage
            src="./../../images/service.svg"
            alt="Service collage"
            className="pointer-events-none"
            placeholder="blurred"
          />
        </div>
        <div className="md:pt-[41px] md:basis-[42%]">
          <h2 className="h5">{data.section1.tagText}</h2>
          <h3 className="h3 xl:h2 mt-[17px] md:mt-5">
            {data.section1.heading}
          </h3>
          <p className="text-big mt-[13px] md:mt-[26px]">
            {data.section1.paragraph}
          </p>
          <div className="flex gap-5 mt-6 md:mt-[31px] max-w-[406px]">
            <div className="bg-yellow rounded-full w-16 h-16 flex shrink-0 items-end justify-center">
              <StaticImage
                src="./../../images/serviceQuote.png"
                alt={data.section1.quoteAuthor}
                className="pointer-events-none"
                placeholder="blurred"
              />
            </div>
            <div className="flex flex-col justify-between gap-y-3">
              <p className="text-small mt-1.5">{data.section1.quoteText}</p>
              <span className="text lg:leading-none">
                {data.section1.quoteAuthor}
              </span>
            </div>
          </div>
          <Button variant="secondary" className="mt-5 sm:mt-[36px]">
            {data.section1.buttonText}
          </Button>
        </div>
      </div>
      <div>
        <div>
          <h2 className="h5">{data.section2.tagText}</h2>
          <h3 className="h3 mt-[17px] max-w-[14ch]">{data.section2.heading}</h3>
        </div>
        <ul className="flex flex-col md:flex-row mt-[35px]">
          {data.section2.services.map((item) => (
            <li
              key={item.title}
              className="md:basis-1/3 md:w-1/3 flex flex-col p-12 px-7 md:px-12 md:p-8 lg:p-12 pb-[51px] md:pb-8 lg:pb-[52px] border border-sandyAccent first-of-type:rounded-t-md last-of-type:rounded-b-md md:first-of-type:rounded-t-none md:last-of-type:rounded-b-none md:first-of-type:!rounded-l-md md:last-of-type:!rounded-r-md border-b-0 last-of-type:border-b md:border-b md:border-r-0 md:last-of-type:border-r"
            >
              <div className="h-20 w-20 bg-orange rounded-full flex items-center justify-center">
                <item.icon />
              </div>
              <h4 className="h4 pt-[41px]">{item.title}</h4>
              <p className="text pt-[19px]">{item.paragraph}</p>
              <Link
                to="#"
                className="text hover:opacity-75 pt-4 md:pt-[26px] inline-block mt-auto"
              >
                {item.linkText}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
