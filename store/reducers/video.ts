import produce from "immer";
import { VideoState, VideoActions, GET_VIDEOS, GET_VIDEO, UPDATE_VIDEO, DELETE_VIDEO, RESET_VIDEO_STATE, CREATE_VIDEO } from "../types";

const initialState:VideoState = {
    video_data: {
        current_page: 1,
        data: [],
        pages: 0,
        total: 0
    },
    current_video: null
}

const videoReducer = (state=initialState, action: VideoActions) => {
    switch(action.type) {

        case GET_VIDEOS:{
            return produce(state, (draft) => {
                draft.video_data = action.payload
            })
        }
        
        case GET_VIDEO:{
            return produce(state, (draft) => {
                draft.current_video = action.payload
            })
        }
        
        case CREATE_VIDEO:{
            return {
                ...state
            }
        }

        case UPDATE_VIDEO:{
            return {
                ...state
            }
        }
        
        case DELETE_VIDEO:{
            return {
                ...state
            }
        }

        case RESET_VIDEO_STATE: {
            return {...initialState}
        }

        default: {
            return {
                ...state
            }
        }

    }
}

export default videoReducer