import PaymentService from "@/services/PaymentService";
import { createPayment, deletePayment, getPayments, updatePayment } from "../actions";
import { Effect, EffectRange } from "../types";
import { basicEffectFunction } from "./shared";

export const getPaymentsEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, PaymentService.getPayments, dispatch, getPayments)

export const createPaymentEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, PaymentService.createPayment, dispatch, createPayment)

export const updatePaymentEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, PaymentService.updatePayment, dispatch, updatePayment)

export const deletePaymentEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, PaymentService.deletePayment, dispatch, deletePayment)