import { LoginResponse, LoginSuccess, LOGIN_SUCCESS, LOGOUT, Logout, Student } from "../types";
import { GET_AUTH_INFOS_SUCCESS, GetAuthInfosSuccess, User, UPDATE_AUTH_INFOS_SUCCESS, UpdateAuthInfosSuccess } from '../types/Auth';

export const loginSuccess = (data:LoginResponse):LoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload: data
})

export const getAuthInfosSuccess = (data:User):GetAuthInfosSuccess => ({
  type: GET_AUTH_INFOS_SUCCESS,
  payload: data
})

export const updateAuthInfosSuccess = (data:User):UpdateAuthInfosSuccess => ({
  type: UPDATE_AUTH_INFOS_SUCCESS,
  payload: data
})

export const logout = ():Logout => ({
  type: LOGOUT,
  payload: null
})