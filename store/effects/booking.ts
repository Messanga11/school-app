import { ThunkAction } from "redux-thunk";
import bookingService from "../../service/api/bookingService";
import { requestErrorHandler, requestSuccessHandler } from "../../utils/common";
import { _changeBookingStatusFail, _changeBookingStatusRequest, _changeBookingStatusSuccess, _createBookingFail, _createBookingRequest, _createBookingSuccess, _createProgramFail, _createProgramRequest, _createProgramSuccess, _deleteProgramFail, _deleteProgramRequest, _deleteProgramSuccess, _getAllProgramsFail, _getAllProgramsRequest, _getAllProgramsSuccess, _getBookingFail, _getBookingRequest, _getBookingsFail, _getBookingsRequest, _getBookingsSuccess, _getBookingSuccess, _markProgramFail, _markProgramRequest, _markProgramSuccess, _updateProgramFail, _updateProgramRequest, _updateProgramSuccess } from "../actions/booking";
import { BookingState, ApplicationAction } from "../types";

type Effect = ThunkAction<any, BookingState, any, ApplicationAction>;

export const getBookingsEffect =
(range: {}, cb = (bookings=[]) => undefined): Effect =>
async (dispatch, getState) => {
  dispatch(_getBookingsRequest());
  try {
    const res = await bookingService.getBookings(range);
    const data = await res.json();
    requestSuccessHandler(
      res.status, data?.detail,
      () => {
        dispatch(_getBookingsSuccess(data))
        cb(data.data)
      },
      () => dispatch(_getBookingsFail())
    );
  } catch (error) {
    requestErrorHandler(() => dispatch(_getBookingsFail()));
  }
};

export const createBookingEffect =
(payload:object, cb = () => undefined): Effect =>
async (dispatch, getState) => {
  dispatch(_createBookingRequest());
  try {
    const res = await bookingService.createBooking(payload);
    const data = await res.json();
    requestSuccessHandler(
      res.status, data?.detail,
      () => {
        dispatch(_createBookingSuccess(data))
        cb()
      },
      () => dispatch(_createBookingFail())
    );
  } catch (error) {
    requestErrorHandler(() => dispatch(_createBookingFail()));
  }
};

export const getBookingEffect =
(uuid:string): Effect =>
async (dispatch, getState) => {
  dispatch(_getBookingRequest());
  try {
    const res = await bookingService.getBooking(uuid);
    const data = await res.json();
    requestSuccessHandler(
      res.status, data?.detail,
      () => dispatch(_getBookingSuccess(data)),
      () => dispatch(_getBookingFail())
    );
  } catch (error) {
    requestErrorHandler(() => dispatch(_getBookingFail()));
  }
};

export const changeBookingStatusEffect =
(payload:object): Effect =>
async (dispatch, getState) => {
  dispatch(_changeBookingStatusRequest());
  try {
    const res = await bookingService.changeBookingStatus(payload);
    const data = await res.json();
    requestSuccessHandler(
      res.status, data?.detail,
      () => dispatch(_changeBookingStatusSuccess(data)),
      () => dispatch(_changeBookingStatusFail())
    );
  } catch (error) {
    requestErrorHandler(() => dispatch(_changeBookingStatusFail()));
  }
};

export const getAllProgramsEffect =
(range: {}, cb = (programs=[]) => undefined): Effect =>
async (dispatch, getState) => {
  dispatch(_getAllProgramsRequest());
  try {
    const res = await bookingService.getAllPrograms(range);
    const data = await res.json();
    requestSuccessHandler(
      res.status, data?.detail,
      () => {
        dispatch(_getAllProgramsSuccess(data))
        cb(data)
      },
      () => dispatch(_getAllProgramsFail())
    );
  } catch (error) {
    requestErrorHandler(() => dispatch(_getAllProgramsFail()));
  }
};

export const createProgramEffect =
(range: {}, cb = () => undefined): Effect =>
async (dispatch, getState) => {
  dispatch(_createProgramRequest());
  try {
    const res = await bookingService.createProgram(range);
    const data = await res.json();
    requestSuccessHandler(
      res.status, data?.detail,
      () => {
        dispatch(_createProgramSuccess(data))
        cb()
      },
      () => dispatch(_createProgramFail())
    );
  } catch (error) {
    requestErrorHandler(() => dispatch(_createProgramFail()));
  }
};

export const updateProgramEffect =
(range: {}, cb = () => undefined): Effect =>
async (dispatch, getState) => {
  dispatch(_updateProgramRequest());
  try {
    const res = await bookingService.updateProgram(range);
    const data = await res.json();
    requestSuccessHandler(
      res.status, data?.detail,
      () => {
        dispatch(_updateProgramSuccess(data))
        cb()
      },
      () => dispatch(_updateProgramFail())
    );
  } catch (error) {
    requestErrorHandler(() => dispatch(_updateProgramFail()));
  }
};

export const deleteProgramEffect =
(range: {}, cb = (message:string) => undefined): Effect =>
async (dispatch, getState) => {
  dispatch(_deleteProgramRequest());
  try {
    const res = await bookingService.deleteProgram(range);
    const data = await res.json();
    requestSuccessHandler(
      res.status, data?.detail,
      () => {
        dispatch(_deleteProgramSuccess())
        cb(data?.detail ?? data?.message)
      },
      () => dispatch(_deleteProgramFail())
    );
  } catch (error) {
    requestErrorHandler(() => dispatch(_deleteProgramFail()));
  }
};

export const markProgramEffect =
(range: {}, cb = () => undefined): Effect =>
async (dispatch, getState) => {
  dispatch(_markProgramRequest());
  try {
    const res = await bookingService.markProgram(range);
    const data = await res.json();
    requestSuccessHandler(
      res.status, data?.detail,
      () => {
        dispatch(_markProgramSuccess(data))
        cb()
      },
      () => dispatch(_markProgramFail())
    );
  } catch (error) {
    requestErrorHandler(() => dispatch(_markProgramFail()));
  }
};

export const acceptRefuseScheduleEffect =
(range: {}, setLoading, toast, cb = () => undefined): Effect =>
async (dispatch, getState) => {
  try {
    const res = await bookingService.acceptRefuseSchedule(range);
    const data = await res.json();
    if(res.status === 200 || res.status === 201) {
      toast.success(data?.message)
    } else {
      toast.error(data?.detail)
    }
  } catch (error) {
    toast.error("something_went_wrong")
  }
};