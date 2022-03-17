import {ThunkAction} from "redux-thunk";
import salonService from "../../service/api/salonService";
import {requestErrorHandler, requestSuccessHandler} from "../../utils/common";
import {
    _getHaiDressersSalonsFail,
    _getHaiDressersSalonsRequest,
    _getHaiDressersSalonsSuccess,
    _getHaiDressersSalonRequest,
    _getHaiDressersSalonSuccess,
    _getHaiDressersSalonFail,
    _getHaiDressersRequest,
    _getHaiDressersSuccess,
    _getHaiDressersFail,
    _addHaiDresserRequest,
    _addHaiDresserSuccess,
    _addHaiDresserFail,
    _deleteHaiDresserRequest,
    _deleteHaiDresserSuccess,
    _deleteHaiDresserFail,
    _addPrestationRequest,
    _addPrestationSuccess,
    _addPrestationFail,
    _deletePrestationRequest,
    _deletePrestationSuccess,
    _deletePrestationFail,
    _updatePrestationRequest,
    _updatePrestationSuccess,
    _updatePrestationFail,
    _getHairstyleInspirationsRequest,
    _getHairstyleInspirationsSuccess,
    _getHairstyleInspirationsFail,
    _getHairstyleInspirationRequest,
    _getHairstyleInspirationSuccess,
    _getHairstyleInspirationFail,
    _updateHairdressingSalonRequest,
    _updateHairdressingSalonSuccess,
    _updateHairdressingSalonFail,
    _updateSalonFeesRequest,
    _updateSalonFeesSuccess,
    _updateSalonFeesFail,
    _addRemoveSalonFavoriteRequest,
    _addRemoveSalonFavoriteSuccess,
    _addRemoveSalonFavoriteFail
} from "../actions/salon";
import {salonState, ApplicationAction} from "../types";

type Effect = ThunkAction<any, salonState, any, ApplicationAction>;

export const getHaiDressersSalonsEffect =
    (range: object): Effect =>
        async (dispatch, getState) => {
            dispatch(_getHaiDressersSalonsRequest());
            try {
                const res = await salonService.getHaiDressersSalons(range);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => dispatch(_getHaiDressersSalonsSuccess(data)),
                    () => dispatch(_getHaiDressersSalonsFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_getHaiDressersSalonsFail()));
            }
        };

export const getHairstyleInspirationsEffect =
    (range: object): Effect =>
        async (dispatch, getState) => {
            dispatch(_getHairstyleInspirationsRequest());
            try {
                const res = await salonService.getHairstyleInspirations(range);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => dispatch(_getHairstyleInspirationsSuccess(data)),
                    () => dispatch(_getHairstyleInspirationsFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_getHairstyleInspirationsFail()));
            }
        };

export const getHaiDressersSalonEffect =
    (uuid: string): Effect =>
        async (dispatch, getState) => {
            dispatch(_getHaiDressersSalonRequest());
            try {
                const res = await salonService.getHaiDressersSalon(uuid);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => dispatch(_getHaiDressersSalonSuccess(data)),
                    () => dispatch(_getHaiDressersSalonFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_getHaiDressersSalonFail()));
            }
        };

export const getHairstyleInspirationEffect =
    (uuid: string): Effect =>
        async (dispatch, getState) => {
            dispatch(_getHairstyleInspirationRequest());
            try {
                const res = await salonService.getHairstyleInspiration(uuid);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => dispatch(_getHairstyleInspirationSuccess(data)),
                    () => dispatch(_getHairstyleInspirationFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_getHairstyleInspirationFail()));
            }
        };

export const updateHairdressingSalonEffect =
    (payload: object, cb = () => undefined, onFailled = () => undefined): Effect =>
        async (dispatch, getState) => {
            dispatch(_updateHairdressingSalonRequest());
            try {
                const res = await salonService.updateHairdressingSalon(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_updateHairdressingSalonSuccess(data))
                        cb()
                    },
                    () => {
                        onFailled();
                        dispatch(_updateHairdressingSalonFail());
                    }
                );
            } catch (error) {
                onFailled()
                requestErrorHandler(() => dispatch(_updateHairdressingSalonFail()));
            }
        };

export const getHaiDressersEffect =
    (): Effect =>
        async (dispatch, getState) => {
            dispatch(_getHaiDressersRequest());
            try {
                const res = await salonService.getHaiDressers();
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => dispatch(_getHaiDressersSuccess(data)),
                    () => dispatch(_getHaiDressersFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_getHaiDressersFail()));
            }
        };

export const addHaiDresserEffect =
    (payload: object, cb): Effect =>
        async (dispatch, getState) => {
            dispatch(_addHaiDresserRequest());
            try {
                const res = await salonService.addHairdresser(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_addHaiDresserSuccess(data))
                        cb()
                    },
                    () => dispatch(_addHaiDresserFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_addHaiDresserFail()));
            }
        };

export const deleteHaiDresserEffect =
    (uuid: string, cb): Effect =>
        async (dispatch, getState) => {
            dispatch(_deleteHaiDresserRequest());
            try {
                const res = await salonService.deleteHairdresser(uuid);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_deleteHaiDresserSuccess({uuid}))
                        cb()
                    },
                    () => dispatch(_deleteHaiDresserFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_deleteHaiDresserFail()));
            }
        };

// Handle by AUTH-REDUCER
export const addPrestationEffect =
    (payload: object, cb): Effect =>
        async (dispatch, getState) => {
            dispatch(_addPrestationRequest());
            try {
                const res = await salonService.addPrestation(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_addPrestationSuccess(data))
                        cb()
                    },
                    () => dispatch(_addPrestationFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_addPrestationFail()));
            }
        };

// Handle by AUTH-REDUCER
export const updatePrestationEffect =
    (payload: object, cb): Effect =>
        async (dispatch, getState) => {
            dispatch(_updatePrestationRequest());
            try {
                const res = await salonService.updatePrestation(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_updatePrestationSuccess(data))
                        cb()
                    },
                    () => dispatch(_updatePrestationFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_updatePrestationFail()));
            }
        };

// Handle by AUTH-REDUCER
export const deletePrestationEffect =
    (uuid: string, cb): Effect =>
        async (dispatch, getState) => {
            dispatch(_deletePrestationRequest());
            try {
                const res = await salonService.deletePrestation(uuid);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_deletePrestationSuccess({uuid}))
                        cb()
                    },
                    () => dispatch(_deletePrestationFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_deletePrestationFail()));
            }
        };
        
export const updateSalonFeesEffect =
(payload: object, cb = (data) => undefined): Effect =>
    async (dispatch, getState) => {
        dispatch(_updateSalonFeesRequest());
        try {
            const res = await salonService.updateSalonFees(payload);
            const data = await res.json();
            requestSuccessHandler(
                res.status, data?.detail,
                () => {
                    dispatch(_updateSalonFeesSuccess(data))
                    cb(data)
                },
                () => dispatch(_updateSalonFeesFail())
            );
        } catch (error) {
            requestErrorHandler(() => dispatch(_updateSalonFeesFail()));
        }
    };


    export const addRemoveSalonFavoriteEffect =
    (payload: object): Effect =>
        async (dispatch, getState) => {
            dispatch(_addRemoveSalonFavoriteRequest());
            try {
                const res = await salonService.addRemoveSalonFavorite(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => dispatch(_addRemoveSalonFavoriteSuccess(payload)),
                    () => dispatch(_addRemoveSalonFavoriteFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_addRemoveSalonFavoriteFail()));
            }
        };
