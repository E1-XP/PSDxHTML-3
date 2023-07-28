import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import CompanyList from "../components/sections/CompanyList";
import AboutSection from "../components/sections/About";
import HowWeWork from "../components/sections/HowWeWork";
import SeparatorLine from "../components/Separator";
import VideoReel from "../components/sections/VideoReel";
import Features from "../components/sections/Features";
import Service from "../components/sections/Service";
import Portfolio from "../components/sections/Portfolio";
import Events from "../components/sections/Events";
import OurTeam from "../components/sections/OurTeam";
import FounderWords from "../components/sections/FounderWords";
import Testimonials from "../components/sections/Testimonials";
import Pricing from "../components/sections/Pricing";
import FAQ from "../components/sections/Faq";
import Awards from "../components/sections/Awards";
import Blog from "../components/sections/Blog";
import Newsletter from "../components/sections/Newsletter";
import Contact from "../components/sections/Contact";
import ContactBanner from "../components/sections/ContactBanner";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main>
        <CompanyList />
        <SeparatorLine />
        <AboutSection />
        <HowWeWork />
        <SeparatorLine />
        <VideoReel />
        <Features />
        <Service />
        <Portfolio />
        <Events />
        <OurTeam />
        <FounderWords />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Awards />
        <Blog />
        <SeparatorLine />
        <Newsletter />
        <Contact />
        <ContactBanner />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <title>Agency</title>
  </>
);
