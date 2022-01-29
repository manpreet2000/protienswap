import { useTheme } from "@mui/material";
import { GlobalStyles } from "@mui/styled-engine";

export const GlobalCss = () => {
  const theme = useTheme();
  return (
    <GlobalStyles
      styles={
        {
          "*, *::before, *::after": {
            boxSizing: "border-box",
          },
          webkiTextSizeAdjust: "100%",
          webkitFontSmoothing: "antialiased",
          body: {
            margin: 0,
            fontSize: theme.typography.fontSize,
            fontWeight: theme.typography.fontWeightRegular,
            lineHeight: 1.5,
            color: theme.palette.common.white,
            background:
              "linear-gradient(113deg, rgba(47,30,16,1) 0%, rgba(35,34,71,1) 100%);",
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
        } as any
      }
    />
  );
};
