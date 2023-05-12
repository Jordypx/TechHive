import React, { createContext, useState, useContext, useReducer } from 'react';


//Prepares the dataLayer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}