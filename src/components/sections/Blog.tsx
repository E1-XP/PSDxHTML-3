import * as React from "react";
import format from "date-fns/format";

import Button from "../Button";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query getBlogImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          name: { regex: "/Blog/" }
        }
        sort: { name: ASC }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const sectionData = {
    tagText: "Our Blog",
    heading: "Latest Blog Articles",
    buttonText: "Discover All",
    entries: [
      {
        tagText: "Stories",
        heading: "Agency is a business you hire to outsource",
        date: 1636127801000,
        imgName: "Blog 8",
      },
      {
        tagText: "Design",
        heading: "Outsource your digital marketing efforts",
        date: 1635523001000,
        imgName: "Blog 9",
      },
      {
        tagText: "Marketing",
        heading: "Your business with a variety of digital",
        date: 1634831801000,
        imgName: "Blog 10",
      },
    ].map((img) => ({
      ...img,
      data: data.allFile.edges.find((edge) => img.imgName === edge.node.name)
        ?.node.childImageSharp.gatsbyImageData,
    })),
  };

  return (
    <section className="wrapper pt-[48px] md:pt-[56px] pb-[52px] md:pb-[68px]">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between">
        <div>
          <h2 className="h5">{sectionData.tagText}</h2>
          <h3 className="h3 lg:h2 max-w-[318px] mt-[17px] md:mt-5">
            {sectionData.heading}
          </h3>
        </div>
        <Button variant="secondary" className="md:mb-4 mt-[35px] md:mt-0">
          {sectionData.buttonText}
        </Button>
      </div>
      <ul className="md:mt-16 mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[52px] md:gap-[30px]">
        {sectionData.entries.map((item) => (
          <li key={item.heading} className="">
            <GatsbyImage
              image={item.data}
              alt={item.heading}
              className="pointer-events-none"
            />
            <h4 className="text-big mt-[26px]">{item.tagText}</h4>
            <h5 className="h4 mt-[15px]">{item.heading}</h5>
            <span className="text block mt-[15px]">
              {format(item.date, "d MMM, yyyy")}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blog;
