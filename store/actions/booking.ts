import { bookingActions } from "../actionTypes"
import { Program } from "../ResponseTypes"
import { acceptRefuseSchedule, changeBookingStatusFail, changeBookingStatusRequest, changeBookingStatusSuccess, createBookingFail, createBookingRequest, createBookingSuccess, createProgramFail, createProgramRequest, createProgramSuccess, deleteProgramFail, deleteProgramRequest, deleteProgramSuccess, getAllProgramsFail, getAllProgramsRequest, getAllProgramsSuccess, getBookingFail, getBookingRequest, getBookingsFail, getBookingsRequest, getBookingsSuccess, getBookingSuccess, markProgramFail, markProgramRequest, markProgramSuccess, updateProgramFail, updateProgramRequest, updateProgramSuccess } from "../types"

export const _getBookingsRequest = ():getBookingsRequest => ({
  type: bookingActions.GET_BOOKINGS_REQUEST
})
export const _getBookingsSuccess = (data:object):getBookingsSuccess => ({
  type: bookingActions.GET_BOOKINGS_SUCCESS,
  payload: data
})
export const _getBookingsFail = ():getBookingsFail => ({
  type: bookingActions.GET_BOOKINGS_FAIL
})
export const _createBookingRequest = ():createBookingRequest => ({
  type: bookingActions.CREATE_BOOKING_REQUEST
})
export const _createBookingSuccess = (data:object):createBookingSuccess => ({
  type: bookingActions.CREATE_BOOKING_SUCCESS,
  payload: data
})
export const _createBookingFail = ():createBookingFail => ({
  type: bookingActions.CREATE_BOOKING_FAIL
})
export const _getBookingRequest = ():getBookingRequest => ({
  type: bookingActions.GET_BOOKING_REQUEST
})
export const _getBookingSuccess = (data:object):getBookingSuccess => ({
  type: bookingActions.GET_BOOKING_SUCCESS,
  payload: data
})
export const _getBookingFail = ():getBookingFail => ({
  type: bookingActions.GET_BOOKING_FAIL
})
export const _changeBookingStatusRequest = ():changeBookingStatusRequest => ({
  type: bookingActions.CHANGE_BOOKING_STATUS_REQUEST
})
export const _changeBookingStatusSuccess = (data: object):changeBookingStatusSuccess => ({
  type: bookingActions.CHANGE_BOOKING_STATUS_SUCCESS,
  payload: data
})
export const _changeBookingStatusFail = ():changeBookingStatusFail => ({
  type: bookingActions.CHANGE_BOOKING_STATUS_FAIL
})

export const _createProgramRequest = ():createProgramRequest => ({
  type: bookingActions.CREATE_PROGRAM_REQUEST
})
export const _createProgramSuccess = (data:Program):createProgramSuccess => ({
  type: bookingActions.CREATE_PROGRAM_SUCCESS,
  payload: data
})
export const _createProgramFail = ():createProgramFail => ({
  type: bookingActions.CREATE_PROGRAM_FAIL
})
export const _updateProgramRequest = ():updateProgramRequest => ({
  type: bookingActions.UPDATE_PROGRAM_REQUEST
})
export const _updateProgramSuccess = (data:Program):updateProgramSuccess => ({
  type: bookingActions.UPDATE_PROGRAM_SUCCESS,
  payload: data
})
export const _updateProgramFail = ():updateProgramFail => ({
  type: bookingActions.UPDATE_PROGRAM_FAIL
})
export const _deleteProgramRequest = ():deleteProgramRequest => ({
  type: bookingActions.DELETE_PROGRAM_REQUEST
})
export const _deleteProgramSuccess = ():deleteProgramSuccess => ({
  type: bookingActions.DELETE_PROGRAM_SUCCESS
})
export const _deleteProgramFail = ():deleteProgramFail => ({
  type: bookingActions.DELETE_PROGRAM_FAIL
})
export const _markProgramRequest = ():markProgramRequest => ({
  type: bookingActions.MARK_PROGRAM_REQUEST
})
export const _markProgramSuccess = (data:Program):markProgramSuccess => ({
  type: bookingActions.MARK_PROGRAM_SUCCESS,
  payload: data
})
export const _markProgramFail = ():markProgramFail => ({
  type: bookingActions.MARK_PROGRAM_FAIL
})
export const _getAllProgramsRequest = ():getAllProgramsRequest => ({
  type: bookingActions.GET_ALL_PROGRAMS_REQUEST
})
export const _getAllProgramsSuccess = (data:Program[]):getAllProgramsSuccess => ({
  type: bookingActions.GET_ALL_PROGRAMS_SUCCESS,
  payload: data
})
export const _getAllProgramsFail = ():getAllProgramsFail => ({
  type: bookingActions.GET_ALL_PROGRAMS_FAIL
})

export const _acceptRefuseSchedule = ():acceptRefuseSchedule => ({
  type: bookingActions.ACCEPT_REFUSE_SCHEDULE
})