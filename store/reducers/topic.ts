import produce from "immer";
import { TopicState, TopicActions, GET_TOPICS, GET_TOPIC, UPDATE_TOPIC, DELETE_TOPIC, RESET_TOPIC_STATE, CREATE_TOPIC } from "../types";

const initialState:TopicState = {
    topic_data: {
        current_page: 1,
        data: [],
        pages: 0,
        total: 0
    },
    current_topic: null
}

const topicReducer = (state=initialState, action: TopicActions) => {
    switch(action.type) {

        case GET_TOPICS:{
            return produce(state, (draft) => {
                draft.topic_data = action.payload
            })
        }
        
        case GET_TOPIC:{
            return produce(state, (draft) => {
                draft.current_topic = action.payload
            })
        }
        
        case CREATE_TOPIC:{
            return {
                ...state
            }
        }

        case UPDATE_TOPIC:{
            return {
                ...state
            }
        }
        
        case DELETE_TOPIC:{
            return {
                ...state
            }
        }

        case RESET_TOPIC_STATE: {
            return {...initialState}
        }

        default: {
            return {
                ...state
            }
        }

    }
}

export default topicReducer