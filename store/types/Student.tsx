import { Action } from "redux";
import { RequestRange, ResponseRange } from ".";
import { User } from './Auth';

// ************************* Constants **************************** //
export const GET_STUDENTS = "GET_STUDENTS"
export const GET_STUDENT = "GET_STUDENT"
export const UPDATE_STUDENT = "UPDATE_STUDENT"
export const CREATE_STUDENT = "CREATE_STUDENT"
export const DELETE_STUDENT = "DELETE_STUDENT"
export const RESET_STUDENT_STATE = "RESET_STUDENT_STATE"
export const SEND_MESSAGE = "SEND_MESSAGE"
export const GET_MESSAGES = "GET_MESSAGES"
export const GET_CONVERSATIONS = "GET_CONVERSATIONS"
export const DELETE_MESSAGE = "DELETE_MESSAGE"
export const SEND_INVITATION = "SEND_INVITATION"
export const ACCEPT_INVITATION = "ACCEPT_INVITATION"
export const REFUSE_INVITATION = "REFUSE_INVITATION"
export const DELETE_FRIEND = "DELETE_FRIEND"
export const GET_INVITATIONS = "GET_INVITATIONS"
export const GET_FRIENDS = "GET_FRIENDS"
export const UPDATE_PROFILE_PIC = "UPDATE_PROFILE_PIC"

// ************************* Interfaces ***************************** //
export interface Student {
    uuid: string;
    first_name: string;
    last_name: string;
    phone_number: number;
    email?: string;
    image_url?: string;
    guardian_phone_number?: number;
    is_friend?: boolean
}

export interface Conversation {
    uuid: string;
    last_message: string;
    sender: User;
    have_unread: boolean;
    members: User[]
}

export interface Message {
    uuid: string;
    text?: string;
    created_at?: string;
    conversation_id?: string;
    sender_uuid: string;
}

export interface StudentsResponse {
    total: number;
    pages: number;
    current_page: number;
    data: Student[];
}

export interface MessagesResponse {
    total: number;
    pages: number;
    current_page: number;
    data: Message[];
}

export interface StudentRequest {
    first_name: string,
    last_name: string,
    user_name: string,
    email: string,
    phone_number: number,
    password: string,
    guardian_phone_number: string
}

export interface InvitationResponse {
    uuid: string;
    request_user: Student;
    accepted: boolean;
}

export interface StudentState {
    student_data: StudentsResponse;
    messages: MessagesResponse;
    current_student: Student | null
    conversations: ResponseRange<Conversation>
    friends: ResponseRange<InvitationResponse>
    invitations: ResponseRange<InvitationResponse>
}

export interface Message {
    uuid: string;
    sender_id: string;
    receiver_id?: string;
    message: string;
}

export interface ImageUpload {
    base64: string;
}

export interface Invitation {
    uuid: string;
    second_user_uuid?: string;
}

// ************************* Actions ***************************** //
export interface GetStudents extends Action {
    type: typeof GET_STUDENTS;
    payload: StudentsResponse
}

export interface GetStudent extends Action {
    type: typeof GET_STUDENT;
    payload: Student
}

export interface UpdateStudent extends Action {
    type: typeof UPDATE_STUDENT;
    payload: Student
}

export interface CreateStudent extends Action {
    type: typeof CREATE_STUDENT;
    payload: Student
}

export interface DeleteStudent extends Action {
    type: typeof DELETE_STUDENT;
    payload: {
        message: string
    }
}

export interface ResetStudentState extends Action {
    type: typeof RESET_STUDENT_STATE;
    payload: undefined
}

export interface GetMessages extends Action {
    type: typeof GET_MESSAGES;
    payload: ResponseRange<Message>
}

export interface GetConversations extends Action {
    type: typeof GET_CONVERSATIONS;
    payload: ResponseRange<Conversation>
}

export interface DeleteMessage extends Action {
    type: typeof DELETE_MESSAGE;
    payload: undefined
}

export interface SendMessage extends Action {
    type: typeof SEND_MESSAGE;
    payload: Message
}

export interface AcceptInvitation extends Action {
    type: typeof ACCEPT_INVITATION;
    payload: undefined
}

export interface RefuseInvitation extends Action {
    type: typeof REFUSE_INVITATION;
    payload: undefined
}

export interface SendInvitation extends Action {
    type: typeof SEND_INVITATION;
    payload: undefined
}

export interface GetInvitations extends Action {
    type: typeof GET_INVITATIONS;
    payload: ResponseRange<User>
}

export interface GetFriends extends Action {
    type: typeof GET_FRIENDS;
    payload: ResponseRange<User>
}

export interface DeleteFriend extends Action {
    type: typeof DELETE_FRIEND;
    payload: undefined
}

export interface UpdateProfilePic extends Action {
    type: typeof UPDATE_PROFILE_PIC;
    payload: undefined
}

export type StudentActions = 
GetStudents
| GetStudent
| UpdateStudent
| CreateStudent
| DeleteStudent 
| ResetStudentState
| SendMessage
| DeleteMessage
| GetMessages
| GetConversations
| AcceptInvitation
| RefuseInvitation
| SendInvitation
| GetInvitations
| GetFriends
| DeleteFriend
| UpdateProfilePic