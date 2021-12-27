import React from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
import { useTheme } from "@mui/material";

export const GlobalCss: React.FC = () => {
  const theme = useTheme();
  return (
    <GlobalStyles
      styles={
        {
          "*, *::before, *::after": {
            boxSizing: "border-box",
          },
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          webkiTextSizeAdjust: "100%",
          webkitFontSmoothing: "antialiased",
          "article, aside, figcaption, figure, footer, header, hgroup, main, nav, section": {
            display: "block",
          },
          body: {
            margin: 0,
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.fontSize,
            fontWeight: theme.typography.fontWeightRegular,
            lineHeight: 1.5,
          },
          hr: {
            boxSizing: "content-box",
            height: 0,
            overflow: "visible",
            marginTop: "1rem",
            marginBottom: "1rem",
            border: 0,
            borderTop: `1px solid ${theme.palette.divider}`,
          },
          "h1, h2, h3, h4, h5, h6": {
            marginTop: 0,
            marginBottom: "0.5rem",
            fontWeight: theme.typography.fontWeightRegular,
          },
          p: {
            marginTop: 0,
            marginBottom: "16px",
          },
          "abbr[title], abbr[data-original-title]": {
            textDecoration: "underline",
            webkitTextDecoration: "underline dotted",
            cursor: "help",
            borderBottom: 0,
            webkitTextDecorationSkipInk: "none",
            textDecorationSkipInk: "none",
          },
          
          h1: {
            ...theme.typography.h1,
          },
          h2: {
            ...theme.typography.h2,
          },
          h3: {
            ...theme.typography.h3,
          },
          h4: {
            ...theme.typography.h4,
            "@media only screen and (max-width: 767px)": {
              ...theme.typography.h5,
            },
          },
          h5: {
            ...theme.typography.h5,
          },
          h6: {
            ...theme.typography.h6,
          },
          // eslint-disable-next-line
        } as any
      }
    />
  );
};
