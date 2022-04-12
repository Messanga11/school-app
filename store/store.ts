import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { RootStateOrAny } from "react-redux";
import { AnyAction, applyMiddleware, createStore, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { ApplicationAction, ApplicationState } from "./types";

const bindMiddleware = (middleware:Middleware[]) => {
    return process.env.NODE_ENV !== "production" 
        ? composeWithDevTools(applyMiddleware(...middleware))
        : applyMiddleware(...middleware)
}

const reducer = (state:ApplicationState, action: ApplicationAction | {type: typeof HYDRATE, payload: any}
    ) => {
    if(action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload
        }
    } else {
        return reducers(state, action)
    }
}

// @ts-ignore
const initStore = () => createStore(reducer, bindMiddleware([thunk]))

// @ts-ignore
export const wrapper = createWrapper(initStore, {debug: true})