import { Action } from "redux";
import { RequestRange } from ".";

// ************************* Constants **************************** //
export const GET_BOOKS = "GET_BOOKS"
export const GET_BOOK = "GET_BOOK"
export const UPDATE_BOOK = "UPDATE_BOOK"
export const CREATE_BOOK = "CREATE_BOOK"
export const DELETE_BOOK = "DELETE_BOOK"
export const RESET_BOOK_STATE = "RESET_BOOK_STATE"

// ************************* Interfaces ***************************** //
export interface Book {
    uuid: string;
    title: string;
    url: string;
    topic_uuid: string;
    type: string
}

export interface BooksResponse {
    total?: number;
    pages?: number;
    current_page?: number;
    data: Book[];
}

export interface BookRequest {
    title: string,
    type: string,
    base64: string,
    topic_uuid: string
}

export interface FileRequest {
    uuid?: string,
    title: string,
    type: string,
    file: string,
    topic_uuid: string
}

export interface BookState {
    book_data: BooksResponse;
    current_book: Book | null
}

// ************************* Actions ***************************** //
export interface GetBooks extends Action {
    type: typeof GET_BOOKS;
    payload: BooksResponse
}

export interface GetBook extends Action {
    type: typeof GET_BOOK;
    payload: Book
}

export interface UpdateBook extends Action {
    type: typeof UPDATE_BOOK;
    payload: Book
}

export interface CreateBook extends Action {
    type: typeof CREATE_BOOK;
    payload: Book
}

export interface DeleteBook extends Action {
    type: typeof DELETE_BOOK;
    payload: {
        message: string
    }
}

export interface ResetBookState extends Action {
    type: typeof RESET_BOOK_STATE;
    payload: undefined
}

export type BookActions = 
GetBooks
| GetBook
| UpdateBook
| CreateBook
| DeleteBook 
| ResetBookState