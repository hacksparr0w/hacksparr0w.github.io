export default {
  color: {
    text1: "#000",
    text2: "#fff",
    text3: "",
    text4: "",

    foreground1: "#0969da",

    background1: "#fff",
    background2: "#"
  },

  typography: {
    a1: {
      textDecoration: "none",

      "&:focus": {
        textDecoration: "underline"
      }
    },

    a2: {
      borderBottom: "1px solid",
      textDecoration: "none"
    },

    caption: {
      fontFamily: "'Poppins'",
      fontWeight: 400,
      fontSize: 14
    },

    h1: {
      fontFamily: "'Poppins'",
      fontWeight: 600,
      fontSize: 84,
      lineHeight: 1.2,
      marginBottom: 28
    },

    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: 28,
      marginTop: 42,
      marginBottom: 8
    },

    body1: {
      fontFamily: "'Poppins'",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.8,
      marginBottom: 28
    },

    body2: {
      fontFamily: "'Fira Code'",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.2,
      marginBottom: 22
    },

    subtitle1: {
      fontFamily: "'Fira Code'",
      fontSize: 28,
      lineHeight: 1.5
    },

    subtitle2: {
      fontFamily: "'Poppins'",
      fontWeight: 200,
      fontSize: 24,

      marginBottom: 10
    }
  }
};
