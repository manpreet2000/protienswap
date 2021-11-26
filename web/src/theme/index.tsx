import { ThemeProvider } from "@mui/material";
import { GlobalCss } from "./defaultCss";
import { theme } from "./theme";

export const MuiThemeProvider: React.FC = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalCss />
        {children}
      </ThemeProvider>
    </>
  );
};
