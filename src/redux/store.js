import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import movies from "./reducers";

const configureStore = (reducers = {}, preloadedState = {}, middlewares = []) =>
  createStore(
    combineReducers({ ...reducers, movies }),
    preloadedState,
    compose(applyMiddleware(...middlewares, thunk, logger))
  );

export default configureStore;
