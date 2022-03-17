import { Action, combineReducers, Reducer } from "redux";
import productReducer from "./product/productReducer";
import authReducer from "./auth/auhReducer";
import orderReducer from "./order/orderReducer";
import salonReducer from "./salon/salonReducer";
import bookingReducer from "./booking/bookingReducer";
import layoutReducer from "./layout/layoutReducer";
import notificationReducer from "./notification";
import chatReducer from './chat/chatReducer';
import { ApplicationAction, ApplicationState } from "../types";


const combinedReducers:Reducer<ApplicationState, Action<ApplicationAction>> = combineReducers({
  auth: authReducer,
  product: productReducer,
  order: orderReducer,
  salon: salonReducer,
  booking: bookingReducer,
  layout: layoutReducer,
  notification: notificationReducer,
  chat: chatReducer,
});

export default combinedReducers;
