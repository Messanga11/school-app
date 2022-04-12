import { Action } from "redux";
import { RequestRange } from ".";

// ************************* Constants **************************** //
export const GET_PAYMENTS = "GET_PAYMENTS"
export const GET_PAYMENT = "GET_PAYMENT"
export const UPDATE_PAYMENT = "UPDATE_PAYMENT"
export const CREATE_PAYMENT = "CREATE_PAYMENT"
export const DELETE_PAYMENT = "DELETE_PAYMENT"
export const RESET_PAYMENT_STATE = "RESET_PAYMENT_STATE"

// ************************* Interfaces ***************************** //
export interface Payment {
    uuid: string;
    first_name: string;
    last_name: string;
    phone_number: number;
    email?: string;
    img_url?: string;
    guardian_phone_number?: number;
}

export interface PaymentsResponse {
    total: number;
    pages: number;
    current_page: number;
    data: Payment[];
}

export interface PaymentRequest {
    first_name: string,
    last_name: string,
    user_name: string,
    email: string,
    phone_number: number,
    password: string,
    guardian_phone_number: string
}

export interface PaymentState {
    payment_data: PaymentsResponse;
    current_payment: Payment | null
}

// ************************* Actions ***************************** //
export interface GetPayments extends Action {
    type: typeof GET_PAYMENTS;
    payload: PaymentsResponse
}

export interface GetPayment extends Action {
    type: typeof GET_PAYMENT;
    payload: Payment
}

export interface UpdatePayment extends Action {
    type: typeof UPDATE_PAYMENT;
    payload: Payment
}

export interface CreatePayment extends Action {
    type: typeof CREATE_PAYMENT;
    payload: Payment
}

export interface DeletePayment extends Action {
    type: typeof DELETE_PAYMENT;
    payload: {
        message: string
    }
}

export interface ResetPaymentState extends Action {
    type: typeof RESET_PAYMENT_STATE;
    payload: undefined
}

export type PaymentActions = 
GetPayments
| GetPayment
| UpdatePayment
| CreatePayment
| DeletePayment 
| ResetPaymentState