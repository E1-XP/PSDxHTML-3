import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const VideoReel = () => {
  const data = {
    tagText: "Video Reel",
    heading: "Unlock The Greatest Value Possible",
    paragraph:
      "Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.",
  };

  return (
    <section className="wrapper flex flex-col md:flex-row pt-[63px] md:pt-[127px] md:gap-8 xl:gap-[130px] pb-[41px] md:pb-[115px]">
      <div className="flex justify-center md:items-center md:w-1/2 relative">
        <StaticImage
          src="./../../images/video.png"
          alt="Video preview thumbnail"
          className="pointer-events-none"
        />
        <StaticImage
          src="./../../images/play.svg"
          alt="Video controls"
          className="!absolute top-1/2 -translate-y-1/2 cursor-pointer rounded-full rounded-full-all-children"
        />
      </div>
      <div className="pt-6 md:pt-0 md:flex md:flex-col md:justify-center md:w-[42%]">
        <h2 className="h5">{data.tagText}</h2>
        <h3 className="h3 mt-[17px]">{data.heading}</h3>
        <p className="text mt-4 md:mt-[28px]">{data.paragraph}</p>
      </div>
    </section>
  );
};

export default VideoReel;
