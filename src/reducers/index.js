import * as actions from '../actions'

export const initialState = {
    results: []
}

export const resultReducer = (state = initialState, action) => {
    if (action.type === actions.FETCH_RESULTS) {
        return action.results
    }
    return state
}