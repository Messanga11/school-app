import { AppRoles } from '.';
import { School } from './School';
import { Student, UpdateProfilePic } from './Student';

// ************************* Constants **************************** //
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const GET_AUTH_INFOS_SUCCESS = "GET_AUTH_INFOS_SUCCESS"
export const UPDATE_AUTH_INFOS_SUCCESS = "UPDATE_AUTH_INFOS_SUCCESS"
export const LOGOUT = "LOGOUT"

// ************************* Interfaces ***************************** //

export interface AuthState {
    locale: string;
    userInfos: User | School | null;
}

export interface Token {
    access_token : string,
    user: Student
}

export interface LoginPayload {
    phone_number: string | number,
    password: string
    guardian_phone_number?: number
    type?: string
}

export interface LoginResponse {
    message: string,
    token: string
}

export interface User {
    uuid: string;
    first_name:string;
    last_name:string;
    user_name:string;
    phone_number:string;
    join_date:string;
    image_url:string;
    guardian_phone_number:string;
    email:string;
    selected_exam:{label: string, value: string}[];
    role: keyof AppRoles;
}

// ************************* Actions ***************************** //

export interface LoginSuccess {
    type: typeof LOGIN_SUCCESS,
    payload: LoginResponse
}

export interface GetAuthInfosSuccess {
    type: typeof GET_AUTH_INFOS_SUCCESS,
    payload: User
}

export interface UpdateAuthInfosSuccess {
    type: typeof UPDATE_AUTH_INFOS_SUCCESS,
    payload: User
}

export interface Logout {
    type: typeof LOGOUT,
    payload: null
}

export type AuthActions = LoginSuccess | Logout
| GetAuthInfosSuccess
| UpdateAuthInfosSuccess
| UpdateProfilePic