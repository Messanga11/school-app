import { authActions } from "../actionTypes"
import { confirmAccountFail, confirmAccountRequest, confirmAccountSuccess, createClientFail, createClientRequest, createClientSuccess, createNewProfileFail, createNewProfileRequest, createNewProfileSuccess, createProFail, createProRequest, createProSuccess, deleteProfileFail, deleteProfileRequest, deleteProfileSuccess, getArticlesFail, getArticlesRequest, getArticlesSuccess, getGlobalDataFail, getGlobalDataRequest, getGlobalDataSuccess, getHomePageFail, getHomePageRequest, getHomePageSuccess, getLastRecievedMsgFail, getLastRecievedMsgRequest, getLastRecievedMsgSuccess, getParcoursFail, getParcoursRequest, getParcoursSuccess, getStatsFail, getStatsRequest, getStatsSuccess, getUserFail, getUserRequest, getUserSuccess, loginClientFail, loginClientRequest, loginClientSuccess, loginFacebookFail, loginFacebookRequest, loginFacebookSuccess, loginProFail, loginProRequest, loginProSuccess, logOut, recoverPasswordFail, recoverPasswordRequest, recoverPasswordSuccess, resetPasswordFail, resetPasswordRequest, resetPasswordSuccess, subscribeToFormula, updatePreferencesFail, updatePreferencesRequest, updatePreferencesSuccess, updateProfileFail, updateProfileRequest, updateProfileSuccess, updateUserInfos } from "../types"

export const _getGlobalDataRequest = (): getGlobalDataRequest => ({
  type: authActions.GET_GLOBAL_DATA_REQUEST
})
export const _getGlobalDataSuccess = (data:object): getGlobalDataSuccess => ({
  type: authActions.GET_GLOBAL_DATA_SUCCESS,
  payload: data
})
export const _getGlobalDataFail = (): getGlobalDataFail => ({
  type: authActions.GET_GLOBAL_DATA_FAIL
})
export const _loginClientRequest = (): loginClientRequest => ({
  type: authActions.LOGIN_CLIENT_REQUEST
})
export const _loginClientSuccess = (data:object): loginClientSuccess => ({
    type: authActions.LOGIN_CLIENT_SUCCESS,
  payload: data
})
export const _logOut = (): logOut => ({
  type: authActions.LOGOUT
})
export const _loginClientFail = (): loginClientFail => ({
  type: authActions.LOGIN_CLIENT_FAIL
})
export const _loginProRequest = (): loginProRequest => ({
  type: authActions.LOGIN_PRO_REQUEST
})
export const _loginProSuccess = (data:object): loginProSuccess => ({
  type: authActions.LOGIN_PRO_SUCCESS,
  payload: data
})
export const _loginProFail = (): loginProFail => ({
  type: authActions.LOGIN_PRO_FAIL
})
export const _loginFacebookRequest = (): loginFacebookRequest => ({
  type: authActions.LOGIN_FACEBOOK_REQUEST
})
export const _loginFacebookSuccess = (data:object): loginFacebookSuccess => ({
  type: authActions.LOGIN_FACEBOOK_SUCCESS,
  payload: data
})
export const _loginFacebookFail = (): loginFacebookFail => ({
  type: authActions.LOGIN_FACEBOOK_FAIL
})
export const _createClientRequest = (): createClientRequest => ({
  type: authActions.CREATE_CLIENT_REQUEST
})
export const _createClientSuccess = (data:object): createClientSuccess => ({
  type: authActions.CREATE_CLIENT_SUCCESS,
  payload: data
})
export const _createClientFail = (): createClientFail => ({
  type: authActions.CREATE_CLIENT_FAIL
})
export const _createProRequest = (): createProRequest => ({
  type: authActions.CREATE_PRO_REQUEST
})
export const _createProSuccess = (data:object): createProSuccess => ({
  type: authActions.CREATE_PRO_SUCCESS,
  payload: data
})
export const _createProFail = (): createProFail => ({
  type: authActions.CREATE_PRO_FAIL
})
export const _confirmAccountRequest = (): confirmAccountRequest => ({
  type: authActions.CONFIRM_ACCOUNT_REQUEST
})
export const _confirmAccountSuccess = (data:object): confirmAccountSuccess => ({
  type: authActions.CONFIRM_ACCOUNT_SUCCESS,
  payload: data
})
export const _confirmAccountFail = (): confirmAccountFail => ({
  type: authActions.CONFIRM_ACCOUNT_FAIL
})
export const _getUserRequest = (): getUserRequest => ({
  type: authActions.GET_USER_REQUEST
})
export const _getUserSuccess = (data:object): getUserSuccess => ({
  type: authActions.GET_USER_SUCCESS,
  payload: data
})
export const _getUserFail = (): getUserFail => ({
  type: authActions.GET_USER_FAIL
})
export const _recoverPasswordRequest = (): recoverPasswordRequest => ({
  type: authActions.RECOVER_PASSWORD_REQUEST
})
export const _recoverPasswordSuccess = (data:object): recoverPasswordSuccess => ({
  type: authActions.RECOVER_PASSWORD_SUCCESS,
  payload: data
})
export const _recoverPasswordFail = (): recoverPasswordFail => ({
  type: authActions.RECOVER_PASSWORD_FAIL
})
export const _resetPasswordRequest = (): resetPasswordRequest => ({
  type: authActions.RESET_PASSWORD_REQUEST
})
export const _resetPasswordSuccess = (data:object): resetPasswordSuccess => ({
  type: authActions.RESET_PASSWORD_SUCCESS,
  payload: data
})
export const _resetPasswordFail = (): resetPasswordFail => ({
  type: authActions.RESET_PASSWORD_FAIL
})
export const _updatePreferencesRequest = (): updatePreferencesRequest => ({
  type: authActions.UPDATE_PREFERENCES_REQUEST
})
export const _updatePreferencesSuccess = (data:object): updatePreferencesSuccess => ({
  type: authActions.UPDATE_PREFERENCES_SUCCESS,
  payload: data
})
export const _updatePreferencesFail = (): updatePreferencesFail => ({
  type: authActions.UPDATE_PREFERENCES_FAIL
})
export const _createNewProfileRequest = (): createNewProfileRequest => ({
  type: authActions.UPDATE_PREFERENCES_REQUEST
})
export const _createNewProfileSuccess = (data:object): createNewProfileSuccess => ({
  type: authActions.UPDATE_PREFERENCES_SUCCESS,
  payload: data
})
export const _createNewProfileFail = (): createNewProfileFail => ({
  type: authActions.UPDATE_PREFERENCES_FAIL
})
export const _updateUserInfos = (data:object): updateUserInfos => ({
  type: authActions.UPDATE_USER_INFOS,
  payload: data
})

