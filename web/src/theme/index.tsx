import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import {GlobalCss} from "./defaultCss";

export const MuiThemeProvider: React.FC = ({ children }) => {
  return (
      <ThemeProvider theme={theme}>
        <GlobalCss />
        {children}
      </ThemeProvider>
  );
};
