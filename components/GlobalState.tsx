import { createContext } from 'react';

export const initialValues = {
    sheetData: {
        range: "", 
        values: []
    }
}

export const GlobalContext = createContext(initialValues)