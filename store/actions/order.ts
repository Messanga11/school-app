import { orderActions } from "../actionTypes"
import { changeOrderStatusFail, changeOrderStatusRequest, changeOrderStatusSuccess, createOrderFail, createOrderRequest, createOrderSuccess, getOrderFail, getOrderRequest, getOrdersFail, getOrdersRequest, getOrdersSuccess, getOrderSuccess } from "../types"

export const _getOrdersRequest = ():getOrdersRequest => ({
  type: orderActions.GET_ORDERS_REQUEST
})
export const _getOrdersSuccess = (data:object):getOrdersSuccess => ({
  type: orderActions.GET_ORDERS_SUCCESS,
  payload: data
})
export const _getOrdersFail = ():getOrdersFail => ({
  type: orderActions.GET_ORDERS_FAIL
})
export const _createOrderRequest = ():createOrderRequest => ({
  type: orderActions.CREATE_ORDER_REQUEST
})
export const _createOrderSuccess = (data:object):createOrderSuccess => ({
  type: orderActions.CREATE_ORDER_SUCCESS,
  payload: data
})
export const _createOrderFail = ():createOrderFail => ({
  type: orderActions.CREATE_ORDER_FAIL
})
export const _getOrderRequest = ():getOrderRequest => ({
  type: orderActions.GET_ORDER_REQUEST
})
export const _getOrderSuccess = (data:object):getOrderSuccess => ({
  type: orderActions.GET_ORDER_SUCCESS,
  payload: data
})
export const _getOrderFail = ():getOrderFail => ({
  type: orderActions.GET_ORDER_FAIL
})
export const _changeOrderStatusRequest = ():changeOrderStatusRequest => ({
  type: orderActions.CHANGE_ORDER_STATUS_REQUEST
})
export const _changeOrderStatusSuccess = (data: object):changeOrderStatusSuccess => ({
  type: orderActions.CHANGE_ORDER_STATUS_SUCCESS,
  payload: data
})
export const _changeOrderStatusFail = ():changeOrderStatusFail => ({
  type: orderActions.CHANGE_ORDER_STATUS_FAIL
})
