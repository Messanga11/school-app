import {ThunkAction} from "redux-thunk";
import {ApplicationAction} from "../types";
import {ChatState, SendMessage, SendMessageFile} from "../types/ChatTypes";
import chatService from "../../service/api/chatService";
import {
    FetchAllConversationError,
    FetchAllConversationRequest,
    FetchAllConversationSuccess,
    FetchOneConversationError,
    FetchOneConversationRequest,
    FetchOneConversationSuccess,
    FetchUnreadMessagesCountSuccess,
    SendMessageError,
    SendMessageFileError,
    SendMessageFileRequest,
    SendMessageFileSuccess,
    SendMessageRequest,
    SendMessageSuccess
} from "../actions/chat";

type Effect = ThunkAction<any, ChatState, any, ApplicationAction>

interface CallBackRequest {
    onSuccess?: () => void;
    onFailled?: (error?: string) => void;
}

export const sendMessageEffect = (payload: SendMessage, callBack?: CallBackRequest): Effect => async (dispatch, getState) => {
    dispatch(SendMessageRequest(payload))
    try {
        const res: Response = await chatService.sendMessage(payload);
        const data = await res.json()
        if (res.status == 201 || res.status == 200) {
            dispatch(SendMessageSuccess(data));
            callBack.onSuccess();
        } else {
            dispatch(SendMessageError(payload))
            callBack.onFailled(data.detail);
        }
    } catch (e) {
        console.error('SendMessageEffect.ts error ------>', e)
    }
}
export const sendMessageFileEffect = (payload: SendMessageFile, callBack?: CallBackRequest): Effect => async (dispatch, getState) => {
    dispatch(SendMessageFileRequest(payload))
    try {
        const res: Response = await chatService.sendMessageFile(payload);
        const data = await res.json()
        if (res.status == 201 || res.status == 200) {
            dispatch(SendMessageFileSuccess(data));
            callBack.onSuccess();
        } else {
            dispatch(SendMessageFileError(payload))
            callBack.onFailled(data.detail);
        }
    } catch (e) {
        console.error('SendMessageEffect.ts error ------>', e)
    }
}
export const fetchAllConversationEffect = (callBack?: CallBackRequest): Effect => async (dispatch, getState) => {
    dispatch(FetchAllConversationRequest())
    try {
        const res: Response = await chatService.fetchAllConversation();
        const data = await res.json()
        if (res.status == 201 || res.status == 200) {
            dispatch(FetchAllConversationSuccess(data));
            callBack.onSuccess();
        } else {
            dispatch(FetchAllConversationError())
            callBack.onFailled();
        }
    } catch (e) {
        console.error('SendMessageEffect.ts error ------>', e)
    }
}

export const fetchUnreadMessagesEffect = (): Effect => async (dispatch, getState) => {
    try {
        const res: Response = await chatService.fetchAllConversation();
        const data = await res.json()
        if (res.status === 201 || res.status === 200) {
            dispatch(FetchUnreadMessagesCountSuccess(data));
        } else {
        }
    } catch (e) {
        console.error('SendMessageEffect.ts error ------>', e)
    }
}

export const fetchOneConversationEffect = (user_public_id: string, callBack?: CallBackRequest): Effect => async (dispatch, getState) => {
    dispatch(FetchOneConversationRequest())
    try {
        const res: Response = await chatService.fetchOneConversation(user_public_id);
        const data = await res.json()
        if (res.status == 201 || res.status == 200) {
            dispatch(FetchOneConversationSuccess(data));
            callBack.onSuccess();
        } else {
            dispatch(FetchOneConversationError())
            callBack.onFailled();
        }
    } catch (e) {
        console.error('SendMessageEffect.ts error ------>', e)
    }
}