import produce from "immer";
import { UPDATE_PROFILE_PIC } from "../types";
import { AuthActions, AuthState, LOGIN_SUCCESS, LOGOUT, GET_AUTH_INFOS_SUCCESS } from '../types/Auth';

const initialState:AuthState = {
    locale: "en-GB",
    userInfos: null
}

const authReducer = (state=initialState, action: AuthActions) => {
    switch(action.type) {

        case LOGIN_SUCCESS: {
            localStorage.setItem("token", action.payload.token)
            return {
                ...state
            }
        }
        
        case GET_AUTH_INFOS_SUCCESS: {
            return {
                ...state,
                userInfos: {
                    ...state.userInfos,
                    ...action.payload
                }
            }
        }
        case UPDATE_PROFILE_PIC: {
            return {
                ...state,
                userInfos: {
                    ...state.userInfos,
                    image_url: action.payload
                }
            }
        }
        
        case LOGOUT: {
            localStorage.removeItem("token")
            return {...initialState}
        }

        default: {
            return {
                ...state
            }
        }

    }
}

export default authReducer