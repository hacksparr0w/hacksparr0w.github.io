import styled from "@emotion/styled";
import React from "react";

import Typography from "./Typography";

const Root = styled.figure({
  marginBottom: 22,
  textAlign: "center",

  "& > img": {
    width: "100%",
    marginBottom: 16
  }
})

export default ({ image, caption }) => (
  <Root>
    <img src={image} />
    <Typography variant="caption" color="text4">
      {caption}
    </Typography>
  </Root>
);
