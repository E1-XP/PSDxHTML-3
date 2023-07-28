import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ArrowLeftIcon from "../icons/ArrowLeft";
import ArrowRightIcon from "../icons/ArrowRight";

const OurTeam = () => {
  const data = useStaticQuery(graphql`
    query getTeamImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          name: { regex: "/team/" }
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
    tagText: "Our team",
    heading: "Team of Designers and Developers",
    team: [
      {
        image: "team",
        name: "Azah Anyeni",
        role: "Designer",
      },
      {
        image: "team2",
        name: "Roelof Bekkenenks",
        role: "React Developer",
      },
      {
        image: "team3",
        name: "Leonardo Oliveira",
        role: "Illustrator",
      },

      {
        image: "team4",
        name: "Izabella Tabakova",
        role: "Product Designer",
      },
    ].map((img) => ({
      ...img,
      data: data.allFile.edges.find((edge) => img.image === edge.node.name)
        ?.node.childImageSharp.gatsbyImageData,
    })),
  };

  sectionData.team = sectionData.team.concat(sectionData.team);

  const swiperRef = React.useRef();

  return (
    <section className="bg-purple">
      <div className="wrapper pt-[62px] md:pt-[70px] pb-[58px] md:pb-[90px]">
        <div className="flex justify-between">
          <div>
            <h2 className="h5">{sectionData.tagText}</h2>
            <h3 className="h3 lg:h2 !text-white max-w-[531px] mt-[17px] md:mt-5">
              {sectionData.heading}
            </h3>
          </div>
          <div className="gap-4 items-end hidden md:flex">
            <span
              className="flex items-center justify-center h-12 w-12 rounded-full border border-white cursor-pointer hover:opacity-75"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowLeftIcon />
            </span>
            <span
              className="flex items-center justify-center h-12 w-12 rounded-full border border-white cursor-pointer hover:opacity-75"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowRightIcon />
            </span>
          </div>
        </div>
        <div className="mt-[35px] md:mt-16">
          <Swiper
            id="team"
            spaceBetween={30}
            slidesPerView="auto"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".swiper-custom-pagination",
            }}
          >
            {sectionData.team.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="w-[270px]">
                  <div className="border border-purpleGray rounded-md h-[272px] flex flex-col items-center justify-end">
                    <GatsbyImage
                      image={item.data}
                      alt={item.name}
                      className="pointer-events-none"
                    />
                  </div>
                  <p className="h4 text-white mt-[25px]">{item.name}</p>
                  <p className="text text-white opacity-[0.64] mt-[3px]">
                    {item.role}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            id="team-pagination"
            className="swiper-custom-pagination flex items-center justify-center gap-2.5 mt-[36px] md:mt-[50px]"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
