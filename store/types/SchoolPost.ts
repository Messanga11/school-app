import {Action}  from "redux";
import  {RequestRange}  from ".";
import { MsgOk } from "./index";
// ************************* Constants **************************** //
export const GET_SCHOOL_POSTS = "GET_SCHOOL_POSTS"
export const GET_SCHOOL_POST = "GET_SCHOOL_POST"
export const UPDATE_SCHOOL_POST = "UPDATE_SCHOOL_POST"
export const CREATE_SCHOOL_POST = "CREATE_SCHOOL_POST"
export const DELETE_SCHOOL_POST = "DELETE_SCHOOL_POST"
export const RESET_SCHOOL_POST_STATE = "RESET_SCHOOL_POST_STATE"

// ************************* Interfaces ,***************************** //
export interface SchoolPost {
    base_64: string;
    uuid: string
    title: string
    description: string
    image_url: string
}

export interface SchoolPostsResponse {
    total: number;
    pages: number;
    per_page: number;
    current_page: number;
    data: SchoolPost[];
}

export interface SchoolPostRequest {
    title: string;
    file: File
}

export interface SchoolPostState {
    school_post_data: SchoolPostsResponse;
    current_school_post: SchoolPost | null
}

// ************************* Actions ,***************************** //
export interface GetSchoolPosts extends Action {
    type: typeof GET_SCHOOL_POSTS;
    payload: SchoolPostsResponse
}

export interface GetSchoolPost extends Action {
    type: typeof GET_SCHOOL_POST;
    payload: SchoolPost
}

export interface UpdateSchoolPost extends Action {
    type: typeof UPDATE_SCHOOL_POST;
    payload: SchoolPost
}

export interface CreateSchoolPost extends Action {
    type: typeof CREATE_SCHOOL_POST;
    payload: SchoolPost
}

export interface DeleteSchoolPost extends Action {
    type: typeof DELETE_SCHOOL_POST;
    payload: MsgOk
}

export interface ResetSchoolPostState extends Action {
    type: typeof RESET_SCHOOL_POST_STATE;
    payload: undefined
}

export type SchoolPostActions = 
GetSchoolPosts
| GetSchoolPost
| UpdateSchoolPost
| CreateSchoolPost
| DeleteSchoolPost 
| ResetSchoolPostState