import { Action, combineReducers, Reducer } from "redux";
import { ApplicationAction, ApplicationState } from "../types";
import authReducer from "./auth";
import bookReducer from "./book";
import paperReducer from "./paper";
import paymentReducer from "./payment";
import studentReducer from "./student";
import subjectReducer from "./subject";
import topicReducer from "./topic";
import videoReducer from "./video";
import schoolReducer from './school';
import school_postReducer from "./schoolPost";

// @ts-ignore
const combinedReducers:Reducer<ApplicationState, ApplicationAction> = combineReducers({
  student: studentReducer,
  auth: authReducer,
  book: bookReducer,
  paper: paperReducer,
  payment: paymentReducer,
  subject: subjectReducer,
  video: videoReducer,
  topic: topicReducer,
  school: schoolReducer,
  schoolPost: school_postReducer
});

export default combinedReducers;
