import * as React from "react";

import Button from "../Button";
import Input from "../Input";

const Newsletter = () => {
  const data = {
    heading: "Newsletter",
    inputPlaceholder: "Your email",
    btnText: "Subscribe",
  };

  return (
    <section className="wrapper pt-[76px] md:pt-[63px] pb-[128px] md:pb-[113px]">
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-[30px]">
        <h2 className="h3">{data.heading}</h2>
        <Input
          label="newsletter"
          placeholder={data.inputPlaceholder}
          className="ml-auto w-[370px] max-md:w-full max-md:mt-[35px]"
        />
        <Button variant="secondary" className="max-md:w-full max-md:mt-4">
          {data.btnText}
        </Button>
      </div>
    </section>
  );
};

export default Newsletter;
