import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './Reducer/index'
import reduxThunk from 'redux-thunk';
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(reduxThunk),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
    ? a => a
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()

  ),
)
export default store
