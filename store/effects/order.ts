import { ThunkAction } from "redux-thunk";
import orderService from "../../service/api/orderService";
import { requestErrorHandler, requestSuccessHandler } from "../../utils/common";
import { _changeOrderStatusFail, _changeOrderStatusRequest, _changeOrderStatusSuccess, _createOrderFail, _createOrderRequest, _createOrderSuccess, _getOrderFail, _getOrderRequest, _getOrdersFail, _getOrdersRequest, _getOrdersSuccess, _getOrderSuccess } from "../actions/order";
import { OrderState, ApplicationAction } from "../types";

type Effect = ThunkAction<any, OrderState, any, ApplicationAction>;

export const getOrdersEffect =
(range: {}): Effect =>
async (dispatch, getState) => {
  dispatch(_getOrdersRequest());
  try {
    const res = await orderService.getOrders(range);
    const data = await res.json();
    requestSuccessHandler(
      res.status, data?.detail,
      () => dispatch(_getOrdersSuccess(data)),
      () => dispatch(_getOrdersFail())
    );
  } catch (error) {
    requestErrorHandler(() => dispatch(_getOrdersFail()));
  }
};

export const createOrderEffect =
(payload:object, cb = () => undefined): Effect =>
async (dispatch, getState) => {
  dispatch(_createOrderRequest());
  try {
    const res = await orderService.createOrder(payload);
    const data = await res.json();
    requestSuccessHandler(
      res.status, data?.detail,
      () => {
        dispatch(_createOrderSuccess(data))
        cb()
      },
      () => dispatch(_createOrderFail())
    );
  } catch (error) {
    requestErrorHandler(() => dispatch(_createOrderFail()));
  }
};

export const getOrderEffect =
(uuid:string): Effect =>
async (dispatch, getState) => {
  dispatch(_getOrderRequest());
  try {
    const res = await orderService.getOrder(uuid);
    const data = await res.json();
    requestSuccessHandler(
      res.status, data?.detail,
      () => dispatch(_getOrderSuccess(data)),
      () => dispatch(_getOrderFail())
    );
  } catch (error) {
    requestErrorHandler(() => dispatch(_getOrderFail()));
  }
};

export const changeOrderStatusEffect =
(payload:object, cb = () => undefined): Effect =>
async (dispatch, getState) => {
  dispatch(_changeOrderStatusRequest());
  try {
    const res = await orderService.changeOrderStatus(payload);
    const data = await res.json();
    requestSuccessHandler(
      res.status, data?.detail,
      () => {
        dispatch(_changeOrderStatusSuccess(data))
        cb()
      },
      () => dispatch(_changeOrderStatusFail())
    );
  } catch (error) {
    requestErrorHandler(() => dispatch(_changeOrderStatusFail()));
  }
};