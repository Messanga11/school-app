import {ThunkAction} from "redux-thunk";
import authService from "../../service/api/authService";
import {globalDataFallback, requestErrorHandler, requestSuccessHandler} from "../../utils/common";
import {
    _confirmAccountFail,
    _confirmAccountRequest,
    _confirmAccountSuccess,
    _createClientFail,
    _createClientRequest,
    _createClientSuccess,
    _createNewProfileFail,
    _createNewProfileRequest,
    _createNewProfileSuccess,
    _createProFail,
    _createProRequest,
    _createProSuccess,
    _deleteProfileFail,
    _deleteProfileRequest,
    _deleteProfileSuccess,
    _getArticlesFail,
    _getArticlesRequest,
    _getArticlesSuccess,
    _getGlobalDataRequest,
    _getGlobalDataSuccess,
    _getHomePageFail,
    _getHomePageRequest,
    _getHomePageSuccess,
    _getLastRecievedMsgFail,
    _getLastRecievedMsgRequest,
    _getLastRecievedMsgSuccess,
    _getParcoursFail,
    _getParcoursRequest,
    _getParcoursSuccess,
    _getStatsFail,
    _getStatsRequest,
    _getStatsSuccess,
    _getUserFail,
    _getUserRequest,
    _getUserSuccess,
    _loginClientFail,
    _loginClientRequest,
    _loginClientSuccess,
    _loginFacebookFail,
    _loginFacebookRequest,
    _loginFacebookSuccess,
    _loginProFail,
    _loginProRequest,
    _loginProSuccess,
    _recoverPasswordFail,
    _recoverPasswordRequest,
    _recoverPasswordSuccess,
    _resetPasswordFail,
    _resetPasswordRequest,
    _resetPasswordSuccess,
    _updatePreferencesFail,
    _updatePreferencesRequest,
    _updatePreferencesSuccess,
    _updateProfileFail,
    _updateProfileRequest,
    _updateProfileSuccess,
    _updateUserInfos
} from "../actions/auth";
import { authActions } from "../actionTypes";
import {ApplicationAction, AuthState} from "../types";

type Effect = ThunkAction<any, AuthState, any, ApplicationAction>;

export const loginClientEffect =
    (payload: object, cb, cb401 = () => undefined): Effect =>
        async (dispatch, getState) => {
            dispatch(_loginClientRequest());
            try {
                const res = await authService.loginClient(payload);
                const data = await res.json();
                if (res.status === 401) {
                    cb401()
                }
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_loginClientSuccess(data))
                        cb()
                    },
                    () => dispatch(_loginClientFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_loginClientFail()));
            }
        };
export const loginWithoutAccountEffect =
    (cb, cbError = () => undefined): Effect =>
        async (dispatch, getState) => {
            dispatch(_loginClientRequest());
            try {
                const res = await authService.withoutAccount();
                const data = await res.json();
                if (res.status !== 200 || res.status !== 201) {
                    cbError()
                }
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_loginClientSuccess(data))
                        cb()
                    },
                    () => dispatch(_loginClientFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_loginClientFail()));
            }
        };

export const loginProEffect =
    (payload: object, cb, cb401 = () => undefined): Effect =>
        async (dispatch, getState) => {
            dispatch(_loginProRequest());
            try {
                const res = await authService.loginPro(payload);
                const data = await res.json();
                if (res.status === 401) {
                    cb401()
                }
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_loginProSuccess(data))
                        cb()
                    },
                    () => dispatch(_loginProFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_loginProFail()));
            }
        };

export const loginFacebookEffect =
    (payload: object): Effect =>
        async (dispatch, getState) => {
            dispatch(_loginFacebookRequest());
            try {
                const res = await authService.loginFacebook(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => dispatch(_loginFacebookSuccess(data)),
                    () => dispatch(_loginFacebookFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_loginFacebookFail()));
            }
        };

export const createClientEffect =
    (payload: object, cb: () => void, ErrCb = () => undefined): Effect =>
        async (dispatch, getState) => {
            dispatch(_createClientRequest());
            try {
                const res = await authService.createClient(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_createClientSuccess(data))
                        cb()
                    },
                    () => {
                        dispatch(_createClientFail())
                        if (res.status === 409) {
                            ErrCb()
                        }
                    }
                );
            } catch (error) {
                requestErrorHandler(() => {
                    dispatch(_createClientFail())
                });
            }
        };

