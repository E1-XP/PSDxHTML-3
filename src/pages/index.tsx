import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "./../components/Header";
import Footer from "../components/Footer";
import CompanyList from "../components/CompanyList";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main>
        <CompanyList />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
