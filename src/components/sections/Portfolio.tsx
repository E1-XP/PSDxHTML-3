import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

import Button from "../Button";
import Input from "../Input";

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query getPortfolioImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          name: { regex: "/Portfolio/" }
        }
        sort: { name: ASC }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
        }
      }
    }
  `);

  const sectionData = {
    tagText: "Portfolio",
    heading: "Latest Work",
    tabs: [
      { label: "Show All", value: "Show All", count: 14 },
      { label: "Design", value: "Design", count: 6 },
      { label: "Branding", value: "Branding", count: 4 },
      { label: "Illustration", value: "Illustration", count: 3 },
      { label: "Motion", value: "Motion", count: 1 },
    ],
    tiles: [
      { category: "Design", name: "SOFA", image: "Portfolio (4)" },
      { category: "Branding", name: "KeyBoard", image: "Portfolio (1)" },
      { category: "illustration", name: "Work Media", image: "Portfolio (2)" },
      { category: "Motion", name: "DDDone", image: "Portfolio (3)" },
    ].map((img) => ({
      ...img,
      data: data.allFile.edges.find((edge) => img.image === edge.node.name)
        ?.node.childImageSharp.gatsbyImageData,
    })),
    buttonText: "Explore more",
    banner: {
      tagText: "Get Started",
      heading: "We Help Companies Move Faster",
      buttonText: "Contact Us",
    },
  };

  sectionData.tiles = sectionData.tiles.concat(sectionData.tiles);

  const [shownItems, setShownItems] = React.useState(4);

  return (
    <section className="bg-purple pt-[92px] pb-[70px]">
      <div className="wrapper flex flex-col items-center">
        <h2 className="h5">{sectionData.tagText}</h2>
        <h3 className="h2 text-white mt-[17px] md:mt-5">
          {sectionData.heading}
        </h3>
        <Input
          type="select"
          options={sectionData.tabs}
          className="md:hidden w-full mt-[35px]"
          defaultValue={sectionData.tabs[0]}
        />
        <ul className="gap-[60px] mt-12 md:mt-[44px] hidden md:flex">
          {sectionData.tabs.map((item) => (
            <li key={item.label}>
              <Link
                to="#"
                className="text text-white opacity-[64%] relative inline-block hover:opacity-100"
              >
                {item.label}
                <span className="text-small inline-block text-white absolute top-0 right-0 -translate-y-[40%] translate-x-full">
                  {item.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="pt-12 md:pt-[68px] gap-[30px] gap-y-8 flex-wrap flex max-w-full md:[&>*:nth-child(4n-3)]:basis-auto md:[&>*:nth-child(4n-3)]:grow-0 md:[&>*:nth-child(4n)]:basis-auto md:[&>*:nth-child(4n)]:grow-0">
          {sectionData.tiles.slice(0, shownItems).map((item, i) => (
            <li
              key={i}
              className="relative rounded-md overflow-hidden w-full lg:w-auto md:max-w-[calc(50%-15px)] md:basis-[calc(50%-15px)] md:grow lg:max-w-full"
            >
              <GatsbyImage
                image={item.data}
                alt={item.name}
                className="pointer-events-none !w-full md:w-auto"
              />
              <div className="absolute bottom-[51px] left-7 md:left-12 flex flex-col items-start gap-6">
                <span className="text bg-white rounded-[19px] px-4 pt-[5px] pb-[1px]">
                  {item.category}
                </span>
                <h4 className="h3 text-white">{item.name}</h4>
              </div>
            </li>
          ))}
        </ul>
        <Button
          variant="secondary"
          dark
          className="mt-12  md:mt-16"
          onClick={() => setShownItems(shownItems + 4)}
        >
          {sectionData.buttonText}
        </Button>
        <div className="bg-sandy h-[832px] sm:h-[336px] w-full mt-[144px] sm:mt-[192px] rounded-md relative flex flex-col sm:flex-row items-center">
          <StaticImage
            src="./../../images/icon.svg"
            alt="Unexpected gift vector art"
            className="absolute top-0 left-3 sm:left-[84px] -translate-y-1/2 pointer-events-none"
          />
          <div className="pt-[92px] sm:pb-[64px] ml-7 sm:ml-[100px] sm:max-w-[248px]">
            <h2 className="h5">{sectionData.banner.tagText}</h2>
            <h3 className="h4 mt-[13px]">{sectionData.banner.heading}</h3>
            <Button className="mt-[23px]">
              {sectionData.banner.buttonText}
            </Button>
          </div>
          <StaticImage
            src="./../../images/Vector.svg"
            alt="company progress illustration"
            className="pointer-events-none mt-9 sm:mt-0 mx-7 sm:ml-[68px] sm:mr-[38px] sm:hidden lg:block"
          />
          <StaticImage
            src="./../../images/Frame 1.png"
            alt="happy customer"
            className="pointer-events-none mt-9 sm:mt-0 absolute w-[230px] sm:w-auto sm:right-[5px] mr-[7vw] sm:mr-0 md:right-[83px] bottom-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
