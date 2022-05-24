import AuthService from "@/services/AuthService";
import { getAuthInfosSuccess, loginSuccess, logout, updateAuthInfosSuccess } from '../actions/auth';
import { Effect, EffectRange } from "../types";
import { basicEffectFunction } from "./shared";

export const loginEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, AuthService.login, dispatch, loginSuccess)

export const getUserInfosEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, AuthService.getAuthInfos, dispatch, getAuthInfosSuccess, true)

export const updateUserInfosEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, AuthService.updateAuthInfos, dispatch, updateAuthInfosSuccess)

export const logoutEffect = ():Effect => async (dispatch) => dispatch(logout())