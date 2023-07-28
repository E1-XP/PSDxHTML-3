import { Link, graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import format from "date-fns/format";

import SeparatorLine from "../Separator";

const Awards = () => {
  const data = useStaticQuery(graphql`
    query getAwardsImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          name: { regex: "/Award/" }
        }
        sort: { name: ASC }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(layout: FIXED, placeholder: BLURRED)
            }
            publicURL
          }
        }
      }
    }
  `);

  const sectionData = {
    heading: "Our Awards",
    awards: [
      {
        projectImgName: "Awards 2",
        projectName: "SOFA",
        date: 1635176632000,
        organization: "Awwwards",
        organizationImgName: "Awards 5",
      },
      {
        projectImgName: "Awards 3",
        projectName: "KeyBoard",
        date: 1634658232000,
        organization: "CSS Design Awards",
        organizationImgName: "Awards 6",
      },
      {
        projectImgName: "Awards 4",
        projectName: "Work Media",
        date: 1633621432000,
        organization: "The FWA",
        organizationImgName: "Awards 7",
      },
    ].map((img) => ({
      ...img,
      data: data.allFile.edges.find(
        (edge) => img.projectImgName === edge.node.name
      )?.node.childImageSharp.gatsbyImageData,
      organizationData: data.allFile.edges.find(
        (edge) => img.organizationImgName === edge.node.name
      )?.node.publicURL,
    })),
    paragraph: "Want more awards?",
    linkText: "Explore Now",
  };

  return (
    <section className="wrapper pt-[46px] md:pt-[78px] pb-[48px] md:pb-[56px]">
      <h3 className="h3 text-center">{sectionData.heading}</h3>
      <ul className="mt-[35px] md:mt-[67px]">
        {sectionData.awards.map((item, i) => (
          <li key={i}>
            {i === 0 && <SeparatorLine asComponent />}
            <div className="flex flex-col md:flex-row items-center justify-between py-5 pt-[31px] md:pt-4 md:py-4">
              <div className="flex flex-col md:flex-row items-center gap-[26px] md:gap-6 basis-1/3">
                <GatsbyImage image={item.data} alt={item.projectName} />
                <p className="text-big">{item.projectName}</p>
              </div>
              <span className="text opacity-[0.64]">
                {format(item.date, "d MMM, yyyy")}
              </span>
              <div className="flex flex-col md:flex-row items-center justify-end md:gap-6 basis-1/3 mt-4 md:mt-0">
                <p className="text">{item.organization}</p>
                <img src={item.organizationData} alt={item.organization} />
              </div>
            </div>
            <SeparatorLine asComponent />
          </li>
        ))}
      </ul>
      <p className="text text-center flex gap-2 justify-center mt-[43px] md:mt-[59px]">
        <span className="opacity-[0.64]">{sectionData.paragraph}</span>
        <Link to="#" className="hover:opacity-75">
          {sectionData.linkText}
        </Link>
      </p>
    </section>
  );
};

export default Awards;
