import React from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
import { useTheme } from "@mui/material";

export const GlobalCss: React.FC = () => {
  const theme = useTheme();
  return (
    <GlobalStyles
      styles={
        {
          // yha css likhenge
          // eslint-disable-next-line
        } as any
      }
    />
  );
};
