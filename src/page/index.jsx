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
  Main,
  TwitchProfileLink,
  TwitterProfileLink,
  Typography
} from "../component";

import { HtmlTemplate } from "../partial";

const IndexHeroContentBox = styled(ContentBox)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& > img": {
    marginBottom: 60
  }
});

const IndexMainContentBox = styled(ContentBox)({
  "& > h2": {
    fontWeight: 400,
    marginTop: 0
  },

  "& > div": {
    marginTop: "40px"
  }
});

export const template = HtmlTemplate;

export const metadata = {
  title: "/home/hacksparr0w",
  home: true
};

export default ({ metadata: { pages } }) => {
  const posts = pages.filter(
    ({ moduleFilePath }) => moduleFilePath.includes("post")
  );

  return (
    <>
      <Hero>
        <IndexHeroContentBox>
          <img width={260} src={avatarImage} />
          <GitsTextEffect component={Typography} variant="body2">
            Hi, I'm hacksparr0w, welcome to my place on the internet. I'm
            currently studying physics at{" "}
            <TwitterProfileLink variant="anchor2" userName="muni_cz">
              @muni_cz
            </TwitterProfileLink>
            . Previously, I worked as a software engineer for various internet
            companies, including{" "}
            <TwitterProfileLink variant="anchor2" userName="seznam_cz">
              @seznam_cz
            </TwitterProfileLink>
            . I also helped building startups, most notably{" "}
            <TwitterProfileLink variant="anchor2" userName="cargotic_tech">
              @cargotic_tech
            </TwitterProfileLink>
            . I used to be pretty active in Czech cybersecurity community.
          </GitsTextEffect>
          <GitsTextEffect component={Typography} variant="body2">
            I'm interested in solving intelligence and my
            open-source work revolves primarily around AI. I'd like to invest
            in your next gamedev project, because I believe games are the
            most important medium of our time.
          </GitsTextEffect>
          <GitsTextEffect component={Typography} variant="body2">
            If you want to get in touch, shoot me an{" "}
            <EmailLink variant="anchor2" email="hacksparr0w@protonmail.com">
              email
            </EmailLink>
            {" "}or a{" "}
            <TwitterProfileLink variant="anchor2" userName="hacksparr0w">
              Twitter DM
            </TwitterProfileLink>
            . Be sure to check out my{" "}
            <GitHubProfileLink variant="anchor2" userName="hacksparr0w">
              GitHub
            </GitHubProfileLink>
            ,{" "}
            <TwitchProfileLink variant="anchor2" userName="hacksparr0w">
              Twitch
            </TwitchProfileLink>
            {" "}and{" "}
            <InstagramProfileLink variant="anchor2" userName="hacksparr0w">
              Instagram
            </InstagramProfileLink>
            .
          </GitsTextEffect>
        </IndexHeroContentBox>
      </Hero>
      <Main>
        <IndexMainContentBox>
          <Typography variant="heading2">Blog</Typography>
          <BlogPostList variant="anchor2" posts={posts} />
        </IndexMainContentBox>
      </Main>
      <Footer />
    </>
  );
};
