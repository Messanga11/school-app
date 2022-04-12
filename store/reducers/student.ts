import produce from "immer";
import { StudentState, StudentActions, GET_STUDENTS, GET_STUDENT, UPDATE_STUDENT, DELETE_STUDENT, RESET_STUDENT_STATE, CREATE_STUDENT, GET_MESSAGES, GET_CONVERSATIONS, DELETE_MESSAGE } from "../types";
import { SEND_MESSAGE, GET_INVITATIONS, GET_FRIENDS } from '../types/Student';

const initialState:StudentState = {
    student_data: {
        current_page: 1,
        data: [],
        pages: 0,
        total: 0
    },
    messages: {
        current_page: 1,
        data: [],
        pages: 0,
        total: 0
    },
    invitations: {
        current_page: 1,
        data: [],
        pages: 0,
        total: 0
    },
    friends: {
        current_page: 1,
        data: [],
        pages: 0,
        total: 0
    }, 
    conversations: {
        current_page: 1,
        data: [],
        pages: 0,
        total: 0
    }, 
    current_student: null
}

const studentReducer = (state=initialState, action: StudentActions) => {
    switch(action.type) {

        case GET_STUDENTS:{
            return produce(state, (draft) => {
                draft.student_data = action.payload
            })
        }
        
        case GET_STUDENT:{
            return produce(state, (draft) => {
                draft.current_student = action.payload
            })
        }
        
        case CREATE_STUDENT:{
            return {
                ...state
            }
        }

        case UPDATE_STUDENT:{
            return {
                ...state
            }
        }
        
        case DELETE_STUDENT:{
            return {
                ...state
            }
        }
        
        case GET_MESSAGES:{
            return {
                ...state,
                messages: {
                    ...state.messages,
                    ...action.payload
                }
            }
        }
        
        case GET_CONVERSATIONS:{
            return {
                ...state,
                conversations: {
                    ...state.conversations,
                    ...action.payload
                }
            }
        }
        
        case GET_INVITATIONS:{
            return {
                ...state,
                invitations: {
                    ...state.invitations,
                    ...action.payload
                }
            }
        }
        
        case GET_FRIENDS:{
            return {
                ...state,
                friends: {
                    ...state.friends,
                    ...action.payload
                }
            }
        }

        case SEND_MESSAGE:{
            return {
                ...state
            }
        }
        
        case DELETE_MESSAGE:{
            return {
                ...state
            }
        }

        case RESET_STUDENT_STATE: {
            return {...initialState}
        }

        default: {
            return {
                ...state
            }
        }

    }
}

export default studentReducer