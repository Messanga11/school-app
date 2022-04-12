import { CreatePayment, CREATE_PAYMENT, DeleteResponse, DeletePayment, DELETE_PAYMENT, GetPayment, GetPayments, GET_PAYMENT, GET_PAYMENTS, Payment, PaymentsResponse, UpdatePayment, UPDATE_PAYMENT } from "../types";

export const getPayments = (data:PaymentsResponse):GetPayments => ({
  type: GET_PAYMENTS,
  payload: data
})

export const getPayment = (data:Payment):GetPayment => ({
  type: GET_PAYMENT,
  payload: data
})

export const updatePayment = (data:Payment):UpdatePayment => ({
  type: UPDATE_PAYMENT,
  payload: data
})

export const createPayment = (data:Payment):CreatePayment => ({
  type: CREATE_PAYMENT,
  payload: data
})

export const deletePayment = (data:DeleteResponse):DeletePayment => ({
  type: DELETE_PAYMENT,
  payload: data
})