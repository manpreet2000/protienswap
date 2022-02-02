import { createContext, useState } from "react";

export enum CURRENTMODAL {
  SWAP,
  POOL,
}

interface ISwapContext {
  currentModal: CURRENTMODAL;
  changeCurrentModal: (mode: CURRENTMODAL) => void;
}

const initialValue = {
  currentModal: CURRENTMODAL.SWAP,
  changeCurrentModal: (mode:CURRENTMODAL) => {}
};

export const SwapContext = createContext<ISwapContext>(initialValue);

const SwapContextProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<CURRENTMODAL>(CURRENTMODAL.SWAP);
  const toggleMode = (value: CURRENTMODAL) => {
    return setMode(value);
  };
  return (
    <SwapContext.Provider
      value={{ currentModal: mode, changeCurrentModal: toggleMode }}
    >
      {children}
    </SwapContext.Provider>
  );
};

export default SwapContextProvider;
