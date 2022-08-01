import styled from "@emotion/styled";
import React from "react";

import Typography from "./Typography";

const Root = styled.figure({
  marginBottom: 30,
  textAlign: "center",

  "& > img": {
    width: "100%",
    marginBottom: 20
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
