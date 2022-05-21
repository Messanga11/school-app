import { CreateSchoolPost, CREATE_SCHOOL_POST, DeleteSchoolPost, DELETE_SCHOOL_POST, GetSchoolPost, GetSchoolPosts, GET_SCHOOL_POST, GET_SCHOOL_POSTS, SchoolPost, SchoolPostsResponse, UpdateSchoolPost, UPDATE_SCHOOL_POST, MsgOk } from "../types";

export const getSchoolPosts = (data:SchoolPostsResponse):GetSchoolPosts => ({
  type: GET_SCHOOL_POSTS,
  payload: data
})

export const getSchoolPost = (data:SchoolPost):GetSchoolPost => ({
  type: GET_SCHOOL_POST,
  payload: data
})

export const updateSchoolPost = (data:SchoolPost):UpdateSchoolPost => ({
  type: UPDATE_SCHOOL_POST,
  payload: data
})

export const createSchoolPost = (data:SchoolPost):CreateSchoolPost => ({
  type: CREATE_SCHOOL_POST,
  payload: data
})

export const deleteSchoolPost = (data:MsgOk):DeleteSchoolPost => ({
  type: DELETE_SCHOOL_POST,
  payload: data
})