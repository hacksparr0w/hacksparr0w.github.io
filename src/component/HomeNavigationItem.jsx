import styled from "@emotion/styled";
import React from "react";

import { arrowLeftImage } from "../asset/image";
import Link from "./Link";
import Typography from "./Typography"

const Root = styled(Link)({
  display: "flex",
  alignItems: "center",

  "& > object": {
    pointerEvents: "none"
  },

  "& > p": {
    marginBottom: 0,
    marginLeft: 10
  }
});

export default ({ homeUrl }) => (
  <Root variant="anchor3" to={homeUrl}>
    <object type="image/svg+xml" data={arrowLeftImage} />
    <Typography variant="body2">
      /home/hacksparr0w
    </Typography>
  </Root>
);
