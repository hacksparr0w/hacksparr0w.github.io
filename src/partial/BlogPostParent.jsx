import styled from "@emotion/styled";
import React from "react";

import {
  ContentBox,
  Footer,
  Hero,
  HomeNavigationItem,
  Main,
  Typography
} from "../component";

import theme from "../theme";

import * as HtmlTemplate from "./HtmlTemplate";

const BlogPostContentBox = styled(ContentBox)({
  "& p": {
    ...theme.typography.body1
  }
});

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
        <BlogPostContentBox>
          {children}
        </BlogPostContentBox>
      </Main>
      <Footer />
    </>
  );
};
