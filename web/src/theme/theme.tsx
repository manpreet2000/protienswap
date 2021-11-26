import "@emotion/react";
import { createTheme } from "@mui/material";
import { color } from "./color";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: color.primary,
    },
    secondary: {
      main: color.secondary,
    },
    success: {
      main: color.success,
    },
    background: {
      paper: color.black,
    },
    common: {
      black: color.black,
    },
    text: {
      disabled: color.textGray,
    },
    grey: {
      "400": color.borderColor,
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontWeightBold: 600,
    h1: {
      fontSize: 36,
      marginBottom: "15px",
      lineHeight: 1.2,
    },
    h2: {
      fontSize: 32,
      marginBottom: "30px",
      lineHeight: 1.4,
    },
    h3: {
      fontSize: 20,
      lineHeight: 1.4,
      marginBottom: 30,
    },
    h4: {
      fontSize: 18,
      marginBottom: 21,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: 16,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: 20,
      marginBottom: "16px",
      lineHeight: 1.4,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: "1122px !important",
        },
        maxWidthMd: {
          maxWidth: "860px !important",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textTransform: "inherit",
          padding: "8px 16px",
          borderRadius: 12,
          boxShadow: "0px 0px 70px rgba(30, 32, 38, 0.7)",
          fontFeatureSettings: `'pnum' on, 'lnum' on`,
        },
        sizeLarge: {
          padding: "12px 24px",
        },
        outlined: {
          borderColor: color.primary,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "inherit",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          padding: "6px 0",
          fontSize: "inherit",
          marginTop: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "40px",
          backgroundImage: "none",
          boxShadow: "none",
          borderRadius: 24,
          ".MuiCardActions-root": {
            padding: "40px 0 0",
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          background: "transparent",
          boxShadow: "none",
          th: {
            color: color.textGray,
            fontSize: "12px",
            fontWeight: 500,
            paddingBottom: "0 !important",
            borderBottom: 0,
          },
          td: {
            fontSize: "16px",
          },
          "th, td": {
            padding: "16px 5px",
            borderBottomColor: "rgba(255, 255, 255, 0.1)",
            ":first-of-type": {
              paddingLeft: 0,
            },
            ":last-child": {
              paddingRight: 0,
            },
          },
        },
      },
    },
  },
});
