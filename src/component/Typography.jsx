/** @jsx jsx */
import { jsx } from "@emotion/react";
import { forwardRef } from "react";

import theme from "../theme";

const COMPONENTS = {
  caption: "p",
  body1: "p",
  body2: "p",
  heading1: "h1",
  heading2: "h2",
  heading3: "h3",
  subtitle1: "p",
  subtitle2: "p"
};

const getTextColor = color => (
  color === "inherit" ? color : theme.color.text[color]
);

export default forwardRef((props, ref) => {
  const {
    variant = "body1",
    component = undefined,
    color = "inherit",
    ...other
  } = props;

  let Component = component ?? COMPONENTS[variant];

  if (!Component) {
    throw new Error(`Unknown typography variant '${variant}'`);
  }

  let css = {
    ...theme.typography[variant],
    color: getTextColor(color)
  };

  return (
    <Component ref={ref} css={css} {...other} />
  );
});
