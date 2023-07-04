import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

const CompanyList = () => {
  const data = useStaticQuery(graphql`
    query getCompanyImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          name: { regex: "/Company/" }
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

  const imgData = [
    {
      image: "Company (5)",
      name: "DigitalSide",
    },
    {
      image: "Company (1)",
      name: "Vortex",
    },
    {
      image: "Company (2)",
      name: "Travel Explorer",
    },
    {
      image: "Company (3)",
      name: "Fuzion",
    },
    {
      image: "Company (4)",
      name: "Media Fury",
    },
  ].map((img) => ({
    ...img,
    data: data.allFile.edges.find((edge) => img.image === edge.node.name)?.node
      .childImageSharp.gatsbyImageData,
  }));

  return (
    <div className="max-w-[1216px] px-min mx-auto pt-[50px] md:pt-[72px] flex flex-col gap-[50px] md:gap-[72px]">
      <ul className="flex items-center justify-center md:justify-between flex-wrap gap-y-8">
        {imgData.map((company) => (
          <li
            key={company.name}
            className="flex justify-center basis-full min-[350px]:basis-1/2 md:basis-auto md:w-auto"
          >
            <GatsbyImage
              image={company.data}
              alt={company.name}
              className="pointer-events-none"
            />
          </li>
        ))}
      </ul>
      <div className="border-b border-sandyAccent"></div>
    </div>
  );
};

export default CompanyList;
