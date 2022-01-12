import { Web3ReactProvider } from "@web3-react/core";
import { EtherService } from "./services/etherService";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export const App: React.FC = () => (
  <Web3ReactProvider
    getLibrary={() => EtherService.getInstance().getProvider()}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </Web3ReactProvider>
);
