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

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main>
        <CompanyList />
        <SeparatorLine/>
        <AboutSection />
        <HowWeWork />
        <SeparatorLine />
        <VideoReel />
        <Features/>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
