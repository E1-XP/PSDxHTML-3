import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "./../components/Header";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main></main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
