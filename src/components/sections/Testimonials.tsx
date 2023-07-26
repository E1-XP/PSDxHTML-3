import * as React from "react";

import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../Button";
import StarIcon from "../icons/Star";

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query getReviewerImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          name: { regex: "/review/" }
        }
        sort: { name: ASC }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(layout: FIXED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const sectionData = {
    tagText: "Testimonials",
    heading: "What Our Clients Saying",
    buttonText: "See All",
    testimonials: [
      {
        image: "review",
        rating: 5,
        review:
          "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        author: "Alan Martí",
        company: "Meta Inc.",
      },
      {
        image: "review3",
        rating: 5,
        review:
          "Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.",
        author: "Graham Griffiths",
        company: "Twitor.",
      },
      {
        image: "review2",
        rating: 5,
        review:
          "Provide your business with a variety of digital solutions to promote your product or service online.",
        author: "Richardo Kann",
        company: "Photogram",
      },
      {
        image: "review4",
        rating: 5,
        review:
          "Promote your product or service online and help you hit your marketing goals and grow your business.",
        author: "Maria Trofimova",
        company: "Whochat",
      },
    ].map((img) => ({
      ...img,
      data: data.allFile.edges.find((edge) => img.image === edge.node.name)
        ?.node.childImageSharp.gatsbyImageData,
    })),
  };

  return (
    <section className="wrapper flex flex-col items-center mt-[92px] md:mt-[124px] mb-[62px] md:mb-[54px]">
      <div className="flex flex-col items-center">
        <h2 className="h5">{sectionData.tagText}</h2>
        <h3 className="h3 lg:h2 mt-[17px] md:mt-5 max-w-[394px] text-center">
          {sectionData.heading}
        </h3>
      </div>
      <ul className="mt-[35px] md:mt-16 lg:columns-2 gap-x-0 lg:[&>*:nth-child(4n+3)]:-ml-[1px] lg:[&>*:nth-child(4n+4)]:-ml-[1px] lg:[&>*:nth-child(3)>div]:rounded-tr-md lg:[&>*:nth-last-child(3)>div]:rounded-b-md">
        {sectionData.testimonials.map((item) => (
          <li
            key={item.author}
            className="[&>*]:first-of-type:bg-white [&>*]:first-of-type:shadow-activeCard -mt-[1px] first-of-type:mt-0 lg:mt-0 [&>*]:first-of-type:rounded-t-md lg:[&>*]:first-of-type:rounded-t-none [&>*]:last-of-type:rounded-b-md lg:[&>*]:last-of-type:rounded-b-none lg:[&>*]:first-of-type:rounded-tl-md lg:[&>*]:last-of-type:rounded-br-md lg:even:-mt-[1px]"
          >
            <div className="border border-sandyAccent px-7 md:px-12 p-12">
              <div className="flex gap-2">
                {Array(item.rating)
                  .fill(null)
                  .map((_, i) => (
                    <StarIcon key={i} className="text-gold" />
                  ))}
              </div>
              <div className="mt-9 text opacity-[0.64]">{item.review}</div>
              <div className="flex mt-[31px] gap-6">
                <GatsbyImage
                  image={item.data}
                  alt={item.author}
                  className="overflow-visible"
                />
                <div className="flex flex-col justify-center">
                  <span className="h4">{item.author}</span>
                  <span className="mt-[3px] text">{item.company}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Button variant="secondary" className="mt-[50px] md:mt-16">
        {sectionData.buttonText}
      </Button>
    </section>
  );
};

export default Testimonials;
