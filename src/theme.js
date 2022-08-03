const color = {
  text1: "#000",
  text2: "#fff",
  text3: "#919191",
  text4: "#57606a",

  foreground1: "#0969da",

  background1: "#fff",
  background2: "#000",
  background3: "#f6f8fa"
};

const styles = {
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

  code: {
    padding: ".2em .4em",
    margin: 0,
    fontSize: "85%",
    background: color.background3,
    borderRadius: 6
  },

  body1: {
    fontFamily: "'Poppins'",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.8,
    marginBottom: 22
  },

  body2: {
    fontFamily: "'Fira Code'",
    fontWeight: 400,
    fontSize: 16,
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
    fontSize: 26,
    marginTop: 42,
    marginBottom: 8
  },

  heading3: {
    fontFamily: "'Poppins'",
    fontWeight: 400,
    fontSize: 22,

    marginBottom: 10
  },

  list: {
    paddingLeft: 40,
    marginBottom: 22
  },

  listItem: {
    marginBottom: 12
  },

  subtitle: {
    fontFamily: "'Fira Code'",
    fontSize: 20,
    lineHeight: 1.6
  },
};

export default {
  color,
  styles
};
