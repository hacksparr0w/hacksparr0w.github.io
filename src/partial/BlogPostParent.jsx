import React from "react";

import { ContentBox, Footer, Hero, Main, Typography } from "../component";
import * as HtmlTemplate from "./HtmlTemplate";

export const template = HtmlTemplate;

export default ({ metadata, children }) => {
  const { page: { title, subtitle } } = metadata;

  return (
    <>
      <Hero>
        <ContentBox>
          <Typography variant="heading1">{title}</Typography>
          <Typography variant="subtitle" color="secondary">{subtitle}</Typography>
        </ContentBox>
      </Hero>
      <Main>
        <ContentBox>
          {children}
        </ContentBox>
      </Main>
      <Footer />
    </>
  );
};
