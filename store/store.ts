import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import combinedReducers from "./reducers";

const middlewares = [thunk];

const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(...middlewares),
    // @ts-ignore
    typeof window !== typeof undefined && window.__REDUX_DEVTOOLS_EXTENSION__
      ? // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : compose
  )
);

export default store;
