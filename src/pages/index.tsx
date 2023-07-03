import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "./../components/Header";
import Footer from "../components/Footer";
import CompanyList from "../components/CompanyList";
import AboutSection from "../components/aboutSection";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main>
        <CompanyList />
        <AboutSection/>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
