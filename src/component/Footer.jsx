import styled from "@emotion/styled";
import React from "react";

import theme from "../theme";
import Link from "./Link";

const Root = styled.footer({
  textAlign: "center",
  padding: "80px",
  backgroundColor: theme.color.background2,
  color: theme.color.text2,

  "& > p": {
    ...theme.typography.body2,
    marginBottom: 0
  }
});

export default () => (
  <Root>
    <p>
      Created with &lt;3, powered by{" "}
      <Link variant="anchor2" to="https://github.com/hacksparr0w/mesmer">
        Mesmer
      </Link>
      .
      <br />
      hacksparr0w © 2022
    </p>
  </Root>
);
