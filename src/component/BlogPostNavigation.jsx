
import styled from "@emotion/styled";
import React from "react";

import { arrowLeftImage } from "../asset/image";
import { Link, Typography } from "../component";

const Root = styled.ul({
  display: "flex",
  listStyle: "none",

  "& > li": {
    display: "inline-block"
  }
});

const BlogPostHomeNavigationLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  color: "inherit",

  "&:hover": {
    textDecoration: "none"
  },

  "& > object": {
    pointerEvents: "none"
  },

  "& > p": {
    marginBottom: 0,
    marginLeft: 10
  }
});

export default ({ homeUrl }) => (
  <Root>
    <li>
      <BlogPostHomeNavigationLink to={homeUrl}>
        <object type="image/svg+xml" data={arrowLeftImage} />
        <Typography variant="body2">
          /home/hacksparr0w
        </Typography>
      </BlogPostHomeNavigationLink>
    </li>
  </Root>
);
