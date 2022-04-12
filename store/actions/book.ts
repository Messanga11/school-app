import { CreateBook, CREATE_BOOK, DeleteResponse, DeleteBook, DELETE_BOOK, GetBook, GetBooks, GET_BOOK, GET_BOOKS, Book, BooksResponse, UpdateBook, UPDATE_BOOK } from "../types";

export const getBooks = (data:BooksResponse):GetBooks => ({
  type: GET_BOOKS,
  payload: data
})

export const getBook = (data:Book):GetBook => ({
  type: GET_BOOK,
  payload: data
})

export const updateBook = (data:Book):UpdateBook => ({
  type: UPDATE_BOOK,
  payload: data
})

export const createBook = (data:Book):CreateBook => ({
  type: CREATE_BOOK,
  payload: data
})

export const deleteBook = (data:DeleteResponse):DeleteBook => ({
  type: DELETE_BOOK,
  payload: data
})