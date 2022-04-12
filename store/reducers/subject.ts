import produce from "immer";
import { SubjectState, SubjectActions, GET_SUBJECTS, GET_SUBJECT, UPDATE_SUBJECT, DELETE_SUBJECT, RESET_SUBJECT_STATE, CREATE_SUBJECT } from "../types";

const initialState:SubjectState = {
    subject_data: {
        current_page: 1,
        data: [],
        pages: 0,
        total: 0
    },
    current_subject: null
}

const subjectReducer = (state=initialState, action: SubjectActions) => {
    switch(action.type) {

        case GET_SUBJECTS:{
            return produce(state, (draft) => {
                draft.subject_data = action.payload
            })
        }
        
        case GET_SUBJECT:{
            return produce(state, (draft) => {
                draft.current_subject = action.payload
            })
        }
        
        case CREATE_SUBJECT:{
            return {
                ...state
            }
        }

        case UPDATE_SUBJECT:{
            return {
                ...state
            }
        }
        
        case DELETE_SUBJECT:{
            return {
                ...state
            }
        }

        case RESET_SUBJECT_STATE: {
            return {...initialState}
        }

        default: {
            return {
                ...state
            }
        }

    }
}

export default subjectReducer