import styled from "@emotion/styled";
import React from "react";

import { avatarImage } from "../asset/image";

import {
  BlogPostList,
  ContentBox,
  EmailLink,
  Footer,
  GitHubProfileLink,
  GitsTextEffect,
  Hero,
  InstagramProfileLink,
  TwitchProfileLink,
  TwitterProfileLink
} from "../component";

import { HtmlTemplate } from "../partial";
import { anchorStyles } from "../styles";
import theme from "../theme";

export const template = HtmlTemplate;

export const metadata = {
  title: "/home/hacksparr0w"
};

const IndexBlogPostList = styled(BlogPostList)({
  marginTop: "40px"
});

const IndexContentBox = styled(ContentBox)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const IndexHero = styled(Hero)({
  "& p": {
    ...theme.typography.p.secondary,
    color: theme.color.text.secondary,
  },

  "& p > a": {
    ...anchorStyles("secondary")
  }
});

const TextArea = styled.div({
  marginTop: "60px"
});

const Main = styled.main({
  paddingBottom: "80px",
  paddingTop: "80px"
});

export default ({ metadata: { pages } }) => {
  const posts = pages.filter(
    ({ moduleFilePath }) => moduleFilePath.includes("post")
  );

  return (
    <>
      <IndexHero>
        <IndexContentBox>
          <img width={260} src={avatarImage} />
          <TextArea>
            <GitsTextEffect>
              Hi, I'm hacksparr0w, welcome to my place on the internet. I'm
              currently studying physics at{" "}
              <TwitterProfileLink userName="muni_cz">
                @muni_cz
              </TwitterProfileLink>
              . Previously, I worked as a software engineer for various internet
              companies, including{" "}
              <TwitterProfileLink userName="seznam_cz">
                @seznam_cz
              </TwitterProfileLink>
              . I also helped building startups, most notably{" "}
              <TwitterProfileLink userName="cargotic_tech">
                @cargotic_tech
              </TwitterProfileLink>
              . I used to be pretty active in Czech cybersecurity community.
            </GitsTextEffect>
            <GitsTextEffect>
              I'm interested in solving intelligence and my
              open-source work revolves around AI. I'd like to invest
              in your next gamedev project, because I believe games are the
              most important medium of our time.
            </GitsTextEffect>
            <GitsTextEffect>
              If you want to get in touch, shoot me an{" "}
              <EmailLink email="hacksparr0w@protonmail.com">
                email
              </EmailLink>
              {" "}or a{" "}
              <TwitterProfileLink userName="hacksparr0w">
                Twitter DM
              </TwitterProfileLink>
              . Be sure to check out my{" "}
              <GitHubProfileLink userName="hacksparr0w">
                GitHub
              </GitHubProfileLink>
              ,{" "}
              <TwitchProfileLink userName="hacksparr0w">
                Twitch
              </TwitchProfileLink>
              {" "}and{" "}
              <InstagramProfileLink userName="hacksparr0w">
                Instagram
              </InstagramProfileLink>
              .
            </GitsTextEffect>
          </TextArea>
        </IndexContentBox>
      </IndexHero>
      <Main>
        <ContentBox>
          <h2>Blog</h2>
          <IndexBlogPostList posts={posts} />
        </ContentBox>
      </Main>
      <Footer />
    </>
  );
};