export const createProEffect =
    (payload: object, cb = () => undefined): Effect =>
        async (dispatch, getState) => {
            dispatch(_createProRequest());
            try {
                const res = await authService.createPro(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_createProSuccess(data))
                        cb()
                    },
                    () => dispatch(_createProFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_createProFail()));
            }
        };

export const confirmAccountEffect =
    (code: string, type = "client", history = {push: (url: string) => undefined}): Effect =>
        async (dispatch, getState) => {
            dispatch(_confirmAccountRequest());
            try {
                const res = await authService.confirmAccount(code);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_confirmAccountSuccess(data))
                        if (type === "client") {
                            dispatch(_loginClientSuccess(data))
                            history.push("/login/preferences")
                        } else {
                            dispatch(_loginProSuccess(data))
                            history.push("/pro/home")
                        }
                    },
                    () => dispatch(_confirmAccountFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_confirmAccountFail()));
            }
        };

export const updatePreferencesEffect =
    (payload: object, cb): Effect =>
        async (dispatch, getState) => {
            dispatch(_updatePreferencesRequest());
            try {
                const res = await authService.updatePreferences(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_updatePreferencesSuccess(data))
                        cb()
                    },
                    () => dispatch(_updatePreferencesFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_updatePreferencesFail()));
            }
        };


export const getUserEffect =
    (): Effect =>
        async (dispatch, getState) => {
            dispatch(_getUserRequest());
            try {
                const res = await authService.getUser();
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => dispatch(_getUserSuccess(data)),
                    () => dispatch(_getUserFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_getUserFail()));
            }
        };

export const createNewProfileEffect =
    (payload: object, cb): Effect =>
        async (dispatch, getState) => {
            dispatch(_createNewProfileRequest());
            try {
                const res = await authService.createNewProfile(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_createNewProfileSuccess(data))
                        dispatch(getUserEffect())
                        cb()
                    },
                    () => dispatch(_createNewProfileFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_createNewProfileFail()));
            }
        };

export const recoverPasswordEffect =
    (email: string, successFunction): Effect =>
        async (dispatch, getState) => {
            dispatch(_recoverPasswordRequest());
            try {
                const res = await authService.recoverPassword(email);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        successFunction()
                        dispatch(_recoverPasswordSuccess(data))
                    },
                    () => dispatch(_recoverPasswordFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_recoverPasswordFail()));
            }
        };

export const resetPasswordEffect =
    (payload: object): Effect =>
        async (dispatch, getState) => {
            dispatch(_resetPasswordRequest());
            try {
                const res = await authService.resetPassword(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => dispatch(_resetPasswordSuccess(data)),
                    () => dispatch(_resetPasswordFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_resetPasswordFail()));
            }
        };

export const updateProfileEffect =
    (payload: object, cb = () => undefined, onFailed = () => undefined): Effect =>
        async (dispatch, getState) => {
            dispatch(_updateProfileRequest());
            try {
                const res = await authService.updateProfile(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_updateProfileSuccess(data))
                        cb()
                    },
                    () => {
                        onFailed();
                        return dispatch(_updateProfileFail());
                    }
                );
            } catch (error) {
                onFailed();
                requestErrorHandler(() => dispatch(_updateProfileFail()));
            }
        };

export const deleteProfileEffect =
    (payload: object, cb = () => undefined, onFailed = () => undefined): Effect =>
        async (dispatch, getState) => {
            dispatch(_deleteProfileRequest());
            try {
                const res = await authService.deleteProfile(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_deleteProfileSuccess(data))
                        cb()
                    },
                    () => {
                        onFailed()
                        return dispatch(_deleteProfileFail());
                    }
                );
            } catch (error) {
                onFailed()
                requestErrorHandler(() => dispatch(_deleteProfileFail()));
            }
        };

