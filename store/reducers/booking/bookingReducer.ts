import { bookingActions } from "../../actionTypes";
import { ApplicationAction, BookingState } from "../../types";

const initialState: BookingState = {
  total: 0,
  current_page: 0,
  pages: 0,
  per_page: 0,
  data: [],
  loading: false,
  loadingPrograms: false,
  program: []
};

const bookingReducer = (state = initialState, { type, payload }: ApplicationAction) => {
  switch (type) {
   
    case bookingActions.GET_BOOKINGS_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case bookingActions.GET_BOOKINGS_SUCCESS: {
      return {
        ...state,
        ...payload,
        loading: false
      }
    }
    case bookingActions.GET_BOOKINGS_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    case bookingActions.CREATE_BOOKING_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case bookingActions.CREATE_BOOKING_SUCCESS: {
      return {
        ...state,
        loading: false
      }
    }
    case bookingActions.CREATE_BOOKING_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    case bookingActions.GET_BOOKING_REQUEST: {
      return {
        ...state
      }
    }
    case bookingActions.GET_BOOKING_SUCCESS: {
      return {
        ...state
      }
    }
    case bookingActions.GET_BOOKING_FAIL: {
      return {
        ...state
      }
    }
    case bookingActions.CHANGE_BOOKING_STATUS_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case bookingActions.CHANGE_BOOKING_STATUS_SUCCESS: {
      const newStateBookings = [...state.data]
      const bookingIndex = newStateBookings.findIndex(item => item.uuid === payload.uuid)
      if(bookingIndex > -1) {
        newStateBookings[bookingIndex].status = payload.status
      }
      return {
        ...state,
        data: newStateBookings,
        loading: false
      }
    }
    case bookingActions.CHANGE_BOOKING_STATUS_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    
    case bookingActions.GET_ALL_PROGRAMS_REQUEST: {
      return {
        ...state,
        loadingPrograms: true
      }
    }
    case bookingActions.GET_ALL_PROGRAMS_SUCCESS: {
      return {
        ...state,
        program: payload,
        loadingPrograms: false
      }
    }
    case bookingActions.GET_ALL_PROGRAMS_FAIL: {
      return {
        ...state,
        loadingPrograms: false
      }
    }
    
    case bookingActions.CREATE_PROGRAM_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case bookingActions.CREATE_PROGRAM_SUCCESS: {
      return {
        ...state,
        loading: false
      }
    }
    case bookingActions.CREATE_PROGRAM_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    
    case bookingActions.UPDATE_PROGRAM_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case bookingActions.UPDATE_PROGRAM_SUCCESS: {
      return {
        ...state,
        loading: false
      }
    }
    case bookingActions.UPDATE_PROGRAM_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    
    case bookingActions.DELETE_PROGRAM_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case bookingActions.DELETE_PROGRAM_SUCCESS: {
      return {
        ...state,
        loading: false
      }
    }
    case bookingActions.DELETE_PROGRAM_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    
    case bookingActions.MARK_PROGRAM_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case bookingActions.MARK_PROGRAM_SUCCESS: {
      return {
        ...state,
        loading: false
      }
    }
    case bookingActions.MARK_PROGRAM_FAIL: {
      return {
        ...state,
        loading: false
      }
    }

    default:
      return state;
  }
};

export default bookingReducer