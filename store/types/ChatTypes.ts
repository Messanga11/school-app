import {Action} from "redux";
import {File} from "../ResponseTypes";

interface BasicAction extends Action {
    type: string;
    payload?: any;
}

export const FETCH_UNREAD_MESSAGE_COUNT_SUCCESS = "FETCH_UNREAD_MESSAGE_COUNT_SUCCESS"
export const FETCH_ONE_CONVERSATION_REQUEST = "FETCH_ONE_CONVERSATION_REQUEST"
export const FETCH_ONE_CONVERSATION_SUCCESS = "FETCH_ONE_CONVERSATION_SUCCESS"
export const FETCH_ONE_CONVERSATION_ERROR = "FETCH_ONE_CONVERSATION_ERROR"
export const FETCH_ALL_CONVERSATION_REQUEST = "FETCH_ALL_CONVERSATION_REQUEST"
export const FETCH_ALL_CONVERSATION_SUCCESS = "FETCH_ALL_CONVERSATION_SUCCESS"
export const FETCH_ALL_CONVERSATION_ERROR = "FETCH_ALL_CONVERSATION_ERROR"
export const SEND_MESSAGE_FILE_REQUEST = "SEND_MESSAGE_FILE_REQUEST"
export const SEND_MESSAGE_FILE_SUCCESS = "SEND_MESSAGE_FILE_SUCCESS"
export const SEND_MESSAGE_FILE_ERROR = "SEND_MESSAGE_FILE_ERROR"
export const SEND_MESSAGE_REQUEST = "SEND_MESSAGE_REQUEST"
export const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS"
export const SEND_MESSAGE_ERROR = "SEND_MESSAGE_ERROR"

export interface Conversation {
    id?: string;
    content?: string;
    is_read?: boolean;
    is_file?: boolean;
    receiver?: Receiver;
    is_image?: boolean;
    sender?: Sender;
    user_profile?: UserProfile;
    file?: File;
    sending_date?: Date;
}

export interface Sender {
    public_id: string;
}

export interface Receiver {
    public_id: string;
}

export interface UserProfile {
    uuid: string;
    lastname: string;
    firstname: string;
    avatar: Avatar;
}

export interface Avatar {
    url: string;
    size: number;
    file_name: string;
}

export interface SendMessageFile {
    receiver_id: string;
    file_name?: string;
    base64: string;
}

export interface SendMessage {
    receiver_id: string;
    content: string;
}

export interface ChatState {
    conversations: Array<Conversation>,
    one_conversation: Array<Conversation>,
    loading_conversattion: boolean,
    unread_messages: Array<Conversation>,
}

export interface sendMessageRequest extends BasicAction {
    type: typeof SEND_MESSAGE_REQUEST,
    payload: SendMessage
}

export interface sendMessageSuccess extends BasicAction {
    type: typeof SEND_MESSAGE_SUCCESS,
    payload: Conversation,
}

export interface sendMessageError extends BasicAction {
    type: typeof SEND_MESSAGE_ERROR,
    payload: SendMessage,
}

export interface sendMessageFileRequest extends BasicAction {
    type: typeof SEND_MESSAGE_FILE_REQUEST,
    payload: SendMessageFile,
}

export interface sendMessageFileSuccess extends BasicAction {
    type: typeof SEND_MESSAGE_FILE_SUCCESS,
    payload: Conversation,
}

export interface sendMessageFileError extends BasicAction {
    type: typeof SEND_MESSAGE_FILE_ERROR,
    payload: SendMessageFile
}

export interface fetchAllConversationRequest extends BasicAction {
    type: typeof FETCH_ALL_CONVERSATION_REQUEST
}

export interface fetchAllConversationSuccess extends BasicAction {
    type: typeof FETCH_ALL_CONVERSATION_SUCCESS,
    payload: Array<Conversation>
}

export interface fetchAllConversationError extends BasicAction {
    type: typeof FETCH_ALL_CONVERSATION_ERROR
}

export interface fetchOneConversationRequest extends BasicAction {
    type: typeof FETCH_ONE_CONVERSATION_REQUEST
}

export interface fetchOneConversationSuccess extends BasicAction {
    type: typeof FETCH_ONE_CONVERSATION_SUCCESS,
    payload: Array<Conversation>
}

export interface fetchOneConversationError extends BasicAction {
    type: typeof FETCH_ONE_CONVERSATION_ERROR,
}

export interface fetchUnreadMessagesCountSuccess extends BasicAction {
    type: typeof FETCH_UNREAD_MESSAGE_COUNT_SUCCESS,
    payload: Array<Conversation>
}