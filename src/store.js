import React, { createContext, useReducer, useEffect } from 'react'

export const StoreContext = createContext({});

const initialState = {
    results: [],
    page: '',
    lastPage: '',
    city: '',
    distance: ''
}

const localState = JSON.parse(localStorage.getItem('state'))

function reducer(state, action) {

    switch (action.type) {
        case 'FETCH_RESULTS':
            console.log(action.payload)
            return {...state, results: action.payload._embedded.events}
        case 'SET_PAGE':
            return {...state, page: 1}
        case 'SET_LAST_PAGE':
            return {...state, lastPage: action.payload.page.totalPages}
        case 'SET_CITY':
            return {...state, city: action.payload}
        case 'SET_DISTANCE':
            return {...state, distance: action.payload}
        case 'NEXT_PAGE':
            return {...state, page: action.payload}
        case 'LAST_PAGE':
            return {...state, page: action.payload}
        default: 
            throw new Error('Action type must be defined')
    }
}

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, localState || initialState)

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state])

    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    )
}

export default Store;

