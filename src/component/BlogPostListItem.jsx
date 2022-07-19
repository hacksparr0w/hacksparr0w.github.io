import styled from "@emotion/styled";
import React from "react";

import theme from "../theme";

const Root = styled.div({
  display: "flex",

  "@media (max-width: 768px)": {
    flexDirection: "column"
  },

  "& > div:first-of-type": {
    width: "25%",

    "@media (max-width: 768px)": {
      width: "100%"
    },

    "& > p": {
      ...theme.typography.h3
    }
  },

  "& > div:last-of-type": {
    width: "75%",

    "@media (max-width: 768px)": {
      width: "100%"
    },

    "& > h3 > a": {
      border: "none",
      fontWeight: 500
    },

    "& > p": {
      ...theme.typography.p.secondary,

      marginTop: "10px"
    }
  }
});

export default ({
  post: {
    title,
    subtitle,
    publishedAt,
    documentFileUrl
  },
  ...rest
}) => (
  <Root {...rest}>
    <div>
      <p>{publishedAt}</p>
    </div>
    <div>
      <h3><a href={documentFileUrl}>{title}</a></h3>
      <p>{subtitle}</p>
    </div>
  </Root>
);
