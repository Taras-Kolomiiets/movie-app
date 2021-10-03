import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { movies, moviesItem } from "./reducers";

const configureStore = () =>
  createStore(
    combineReducers({ movies, moviesItem }),
    compose(applyMiddleware(thunk, logger))
  );

export default configureStore;
