import { CreateSubject, CREATE_SUBJECT, DeleteResponse, DeleteSubject, DELETE_SUBJECT, GetSubject, GetSubjects, GET_SUBJECT, GET_SUBJECTS, Subject, SubjectsResponse, UpdateSubject, UPDATE_SUBJECT } from "../types";

export const getSubjects = (data:SubjectsResponse):GetSubjects => ({
  type: GET_SUBJECTS,
  payload: data
})

export const getSubject = (data:Subject):GetSubject => ({
  type: GET_SUBJECT,
  payload: data
})

export const updateSubject = (data:Subject):UpdateSubject => ({
  type: UPDATE_SUBJECT,
  payload: data
})

export const createSubject = (data:Subject):CreateSubject => ({
  type: CREATE_SUBJECT,
  payload: data
})

export const deleteSubject = (data:DeleteResponse):DeleteSubject => ({
  type: DELETE_SUBJECT,
  payload: data
})