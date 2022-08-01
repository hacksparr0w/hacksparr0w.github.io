const color = {
  text1: "#000",
  text2: "#fff",
  text3: "#919191",
  text4: "#57606a",

  foreground1: "#0969da",

  background1: "#fff",
  background2: "#000"
};

const typography = {
  anchor1: {
    color: color.foreground1,
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline"
    }
  },

  anchor2: {
    color: "inherit",
    borderBottom: "1px solid",
    textDecoration: "none"
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
    lineHeight: 1.6,
    marginBottom: 22
  },

  caption: {
    fontFamily: "'Poppins'",
    fontWeight: 400,
    fontSize: 14
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

  heading3: {
    fontFamily: "'Poppins'",
    fontWeight: 400,
    fontSize: 24,

    marginBottom: 10
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
};

export default {
  color,
  typography
};
