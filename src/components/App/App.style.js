import { createUseStyles } from "react-jss";

export default createUseStyles(
  {
    "@global": {
      html: {
        height: "100%",
      },
      body: {
        height: "100%",
        color: "#ffffff",
        backgroundColor: "#202020",
        margin: "0",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      code: {
        fontFamily:
          "source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace",
      },

      "#root": {
        minHeight: "100vh",
      },
    },
    root: {
      minHeight: "calc(100vh - 50px)",
    },
    footer: {
      position: "sticky",
      bottom: "0",
    },
  },
  { name: "App" }
);
