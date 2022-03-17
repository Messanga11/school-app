import { orderActions } from "../../actionTypes";
import { ApplicationAction, OrderState } from "../../types";

const initialState: OrderState = {
  total: 0,
  current_page: 0,
  pages: 0,
  per_page: 0,
  data: [],
  loading: false,
};

const orderReducer = (state = initialState, { type, payload }: ApplicationAction) => {
  switch (type) {
   
    case orderActions.GET_ORDERS_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case orderActions.GET_ORDERS_SUCCESS: {
      return {
        ...state,
        ...payload,
        loading: false
      }
    }
    case orderActions.GET_ORDERS_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    case orderActions.CREATE_ORDER_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case orderActions.CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        loading: false
      }
    }
    case orderActions.CREATE_ORDER_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    case orderActions.GET_ORDER_REQUEST: {
      return {
        ...state
      }
    }
    case orderActions.GET_ORDER_SUCCESS: {
      return {
        ...state
      }
    }
    case orderActions.GET_ORDER_FAIL: {
      return {
        ...state
      }
    }
    case orderActions.CHANGE_ORDER_STATUS_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case orderActions.CHANGE_ORDER_STATUS_SUCCESS: {
      const newStateOrders = [...state.data]
      const orderIndex = newStateOrders.findIndex(item => item.uuid === payload.uuid)
      if(orderIndex > -1) {
        newStateOrders[orderIndex].status = payload.status
      }
      return {
        ...state,
        data: newStateOrders,
        loading: false
      }
    }
    case orderActions.CHANGE_ORDER_STATUS_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    default:
      return state;
  }
};

export default orderReducer