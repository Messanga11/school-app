import { DeleteResponse, RequestRange, Book, BookRequest, BooksResponse } from "@/store/types";
import BaseService from "./BaseService";
import { bookUrls } from "./urls";

export default class BookService {
    static getBooks = (range: (RequestRange | undefined)):Promise<Response> => BaseService.getRequest(bookUrls.GET_BOOKS(range), true)
    static getBook = (uuid:string):Promise<Response> => BaseService.getRequest(bookUrls.GET_BOOK(uuid), true)
    static createBook = (payload:BookRequest):Promise<Response> => BaseService.postRequest(bookUrls.CREATE_BOOK, payload, true)
    static deleteBook = (uuid:string):Promise<Response> => BaseService.deleteRequest(bookUrls.DELETE_BOOK(uuid), {}, true)
    static updateBook = (payload: Book):Promise<Response> => BaseService.putRequest(bookUrls.UPDATE_BOOK, payload, true)
}