import React, { createContext } from 'react';


export const initialValues = {
    books: [1,2,3], 
    // sheetData: []
}

export const GlobalContext = createContext(initialValues)

export const GlobalProvider: React.FC = ({children}) => {
  return (
    <GlobalContext.Provider value={{
        books: [], 
        // sheetData: []
    }}>
        {children}
    </GlobalContext.Provider>
  );
}

// export const getStaticProps: GetStaticProps = async() => {
//     const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
//     const posts = await res.json()

//     return {props: { posts }}
// }