export  const _updateProfileRequest = ():updateProfileRequest => ({
  type: authActions.UPDATE_PROFILE_REQUEST
})
export  const _updateProfileSuccess = (data):updateProfileSuccess => ({
  type: authActions.UPDATE_PROFILE_SUCCESS,
  payload: data
})
export  const _updateProfileFail = ():updateProfileFail => ({
  type: authActions.UPDATE_PROFILE_FAIL
})

export  const _deleteProfileRequest = ():deleteProfileRequest => ({
  type: authActions.DELETE_PROFILE_REQUEST
})
export  const _deleteProfileSuccess = (data):deleteProfileSuccess => ({
  type: authActions.DELETE_PROFILE_SUCCESS,
  payload: data
})
export  const _deleteProfileFail = ():deleteProfileFail => ({
  type: authActions.DELETE_PROFILE_FAIL
})

export  const _getParcoursRequest = ():getParcoursRequest => ({
  type: authActions.GET_PARCOURS_REQUEST
})
export  const _getParcoursSuccess = (data):getParcoursSuccess => ({
  type: authActions.GET_PARCOURS_SUCCESS,
  payload: data
})
export  const _getParcoursFail = ():getParcoursFail => ({
  type: authActions.GET_PARCOURS_FAIL
})

export  const _getStatsRequest = ():getStatsRequest => ({
  type: authActions.GET_STATS_REQUEST
})
export  const _getStatsSuccess = (data):getStatsSuccess => ({
  type: authActions.GET_STATS_SUCCESS,
  payload: data
})
export  const _getStatsFail = ():getStatsFail => ({
  type: authActions.GET_STATS_FAIL
})

export  const _getArticlesRequest = ():getArticlesRequest => ({
  type: authActions.GET_ARTICLES_REQUEST
})
export  const _getArticlesSuccess = (data):getArticlesSuccess => ({
  type: authActions.GET_ARTICLES_SUCCESS,
  payload: data
})
export  const _getArticlesFail = ():getArticlesFail => ({
  type: authActions.GET_ARTICLES_FAIL
})

export  const _getHomePageRequest = ():getHomePageRequest => ({
  type: authActions.GET_HOMEPAGE_INFOS_REQUEST
})
export  const _getHomePageSuccess = (data):getHomePageSuccess => ({
  type: authActions.GET_HOMEPAGE_INFOS_SUCCESS,
  payload: data
})
export  const _getHomePageFail = ():getHomePageFail => ({
  type: authActions.GET_HOMEPAGE_INFOS_FAIL
})

export  const _getLastRecievedMsgRequest = ():getLastRecievedMsgRequest => ({
  type: authActions.GET_LAST_RECIEVED_MSG_REQUEST
})
export  const _getLastRecievedMsgSuccess = (data):getLastRecievedMsgSuccess => ({
  type: authActions.GET_LAST_RECIEVED_MSG_SUCCESS,
  payload: data
})
export  const _getLastRecievedMsgFail = ():getLastRecievedMsgFail => ({
  type: authActions.GET_LAST_RECIEVED_MSG_FAIL
})
export  const _subscribeToFormula = (data):subscribeToFormula => ({
  type: authActions.SUBSCRIBE_TO_FORMULA,
  payload: data
})