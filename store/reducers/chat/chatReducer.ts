import {
    ChatState,
    FETCH_ALL_CONVERSATION_ERROR,
    FETCH_ALL_CONVERSATION_REQUEST,
    FETCH_ALL_CONVERSATION_SUCCESS,
    FETCH_ONE_CONVERSATION_ERROR,
    FETCH_ONE_CONVERSATION_REQUEST,
    FETCH_ONE_CONVERSATION_SUCCESS, FETCH_UNREAD_MESSAGE_COUNT_SUCCESS,
    SEND_MESSAGE_FILE_REQUEST,
    SEND_MESSAGE_FILE_SUCCESS,
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS
} from "../../types/ChatTypes";
import {ApplicationAction} from "../../types";
import produce from 'immer'

const initialState: ChatState = {
    conversations: [],
    one_conversation: [],
    loading_conversattion: false,
    unread_messages: [],
}

const ChatReducer = (state = initialState, action: ApplicationAction ) => {
    switch (action.type) {
        case SEND_MESSAGE_FILE_REQUEST:
            // return produce(state, draft => {
            //     state.conversations.push({
            //         sender: {
            //             public_id: action.payload.receiver_id,
            //         },
            //         file: action.payload.base64,
            //     })
            // })
            return state
        case SEND_MESSAGE_FILE_SUCCESS:
            // let new_conversations = state.conversations.map((conversation) => {
            //     conversation.file.url == action.payload
            // })
            return produce(state, draft => {
                state.conversations.push(action.payload)
            })
        case SEND_MESSAGE_SUCCESS:
            return produce(state, draft => {
                state.conversations.push(action.payload)
            })
        case SEND_MESSAGE_REQUEST:
            return produce(state, draft => {
                draft.loading_conversattion = true;
            })
        case FETCH_ALL_CONVERSATION_REQUEST:
            return state
        case FETCH_ALL_CONVERSATION_SUCCESS:
            return produce(state, draft => {
                state.conversations = action.payload;
                draft.loading_conversattion = false;
            })
        case FETCH_ALL_CONVERSATION_ERROR:
            return produce(state, draft => {
                draft.loading_conversattion = false;
            })
            return state
        case FETCH_ONE_CONVERSATION_ERROR:
            return produce(state, (draft) => {
                draft.loading_conversattion = false;
            });
        case FETCH_ONE_CONVERSATION_REQUEST:
            return produce(state, draft => {
                draft.loading_conversattion = true;
            })
        case FETCH_ONE_CONVERSATION_SUCCESS:
            return produce(state, draft => {
                draft.one_conversation = action.payload
            })
        case FETCH_UNREAD_MESSAGE_COUNT_SUCCESS:
            return produce(state, (draft) => {
                draft.unread_messages = action.payload
            })
        default:
            return state
    }
}

export default ChatReducer