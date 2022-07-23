import styled from "@emotion/styled";
import React from "react";

import Typography from "./Typography";

const Root = styled.div({
  marginBottom: 30,

  "& > img": {
    width: "100%",
    marginBottom: 20
  }
})

export default ({ image, caption }) => (
  <Root>
    <img src={image} />
    <Typography variant="caption">
      {caption}
    </Typography>
  </Root>
);
