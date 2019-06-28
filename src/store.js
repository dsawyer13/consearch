import React, { createContext, useReducer } from 'react'

export const StoreContext = createContext({});

const initialState = {
    results: [],
    page: ''
}

function reducer(state, action) {

    switch (action.type) {
        case 'FETCH_RESULTS':
            return {...state, results: action.payload._embedded.events}
        case 'SET_PAGE':
            return {...state, page: action.payload}
        default: 
            throw new Error('Action type must be defined')
    }
}

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    )
}

export default Store;

