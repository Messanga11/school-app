import { RequestRange } from "@/store/types"

export const apiPrefix:string = "http://localhost:5301"

export const authUrls = {
    LOGIN: (guardian_phone_number?:number | string) => `${apiPrefix}/auth/login${!!guardian_phone_number ? `/${guardian_phone_number}` : ""}`,
    GET_AUTH_INFOS: `${apiPrefix}/auth/me`,
    UPDATE_AUTH_INFOS: `${apiPrefix}/administration/users`
}

export const studentUrls = {
    GET_STUDENTS: (range:RequestRange | undefined):string => `${apiPrefix}/administration/users`,
    GET_STUDENT: (uuid:string):string => `${apiPrefix}/administration/users/${uuid}`,
    CREATE_STUDENT: `${apiPrefix}/administration/users`,
    DELETE_STUDENT: (uuid:string):string => `${apiPrefix}/administration/users/${uuid}`,
    UPDATE_STUDENT: `${apiPrefix}/administration/users`,
    GET_MESSAGES: (range:RequestRange | undefined):string => `${apiPrefix}/administration/messages/${range?.conversation_uuid || ""}?page=${range?.page || ""}&per_page${range?.per_page || ""}&order_field=${range?.order_field || "desc"}`,
    GET_CONVERSATIONS: `${apiPrefix}/administration/messages/conversations`,
    DELETE_MESSAGE: `${apiPrefix}/administration/messages`,
    SEND_MESSAGE: `${apiPrefix}/administration/messages`,
    GET_FRIENDS: `${apiPrefix}/administration/users/friends`,
    GET_INVITATIONS: `${apiPrefix}/administration/users/invitations/get`,
    ACCEPT_INVITATION: `${apiPrefix}/administration/users/accept-invitation`,
    REFUSE_INVITATION: `${apiPrefix}/administration/users/remove-friend`,
    DELETE_FRIEND: `${apiPrefix}/administration/users/remove-friend`,
    SEND_INVITATION: `${apiPrefix}/administration/users/send-invitation`,
    UPDATE_PROFILE_PIC: `${apiPrefix}/upload/images/update-profile`,
}

export const topicUrls = {
    GET_TOPICS: (range:RequestRange | undefined):string => `${apiPrefix}/administration/topics/${range?.subject_uuid || ""}`,
    GET_TOPIC: (uuid:string):string => `${apiPrefix}/administration/topics/${uuid}`,
    CREATE_TOPIC: `${apiPrefix}/administration/topics`,
    DELETE_TOPIC: (uuid:string):string => `${apiPrefix}/administration/topics/${uuid}`,
    UPDATE_TOPIC: `${apiPrefix}/administration/topics`,
}

export const bookUrls = {
    GET_BOOKS: (range:RequestRange | undefined):string => `${apiPrefix}/administration/books`,
    GET_BOOK: (uuid:string):string => `${apiPrefix}/administration/books/${uuid}`,
    CREATE_BOOK: `${apiPrefix}/administration/books`,
    DELETE_BOOK: (uuid:string):string => `${apiPrefix}/administration/books/${uuid}`,
    UPDATE_BOOK: `${apiPrefix}/administration/books`,
}

export const schoolUrls = {
    GET_SCHOOLS: (range:RequestRange | undefined):string => `${apiPrefix}/administration/schools?page=${range?.page || "1"}&per_page=${range?.per_page || "10"}&region=${range?.region || ""}&keyword=${range?.keyword || ""}`,
    GET_SCHOOL: (uuid:string):string => `${apiPrefix}/administration/schools/${uuid}`,
    CREATE_SCHOOL: `${apiPrefix}/administration/schools`,
    DELETE_SCHOOL: (uuid:string):string => `${apiPrefix}/administration/schools/${uuid}`,
    UPDATE_SCHOOL: `${apiPrefix}/administration/schools`,
}

export const schoolPostUrls = {
    GET_SCHOOL_POSTS: (range:RequestRange | undefined):string => `${apiPrefix}/administration/schoolPosts`,
    GET_SCHOOL_POST: (uuid:string):string => `${apiPrefix}/administration/schoolPosts/${uuid}`,
    CREATE_SCHOOL_POST: `${apiPrefix}/administration/schoolPosts`,
    DELETE_SCHOOL_POST: (uuid:string):string => `${apiPrefix}/administration/schoolPosts/${uuid}`,
    UPDATE_SCHOOL_POST: `${apiPrefix}/administration/schoolPosts`,
}

export const paperUrls = {
    GET_PAPERS: (range:RequestRange | undefined):string => `${apiPrefix}/administration/papers`,
    GET_PAPER: (uuid:string):string => `${apiPrefix}/administration/papers/${uuid}`,
    CREATE_PAPER: `${apiPrefix}/administration/papers`,
    DELETE_PAPER: (uuid:string):string => `${apiPrefix}/administration/papers/${uuid}`,
    UPDATE_PAPER: `${apiPrefix}/administration/papers`,
    VALIDATE_PAPER: `${apiPrefix}/administration/papers/validate`,
}

export const paymentUrls = {
    GET_PAYMENTS: (range:RequestRange | undefined):string => `${apiPrefix}/administration/payments`,
    GET_PAYMENT: (uuid:string):string => `${apiPrefix}/administration/payments/${uuid}`,
    CREATE_PAYMENT: `${apiPrefix}/administration/payments`,
    DELETE_PAYMENT: (uuid:string):string => `${apiPrefix}/administration/payments/${uuid}`,
    UPDATE_PAYMENT: `${apiPrefix}/administration/payments`,
}

export const subjectUrls = {
    GET_SUBJECTS: (range:RequestRange | undefined):string => `${apiPrefix}/administration/subjects`,
    GET_SUBJECT: (uuid:string):string => `${apiPrefix}/administration/subjects/${uuid}`,
    CREATE_SUBJECT: `${apiPrefix}/administration/subjects`,
    DELETE_SUBJECT: (uuid:string):string => `${apiPrefix}/administration/subjects/${uuid}`,
    UPDATE_SUBJECT: `${apiPrefix}/administration/subjects`,
}

export const videoUrls = {
    GET_VIDEOS: (range:RequestRange | undefined):string => `${apiPrefix}/administration/videos`,
    GET_VIDEO: (uuid:string):string => `${apiPrefix}/administration/videos/${uuid}`,
    CREATE_VIDEO: `${apiPrefix}/administration/videos`,
    DELETE_VIDEO: (uuid:string):string => `${apiPrefix}/administration/videos/${uuid}`,
    UPDATE_VIDEO: `${apiPrefix}/administration/videos`,
}

export const messagesUrls = {
    GET_MESSAGES: (range:RequestRange | undefined):string => `${apiPrefix}/administration/message`,
    GET_MESSAGE: (uuid:string):string => `${apiPrefix}/administration/message/${uuid}`,
    CREATE_MESSAGE: `${apiPrefix}/administration/message`,
    DELETE_MESSAGE: (uuid:string):string => `${apiPrefix}/administration/message/${uuid}`,
    UPDATE_MESSAGE: `${apiPrefix}/administration/message`,
}