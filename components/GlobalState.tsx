import React, { Component, createContext } from 'react';

export const initialValues = {
    sheetData: {}
}

export const GlobalContext = createContext(initialValues)