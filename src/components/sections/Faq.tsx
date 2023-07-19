import { Link } from "gatsby";
import * as React from "react";

import Accordion from "../Accordion";

const FAQ = () => {
  const data = {
    tagText: "FAQ",
    heading: "Frequently Asked Questions",
    paragraph:
      "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.",
    linkText: "Contact Us",
    accordion: [
      {
        title: "A digital agency is a business",
        text: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
      },
      {
        title: "Hire to outsource your digital",
        text: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
      },
      {
        title: "Marketing efforts",
        text: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
      },
      {
        title: "Can provide your business",
        text: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
      },
    ],
  };

  return (
    <section className="wrapper flex flex-col lg:flex-row pt-[46px] md:pt-[78px] gap-9 md:gap-8 xl:gap-[130px] pb-[46px] md:pb-[78px]">
      <div className="basis-[45%]">
        <h2 className="h5">{data.tagText}</h2>
        <h3 className="h3 max-w-[371px] mt-[17px]">{data.heading}</h3>
        <p className="text opacity-[0.64] mt-[15px] md:mt-[31px]">{data.paragraph}</p>
        <Link to="#" className="mt-8 md:mt-[29px] block hover:opacity-75">{data.linkText}</Link>
      </div>
      <div className="basis-[54.5%]">
        <Accordion data={data.accordion} />
      </div>
    </section>
  );
};

export default FAQ;
