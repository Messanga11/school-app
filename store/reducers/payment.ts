import produce from "immer";
import { PaymentState, PaymentActions, GET_PAYMENTS, GET_PAYMENT, UPDATE_PAYMENT, DELETE_PAYMENT, RESET_PAYMENT_STATE, CREATE_PAYMENT } from "../types";

const initialState:PaymentState = {
    payment_data: {
        current_page: 1,
        data: [],
        pages: 0,
        total: 0
    },
    current_payment: null
}

const paymentReducer = (state=initialState, action: PaymentActions) => {
    switch(action.type) {

        case GET_PAYMENTS:{
            return produce(state, (draft) => {
                draft.payment_data = action.payload
            })
        }
        
        case GET_PAYMENT:{
            return produce(state, (draft) => {
                draft.current_payment = action.payload
            })
        }
        
        case CREATE_PAYMENT:{
            return {
                ...state
            }
        }

        case UPDATE_PAYMENT:{
            return {
                ...state
            }
        }
        
        case DELETE_PAYMENT:{
            return {
                ...state
            }
        }

        case RESET_PAYMENT_STATE: {
            return {...initialState}
        }

        default: {
            return {
                ...state
            }
        }

    }
}

export default paymentReducer