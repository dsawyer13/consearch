import React, { createContext, useReducer } from 'react'

export const StoreContext = createContext({});

const initialState = {
    results: [],
    audio: '',
    city: '',
    distance: null
}

function reducer(state, action) {

    switch (action.type) {
        case 'FETCH_RESULTS':
            return (state, {results: action.payload._embedded.events})
        case 'FETCH_AUDIO':
            return Object.assign(state, { audio: action.data })
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

