import React, { createContext, useState } from 'react';

export type GlobalErrorType = {
  setGlobalError(error: Error.ErrorResponse): void;
};

export const GlobalErrorContext = createContext<GlobalErrorType>(null as any);

export const GlobalErrorProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [globalError, setGlobalError] = useState<any | undefined>();

  return (
    <GlobalErrorContext.Provider value={{ setGlobalError }}>
      {children}

      {globalError && (
        // todo implement a modal
        <div></div>
      )}
    </GlobalErrorContext.Provider>
  );
};
