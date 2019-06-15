import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { resultReducer } from './reducers'

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
let store = createStoreWithMiddleware(
  resultReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store