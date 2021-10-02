import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { movies, moviesItem } from "./reducers";

const configureStore = (reducers = {}, preloadedState = {}, middlewares = []) =>
  createStore(
    combineReducers({ ...reducers, movies, moviesItem }),
    preloadedState,
    compose(applyMiddleware(...middlewares, thunk, logger))
  );

export default configureStore;
