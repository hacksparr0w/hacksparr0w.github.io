import styled from "@emotion/styled";
import React from "react";

import { anchorStyles } from "../styles";
import theme from "../theme";
import Link from "./Link";

const Root = styled.footer({
  textAlign: "center",
  padding: "80px",
  backgroundColor: theme.color.background.secondary,

  "& > p": {
    ...theme.typography.p.secondary,
    color: theme.color.text.secondary,

    "&:not(:first-of-type)": {
      marginTop: "10px"
    }
  },

  "& > p > a": {
    ...anchorStyles("secondary")
  }
});

export default () => (
  <Root>
    <p>
      Created with &lt;3, powered by{" "}
      <Link to="https://github.com/hacksparr0w/mesmer">
        Mesmer
      </Link>
      .
    </p>
    <p>
      hacksparr0w © 2022
    </p>
  </Root>
);
