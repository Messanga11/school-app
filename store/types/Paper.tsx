import { Action } from "redux";
import { RequestRange } from ".";

// ************************* Constants **************************** //
export const GET_PAPERS = "GET_PAPERS"
export const GET_PAPER = "GET_PAPER"
export const UPDATE_PAPER = "UPDATE_PAPER"
export const CREATE_PAPER = "CREATE_PAPER"
export const DELETE_PAPER = "DELETE_PAPER"
export const RESET_PAPER_STATE = "RESET_PAPER_STATE"

// ************************* Interfaces ***************************** //

export interface Question {
    is_an_image: boolean;
    image?: string;
    text?: string;
  }
  
export interface Answer {
    uuid?: string;
    is_an_image: boolean;
    image?: string;
    text?: string;
    letter?: string;
    is_correct: boolean;
  }
  
export interface QuestionItem {
    is_an_image: boolean;
    image?: string;
    text?: string;
    answers: Answer[]
  }
  
export interface QuestionRequest {
    question: Question;
    answers: Answer[];
  }

export interface Paper {
    uuid: string;
    paper_type: string;
    year: string;
    questions: QuestionItem[]
}

export interface PapersResponse {
    total: number;
    pages: number;
    current_page: number;
    data: Paper[];
}

export interface PaperRequest {
    first_name: string,
    last_name: string,
    user_name: string,
    email: string,
    phone_number: number,
    password: string,
    guardian_phone_number: string
}

export interface PaperState {
    paper_data: PapersResponse;
    current_paper: Paper | null
}

// ************************* Actions ***************************** //
export interface GetPapers extends Action {
    type: typeof GET_PAPERS;
    payload: PapersResponse
}

export interface GetPaper extends Action {
    type: typeof GET_PAPER;
    payload: Paper
}

export interface UpdatePaper extends Action {
    type: typeof UPDATE_PAPER;
    payload: Paper
}

export interface CreatePaper extends Action {
    type: typeof CREATE_PAPER;
    payload: Paper
}

export interface DeletePaper extends Action {
    type: typeof DELETE_PAPER;
    payload: {
        message: string
    }
}

export interface ResetPaperState extends Action {
    type: typeof RESET_PAPER_STATE;
    payload: undefined
}

export type PaperActions = 
GetPapers
| GetPaper
| UpdatePaper
| CreatePaper
| DeletePaper 
| ResetPaperState