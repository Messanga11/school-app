import produce from "immer";
import { PaperState, PaperActions, GET_PAPERS, GET_PAPER, UPDATE_PAPER, DELETE_PAPER, RESET_PAPER_STATE, CREATE_PAPER } from "../types";

const initialState:PaperState = {
    paper_data: {
        current_page: 1,
        data: [],
        pages: 0,
        total: 0
    },
    current_paper: null
}

const paperReducer = (state=initialState, action: PaperActions) => {
    switch(action.type) {

        case GET_PAPERS:{
            return produce(state, (draft) => {
                draft.paper_data = action.payload
            })
        }
        
        case GET_PAPER:{
            return produce(state, (draft) => {
                draft.current_paper = action.payload
            })
        }
        
        case CREATE_PAPER:{
            return {
                ...state
            }
        }

        case UPDATE_PAPER:{
            return {
                ...state
            }
        }
        
        case DELETE_PAPER:{
            return {
                ...state
            }
        }

        case RESET_PAPER_STATE: {
            return {...initialState}
        }

        default: {
            return {
                ...state
            }
        }

    }
}

export default paperReducer