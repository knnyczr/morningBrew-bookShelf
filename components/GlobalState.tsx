import React, { createContext } from 'react';

export const initialValues = {
    books: [1,2,3]
}

export const GlobalContext = createContext(initialValues)

export const GlobalProvider: React.FC = ({children}) => {
  return (
    <GlobalContext.Provider value={{
        books: []
    }}>
        {children}
    </GlobalContext.Provider>
  );
}
