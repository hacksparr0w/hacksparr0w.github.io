/** @jsx jsx */
import { jsx } from "@emotion/react";
import { forwardRef } from "react";

import theme from "../theme";

const COMPONENTS = {
  body1: "p",
  body2: "p",
  caption: "p",
  heading1: "h1",
  heading2: "h2",
  heading3: "h3",
  subtitle: "p",
};

export default forwardRef((props, ref) => {
  const {
    variant = "body1",
    component,
    color,
    ...other
  } = props;

  if (!(variant in COMPONENTS)) {
    throw new Error(`Unknown typography variant '${variant}'`);
  }

  let Component = component ?? COMPONENTS[variant];

  let css = {
    ...theme.styles[variant]
  };

  if (color) {
    css.color = theme.color[color];
  }

  return (
    <Component ref={ref} css={css} {...other} />
  );
});