export const getStatsEffect =
    (): Effect =>
        async (dispatch, getState) => {
            dispatch(_getStatsRequest());
            try {
                const res = await authService.getStats();
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => dispatch(_getStatsSuccess(data)),
                    () => dispatch(_getStatsFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_getStatsFail()));
            }
        };

export const getParcoursEffect =
    (payload: object): Effect =>
        async (dispatch, getState) => {
            dispatch(_getParcoursRequest());
            try {
                const res = await authService.getParcours(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => dispatch(_getParcoursSuccess(data)),
                    () => dispatch(_getParcoursFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_getParcoursFail()));
            }
        };

export const getGlobalDataEffect =
    (): Effect =>
        async (dispatch, getState) => {
            dispatch(_getGlobalDataRequest());
            try {
                const res = await authService.getGlobalData();
                const data = await res.json();
                dispatch(_getGlobalDataSuccess(data))
                // requestSuccessHandler(
                //   res.status, data?.detail,
                //   () => ),
                //   () => dispatch(_getGlobalDataFail())
                // );
            } catch (error) {
                dispatch(_getGlobalDataSuccess(globalDataFallback))
                // requestErrorHandler(() => dispatch(_getGlobalDataFail()));
            }
        };

export const updateUserInfosEffect =
    (): Effect =>
        async (dispatch, getState) => {
            try {
                const res = await authService.getUserInfos();
                const data = await res.json();
                dispatch(_updateUserInfos(data))
                dispatch(getUserEffect())
                // requestSuccessHandler(
                //   res.status, data?.detail,
                //   () => ),
                //   () => dispatch(_getGlobalDataFail())
                // );
            } catch (error) {
                // requestErrorHandler(() => dispatch(_getGlobalDataFail()));
            }
        };

export const getArticlesEffect =
(payload: object, cb = () => undefined, onFailed = () => undefined): Effect =>
    async (dispatch, getState) => {
        dispatch(_getArticlesRequest());
        try {
            const res = await authService.getArticles(payload);
            const data = await res.json();
            requestSuccessHandler(
                res.status, data?.detail,
                () => {
                    dispatch(_getArticlesSuccess(data))
                    cb()
                },
                () => {
                    onFailed()
                    return dispatch(_getArticlesFail());
                }
            );
        } catch (error) {
            onFailed()
            requestErrorHandler(() => dispatch(_getArticlesFail()));
        }
    };

export const getHomePageEffect =
(payload: object, cb = () => undefined, onFailed = () => undefined): Effect =>
    async (dispatch, getState) => {
        dispatch(_getHomePageRequest());
        try {
            const res = await authService.getHomePage(payload);
            const data = await res.json();
            requestSuccessHandler(
                res.status, data?.detail,
                () => {
                    dispatch(_getHomePageSuccess(data))
                    cb()
                },
                () => {
                    onFailed()
                    return dispatch(_getHomePageFail());
                }
            );
        } catch (error) {
            onFailed()
            requestErrorHandler(() => dispatch(_getHomePageFail()));
        }
    };

export const getLastRecievedMsgEffect =
(cb = () => undefined): Effect =>
    async (dispatch, getState) => {
        dispatch(_getLastRecievedMsgRequest());
        try {
            const res = await authService.getLastRecievedMsg();
            const data = await res.json();
            requestSuccessHandler(
                res.status, data?.detail,
                () => {
                    dispatch(_getLastRecievedMsgSuccess(data))
                    cb()
                },
                () => {
                    return dispatch(_getLastRecievedMsgFail());
                }
            );
        } catch (error) {
            requestErrorHandler(() => dispatch(_getLastRecievedMsgFail()));
        }
    };

export const subscribeToFormula =
(payload, range, setLoading, toast, t, cb = () => undefined): Effect =>
    async (dispatch, getState) => {
        setLoading(true)
        try {
            const res = await authService.subscribeToFormula(payload, range);
            const data = await res.json();
            if(res.status === 200 || res.status === 201) {
                dispatch({
                    type: authActions.UPDATE_SALON,
                    payload: {
                        formula: range
                    }
                })
                toast.success(t("your_subscribstion_has_been_done"))
                cb()
            } else {
                toast.error(data?.detail)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.error(t("unexpected_error_text"))
        }
    };
