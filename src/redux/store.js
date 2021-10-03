import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { movies, moviesItem } from "./reducers";

const configureStore = (reducers = {}, middlewares = []) =>
  createStore(
    combineReducers({ ...reducers, movies, moviesItem }),
    compose(applyMiddleware(...middlewares, thunk, logger))
  );

export default configureStore;
