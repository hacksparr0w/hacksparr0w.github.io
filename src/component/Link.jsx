import styled from "@emotion/styled";
import React from "react";

import theme from "../theme";

const Root = styled.a(({ variant = "anchor1" }) => ({
  ...theme.typography[variant]
}));

export default ({ to, ...props }) => (
  <Root href={to} {...props} />
);
