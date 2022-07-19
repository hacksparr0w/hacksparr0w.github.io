import theme from "./theme";

export const anchorStyles = colorVariant => ({
  color: theme.color.text[colorVariant],
  borderBottom: `1px solid ${theme.color.text[colorVariant]}`,
  textDecoration: "none"
});

export const globalStyles = {
  "*": {
    margin: 0,
    padding: 0
  },

  body: {
    color: theme.color.text.primary
  },

  a: {
    ...anchorStyles("primary")
  },

  p: {
    ...theme.typography.p.primary,

    "&:not(:first-of-type)": {
      marginTop: "20px"
    }
  },

  h2: {
    ...theme.typography.h2
  },

  h3: {
    ...theme.typography.h3
  }
};
