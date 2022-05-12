import {Action}  from "redux";
import  {RequestRange}  from ".";
import { MsgOk } from "./index";
// ************************* Constants **************************** //
export const GET_SCHOOLS = "GET_SCHOOLS"
export const GET_SCHOOL = "GET_SCHOOL"
export const UPDATE_SCHOOL = "UPDATE_SCHOOL"
export const CREATE_SCHOOL = "CREATE_SCHOOL"
export const DELETE_SCHOOL = "DELETE_SCHOOL"
export const RESET_SCHOOL_STATE = "RESET_SCHOOL_STATE"

// ************************* Interfaces ,***************************** //
export interface SchoolMember {
    name: string;
    base_64?: string;
    image_url: string
}

export interface School {
    uuid?: string;
    name?: string;
    email?: string;
    logo?: string;
    phone_number?: string;
    region?: string;
    principal?: SchoolMember | null;
    vice_principals?: SchoolMember[];
    teachers?: SchoolMember[]
}

export interface SchoolsResponse {
    total: number;
    pages: number;
    per_page: number;
    current_page: number;
    data: School[];
}

export interface SchoolRequest {
    title: string;
    file: File
}

export interface SchoolState {
    school_data: SchoolsResponse;
    current_school: School | null
}

// ************************* Actions ,***************************** //
export interface GetSchools extends Action {
    type: typeof GET_SCHOOLS;
    payload: SchoolsResponse
}

export interface GetSchool extends Action {
    type: typeof GET_SCHOOL;
    payload: School
}

export interface UpdateSchool extends Action {
    type: typeof UPDATE_SCHOOL;
    payload: School
}

export interface CreateSchool extends Action {
    type: typeof CREATE_SCHOOL;
    payload: School
}

export interface DeleteSchool extends Action {
    type: typeof DELETE_SCHOOL;
    payload: MsgOk
}

export interface ResetSchoolState extends Action {
    type: typeof RESET_SCHOOL_STATE;
    payload: undefined
}

export type SchoolActions = 
GetSchools
| GetSchool
| UpdateSchool
| CreateSchool
| DeleteSchool 
| ResetSchoolState