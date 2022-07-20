import styled from "@emotion/styled";
import React from "react";

import Link from "./Link";
import Typography from "./Typography";

const Root = styled.div({
  display: "flex",

  "@media (max-width: 768px)": {
    flexDirection: "column"
  },

  "& > div:first-of-type": {
    width: "25%",

    "@media (max-width: 768px)": {
      width: "100%"
    }
  },

  "& > div:last-of-type": {
    width: "75%",

    "@media (max-width: 768px)": {
      width: "100%"
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
      <Typography variant="heading3" component="p">
        {publishedAt}
      </Typography>
    </div>
    <div>
      <Typography variant="heading3">
        <Link variant="anchor2" to={documentFileUrl}>
          {title}
        </Link>
      </Typography>
      <Typography variant="body2">
        {subtitle}
      </Typography>
    </div>
  </Root>
);
