import React from "react";

import {
  ContentBox,
  Footer,
  Hero,
  HomeNavigationItem,
  Main,
  Typography
} from "../component";

import * as HtmlTemplate from "./HtmlTemplate";

export const template = HtmlTemplate;

export default ({ metadata, children }) => {
  const { page: { title, subtitle, publishedOn }, pages } = metadata;
  const [{ documentFileUrl: homeUrl }] = pages.filter(({ home }) => home);

  return (
    <>
      <Hero
        navigation={(
          <HomeNavigationItem homeUrl={homeUrl} />
        )}
      >
        <ContentBox>
        <Typography variant="subtitle2">
            {publishedOn}
          </Typography>
          <Typography variant="heading1">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            {subtitle}
          </Typography>
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
