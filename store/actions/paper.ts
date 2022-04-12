import { CreatePaper, CREATE_PAPER, DeleteResponse, DeletePaper, DELETE_PAPER, GetPaper, GetPapers, GET_PAPER, GET_PAPERS, Paper, PapersResponse, UpdatePaper, UPDATE_PAPER } from "../types";

export const getPapers = (data:PapersResponse):GetPapers => ({
  type: GET_PAPERS,
  payload: data
})

export const getPaper = (data:Paper):GetPaper => ({
  type: GET_PAPER,
  payload: data
})

export const updatePaper = (data:Paper):UpdatePaper => ({
  type: UPDATE_PAPER,
  payload: data
})

export const createPaper = (data:Paper):CreatePaper => ({
  type: CREATE_PAPER,
  payload: data
})

export const deletePaper = (data:DeleteResponse):DeletePaper => ({
  type: DELETE_PAPER,
  payload: data
})