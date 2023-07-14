import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const FounderWords = () => {
  const data = {
    tagText: "Founder Words",
    heading:
      "Digital agency is a business you hire to outsource your digital marketing efforts",
    author: "Ren Delan",
    occupation: "Founder",
  };

  return (
    <section className="bg-purple">
      <div className="wrapper flex flex-col md:flex-row md:gap-8 xl:gap-[130px] pt-[90px] pb-[176px]">
        <div className="flex justify-center md:items-center md:w-1/2">
          <StaticImage
            src={"./../../images/founder.png"}
            alt={data.author}
            className="pointer-events-none"
          />
        </div>
        <div className="md:w-[42%] relative">
          <StaticImage
            src={"./../../images/quotes.svg"}
            alt="quote marks"
            className="pointer-events-none absolute top-0 right-[46px]"
          />
          <h2 className="h5">{data.tagText}</h2>
          <h3 className="h4 lg:h3 !text-white pt-[33px]">{data.heading}</h3>
          <p className="text-big text-white pt-[44px]">{data.author}</p>
          <p className="text-small text-white opacity-[0.64] pt-1.5">
            {data.occupation}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderWords;
