import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import promiseMiddleware from "redux-promise"
import thunk from "redux-thunk"
import Reducers from "./reducers/index.ts"

const exampleInitialState = {
  posts: [],
}

export function initializeStore(initialState = exampleInitialState) {
  return createStore(Reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))
}
