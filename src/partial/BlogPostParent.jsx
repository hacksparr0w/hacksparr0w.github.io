import styled from "@emotion/styled";
import renderMathInElement from "katex/contrib/auto-render";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import React, { useEffect, useRef } from "react";

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
  "& a": {
    ...theme.typography.anchor1,
    border: "none",
    color: "#0969DA"
  },

  "& code": {
    ...theme.typography.code
  },

  "& > h2": {
    ...theme.typography.heading2
  },

  "& > p": {
    ...theme.typography.body1
  },

  "& .katex-display": {
    margin: "32px 0"
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
        <BlogPostContentBox ref={contentBoxRef}>
          {children}
        </BlogPostContentBox>
      </Main>
      <Footer />
    </>
  );
};
