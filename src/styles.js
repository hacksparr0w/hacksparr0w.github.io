import theme from "./theme";

export default {
  main: {
    anchor: {
      color: theme.color.foreground.primary,
      textDecoration: "none",

      "&:focus": {
        textDecoration: "underline"
      }
    },

    heading1: {
      fontFamily: "'Poppins'",
      fontWeight: 600,
      fontSize: 84,

      lineHeight: 1.2,

      marginBottom: 28
    },

    heading2: {
      fontFamily: "'Poppins'",
      fontWeight: 600,
      fontSize: 28,

      marginTop: 42,
      marginBottom: 8
    },

    body1: {
      fontFamily: "'Poppins'",
      fontWeight: 400,
      fontSize: 18,

      lineHeight: 1.8
    }
  },

  accent: {
    anchor: {
      color: "inherit",
      borderBottom: "1px solid",
      textDecoration: "none"
    },

    body1: {
      fontFamily: "'Fira Code'",
      fontWeight: 400,
      fontSize: 18
    }
  }
};
