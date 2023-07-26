import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Select, {
  DropdownIndicatorProps,
  IndicatorSeparatorProps,
  components,
} from "react-select";

import Button from "../Button";
import Input from "../Input";
import PhoneIcon from "../icons/Phone";
import EmailIcon from "../icons/Email";
import CompassIcon from "../icons/Compass";

const Contact = () => {
  const data = {
    form: {
      heading: "Get In Touch",
      emailPlaceholder: "Your email",
      subject: {
        placeholder: "Subject",
        options: [
          { label: "New project", value: "New project" },
          { label: "Existing project", value: "Existing project" },
          { label: "Other", value: "Other" },
        ],
      },
      btnText: "Submit now",
      messagePlaceholder: "Message",
    },
    contactTiles: [
      {
        heading: "Phone",
        icon: PhoneIcon,
        text: "+1 (234) 567-89-00",
      },
      {
        heading: "Email",
        icon: EmailIcon,
        text: "info@agency.com",
      },
      {
        heading: "Address",
        icon: CompassIcon,
        text: "2247 Lunetta Street, TX 76301",
      },
    ],
  };

  return (
    <section className="pb-[128px] lg:pb-[130px]">
      <div className="lg:relative max-lg:flex max-lg:flex-col max-lg:gap-[65px]">
        <StaticImage
          src="./../../images/map.png"
          alt="map with location pin"
          className="pointer-events-none w-full max-lg:h-[791px] contact-map-position"
          placeholder="blurred"
       />
        <div className="wrapper lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:h-full w-full flex items-center max-lg:-order-1">
          <div className="bg-white rounded-md p-7 pb-12 lg:p-12 pt-[57px] w-full lg:w-[470px]">
            <form action="" className="flex flex-col items-start">
              <h3 className="h4">{data.form.heading}</h3>
              <Input
                type="email"
                placeholder={data.form.emailPlaceholder}
                className="mt-[23px] w-full"
              />
              <Input
                type="select"
                options={data.form.subject.options}
                placeholder={data.form.subject.placeholder}
                className="w-full mt-4"
              />
              <Input
                type="textarea"
                placeholder={data.form.messagePlaceholder}
                className="mt-4 w-full"
              />
              <Button className="mt-8 ml-auto">{data.form.btnText}</Button>
            </form>
          </div>
        </div>
      </div>
      <ul className="wrapper flex flex-col lg:flex-row mt-8 lg:mt-20">
        {data.contactTiles.map((item) => (
          <li
            key={item.heading}
            className="basis-1/3 max-lg:[&>div]:first-of-type:rounded-t-md max-lg:[&>div]:last-of-type:rounded-b-md max-lg:[&>div]:first-of-type:border-b-0 max-lg:[&>div]:last-of-type:border-t-0 lg:[&>div]:first-of-type:rounded-s-md lg:[&>div]:first-of-type:border-r-0 lg:[&>div]:last-of-type:rounded-e-md lg:[&>div]:last-of-type:border-l-0"
          >
            <div className="border border-sandyAccent pt-8 px-7 lg:px-12 py-[38px] h-full">
              <div className="flex gap-6 items-center">
                <span className="bg-orange h-16 w-16 rounded-full flex items-center justify-center">
                  <item.icon />
                </span>
                <h4 className="h5">{item.heading}</h4>
              </div>
              <p className="text-big mt-[26px]">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
