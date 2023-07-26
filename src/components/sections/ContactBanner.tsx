import * as React from "react";
import Button from "../Button";
import { StaticImage } from "gatsby-plugin-image";

const ContactBanner = () => {
  const data = {
    heading: "We’re Help To Build Your Dream Project",
    paragraph:
      "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.",
    buttonText: "Contact Us",
  };

  return (
    <section className="wrapper">
      <div className=" bg-orange rounded-md flex flex-col min-[875px]:flex-row pt-8 min-[875px]:pt-[38px] pb-12 min-[875px]:pb-[72px] px-7 min-[875px]:justify-center lg:gap-[86px]">
        <div className="basis-[42.2%]">
          <h3 className="h3 min-[875px]:h2 !text-white mt-[37px] min-[875px]:mt-14">{data.heading}</h3>
          <p className="text text-white opacity-[0.64] mt-[15px]  min-[875px]:mt-7">
            {data.paragraph}
          </p>
          <Button variant="secondary" className="mt-[21px]  min-[875px]:mt-[34px]">
            {data.buttonText}
          </Button>
        </div>
        <div className="self-center max-[875px]:-order-1">
          <StaticImage
            src="./../../images/banner.png"
            alt="contact us collage"
            className="pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
