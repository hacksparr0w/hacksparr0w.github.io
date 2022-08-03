import styled from "@emotion/styled";
import renderMathInElement from "katex/contrib/auto-render";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import React, { useEffect, useRef } from "react";

import {
  BlogPostNavigation,
  ContentBox,
  Footer,
  Hero,
  Main,
  Typography
} from "../component";

import theme from "../theme";

import * as HtmlTemplate from "./HtmlTemplate";

const BlogPostHeroContentBox = styled(ContentBox)({
  "& > p:first-of-type": {
    marginBottom: 8
  }
});

const BlogPostMainContentBox = styled(ContentBox)({
  "& a": {
    ...theme.styles.anchor1
  },

  "& > p code, & a > code": {
    ...theme.styles.code
  },

  "& > h2": {
    ...theme.styles.heading2
  },

  "& > p": {
    ...theme.styles.body1
  },

  "& > ul": {
    ...theme.styles.list
  },

  "& > ul > li": {
    ...theme.styles.body1,
    ...theme.styles.listItem
  },

  "& .katex-display": {
    margin: "22px 0"
  }
});

export const template = HtmlTemplate;

export default ({ metadata, children }) => {
  const contentBoxRef = useRef();
  const { page: { title, subtitle, publishedOn }, pages } = metadata;
  const [{ documentFileUrl: homeUrl }] = pages.filter(({ home }) => home);

  useEffect(() => {
    renderMathInElement(contentBoxRef.current, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ]
    });

    Prism.highlightAllUnder(contentBoxRef.current);
  }, []);

  return (
    <>
      <Hero
        navigation={(
          <BlogPostNavigation homeUrl={homeUrl} />
        )}
      >
        <BlogPostHeroContentBox>
          <Typography variant="body2">
            {publishedOn}
          </Typography>
          <Typography variant="heading1">
            {title}
          </Typography>
          <Typography variant="subtitle" color="text3">
            {subtitle}
          </Typography>
        </BlogPostHeroContentBox>
      </Hero>
      <Main>
        <BlogPostMainContentBox ref={contentBoxRef}>
          {children}
        </BlogPostMainContentBox>
      </Main>
      <Footer />
    </>
  );
};
