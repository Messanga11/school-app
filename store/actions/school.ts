import { CreateSchool, CREATE_SCHOOL, DeleteSchool, DELETE_SCHOOL, GetSchool, GetSchools, GET_SCHOOL, GET_SCHOOLS, School, SchoolsResponse, UpdateSchool, UPDATE_SCHOOL, MsgOk } from "../types";

export const getSchools = (data:SchoolsResponse):GetSchools => ({
  type: GET_SCHOOLS,
  payload: data
})

export const getSchool = (data:School):GetSchool => ({
  type: GET_SCHOOL,
  payload: data
})

export const updateSchool = (data:School):UpdateSchool => ({
  type: UPDATE_SCHOOL,
  payload: data
})

export const createSchool = (data:School):CreateSchool => ({
  type: CREATE_SCHOOL,
  payload: data
})

export const deleteSchool = (data:MsgOk):DeleteSchool => ({
  type: DELETE_SCHOOL,
  payload: data
})