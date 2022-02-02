import { Web3ReactProvider } from "@web3-react/core";
import { EtherService } from "./services/etherService";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MuiThemeProvider } from "./theme";
import SwapContextProvider from "./context/SwapContext";
import Home from "./pages/Home";

export const App: React.FC = () => (
  <MuiThemeProvider>
    <Web3ReactProvider
      getLibrary={() => EtherService.getInstance().getProvider()}
    >
      <SwapContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </SwapContextProvider>
    </Web3ReactProvider>
  </MuiThemeProvider>
);
