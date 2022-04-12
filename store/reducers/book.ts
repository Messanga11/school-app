import produce from "immer";
import { BookState, BookActions, GET_BOOKS, GET_BOOK, UPDATE_BOOK, DELETE_BOOK, RESET_BOOK_STATE, CREATE_BOOK } from "../types";

const initialState:BookState = {
    book_data: {
        current_page: 1,
        data: [],
        pages: 0,
        total: 0
    },
    current_book: null
}

const bookReducer = (state=initialState, action: BookActions) => {
    switch(action.type) {

        case GET_BOOKS:{
            return produce(state, (draft) => {
                draft.book_data = {...state.book_data, ...action.payload}
            })
        }
        
        case GET_BOOK:{
            return produce(state, (draft) => {
                draft.current_book = action.payload
            })
        }
        
        case CREATE_BOOK:{
            return {
                ...state
            }
        }

        case UPDATE_BOOK:{
            return {
                ...state
            }
        }
        
        case DELETE_BOOK:{
            return {
                ...state
            }
        }

        case RESET_BOOK_STATE: {
            return {...initialState}
        }

        default: {
            return {
                ...state
            }
        }

    }
}

export default bookReducer