import { Action } from "redux";
import { RequestRange } from ".";
import { Topic, TopicRequest } from "./Topic";

// ************************* Constants **************************** //
export const GET_SUBJECTS = "GET_SUBJECTS"
export const GET_SUBJECT = "GET_SUBJECT"
export const UPDATE_SUBJECT = "UPDATE_SUBJECT"
export const CREATE_SUBJECT = "CREATE_SUBJECT"
export const DELETE_SUBJECT = "DELETE_SUBJECT"
export const RESET_SUBJECT_STATE = "RESET_SUBJECT_STATE"

// ************************* Interfaces ***************************** //
export interface Subject {
    uuid: string;
    title: string;
    visible_for: string;
    topics: Topic[]
}

export interface SubjectsResponse {
    total: number;
    pages: number;
    current_page: number;
    data: Subject[];
}

export interface SubjectRequest {
    uuid?: string;
    title: string;
    visible_for: string;
}

export interface SubjectState {
    subject_data: SubjectsResponse;
    current_subject: Subject | null
}

// ************************* Actions ***************************** //
export interface GetSubjects extends Action {
    type: typeof GET_SUBJECTS;
    payload: SubjectsResponse
}

export interface GetSubject extends Action {
    type: typeof GET_SUBJECT;
    payload: Subject
}

export interface UpdateSubject extends Action {
    type: typeof UPDATE_SUBJECT;
    payload: Subject
}

export interface CreateSubject extends Action {
    type: typeof CREATE_SUBJECT;
    payload: Subject
}

export interface DeleteSubject extends Action {
    type: typeof DELETE_SUBJECT;
    payload: {
        message: string
    }
}

export interface ResetSubjectState extends Action {
    type: typeof RESET_SUBJECT_STATE;
    payload: undefined
}

export type SubjectActions = 
GetSubjects
| GetSubject
| UpdateSubject
| CreateSubject
| DeleteSubject 
| ResetSubjectState