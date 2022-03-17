import {
    Conversation,
    FETCH_ALL_CONVERSATION_ERROR,
    FETCH_ALL_CONVERSATION_REQUEST,
    FETCH_ALL_CONVERSATION_SUCCESS,
    FETCH_ONE_CONVERSATION_ERROR,
    FETCH_ONE_CONVERSATION_REQUEST,
    FETCH_ONE_CONVERSATION_SUCCESS,
    FETCH_UNREAD_MESSAGE_COUNT_SUCCESS,
    fetchAllConversationError,
    fetchAllConversationRequest,
    fetchAllConversationSuccess,
    fetchOneConversationError,
    fetchOneConversationRequest,
    fetchOneConversationSuccess,
    fetchUnreadMessagesCountSuccess,
    SEND_MESSAGE_ERROR,
    SEND_MESSAGE_FILE_ERROR,
    SEND_MESSAGE_FILE_REQUEST,
    SEND_MESSAGE_FILE_SUCCESS,
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SendMessage,
    sendMessageError,
    SendMessageFile,
    sendMessageFileError,
    sendMessageFileRequest,
    sendMessageFileSuccess,
    sendMessageRequest,
    sendMessageSuccess
} from "../types/ChatTypes";

export const SendMessageRequest = (payload: SendMessage): sendMessageRequest => ({
    type: SEND_MESSAGE_REQUEST,
    payload: payload,
})

export const SendMessageError = (payload: SendMessage): sendMessageError => ({
    type: SEND_MESSAGE_ERROR,
    payload: payload,
})

export const SendMessageFileError = (payload: SendMessageFile): sendMessageFileError => ({
    type: SEND_MESSAGE_FILE_ERROR,
    payload: payload
})

export const SendMessageSuccess = (payload: Conversation): sendMessageSuccess => ({
    type: SEND_MESSAGE_SUCCESS,
    payload: payload,
})

export const SendMessageFileSuccess = (payload: Conversation): sendMessageFileSuccess => ({
    type: SEND_MESSAGE_FILE_SUCCESS,
    payload: payload,
})

export const SendMessageFileRequest = (payload: SendMessageFile): sendMessageFileRequest => ({
    type: SEND_MESSAGE_FILE_REQUEST,
    payload: payload
})

export const FetchAllConversationSuccess = (data: Array<Conversation>): fetchAllConversationSuccess => ({
    type: FETCH_ALL_CONVERSATION_SUCCESS,
    payload: data,
});

export const FetchAllConversationRequest = (): fetchAllConversationRequest => ({
    type: FETCH_ALL_CONVERSATION_REQUEST
})

export const FetchAllConversationError = (): fetchAllConversationError => ({
    type: FETCH_ALL_CONVERSATION_ERROR
})

export const FetchOneConversationRequest = (): fetchOneConversationRequest => ({
    type: FETCH_ONE_CONVERSATION_REQUEST,
})

export const FetchOneConversationSuccess = (data: Array<Conversation>): fetchOneConversationSuccess => ({
    type: FETCH_ONE_CONVERSATION_SUCCESS,
    payload: data
})

export const FetchOneConversationError = (): fetchOneConversationError => ({
    type: FETCH_ONE_CONVERSATION_ERROR,
});

export const FetchUnreadMessagesCountSuccess = (payload: Array<Conversation>): fetchUnreadMessagesCountSuccess => ({
    type: FETCH_UNREAD_MESSAGE_COUNT_SUCCESS,
    payload: payload,
})