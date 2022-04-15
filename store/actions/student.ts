import { CreateStudent, CREATE_STUDENT, DeleteMessage, DeleteResponse, DeleteStudent, DELETE_MESSAGE, DELETE_STUDENT, GetConversations, GetMessages, GetStudent, GetStudents, GET_MESSAGES, GET_STUDENT, GET_STUDENTS, Message, ResponseRange, SendMessage, SEND_MESSAGE, Student, StudentsResponse, UpdateStudent, UPDATE_STUDENT, GET_CONVERSATIONS, User, Conversation, GetFriends, GET_FRIENDS, GetInvitations, GET_INVITATIONS, AcceptInvitation, ACCEPT_INVITATION, REFUSE_INVITATION, RefuseInvitation, DELETE_FRIEND, DeleteFriend, SEND_INVITATION, SendInvitation, UPDATE_PROFILE_PIC, UpdateProfilePic } from "../types";

export const getStudents = (data:StudentsResponse):GetStudents => ({
  type: GET_STUDENTS,
  payload: data
})

export const getStudent = (data:Student):GetStudent => ({
  type: GET_STUDENT,
  payload: data
})

export const updateStudent = (data:Student):UpdateStudent => ({
  type: UPDATE_STUDENT,
  payload: data
})

export const createStudent = (data:Student):CreateStudent => ({
  type: CREATE_STUDENT,
  payload: data
})

export const deleteStudent = (data:DeleteResponse):DeleteStudent => ({
  type: DELETE_STUDENT,
  payload: data
})

export const sendMessage = (data:Message):SendMessage => ({
  type: SEND_MESSAGE,
  payload: data
})

export const deleteMessage = (data:DeleteResponse):DeleteMessage => ({
  type: DELETE_MESSAGE,
  payload: undefined
})

export const getMessages = (data:ResponseRange<Message>):GetMessages => ({
  type: GET_MESSAGES,
  payload: data
})

export const getConversations = (data:ResponseRange<Conversation>):GetConversations => ({
  type: GET_CONVERSATIONS,
  payload: data
})

export const getFriends = (data:ResponseRange<User>):GetFriends => ({
  type: GET_FRIENDS,
  payload: data
})

export const getInvitations = (data:ResponseRange<User>):GetInvitations => ({
  type: GET_INVITATIONS,
  payload: data
})

export const sendInvitation = (data:undefined):SendInvitation => ({
  type: SEND_INVITATION,
  payload: data
})

export const acceptInvitation = (data:undefined):AcceptInvitation => ({
  type: ACCEPT_INVITATION,
  payload: data
})

export const refuseInvitation = (data:undefined):RefuseInvitation => ({
  type: REFUSE_INVITATION,
  payload: data
})

export const deleteFriend = (data:undefined):DeleteFriend => ({
  type: DELETE_FRIEND,
  payload: data
})

export const updateProfilePic = (data:undefined):UpdateProfilePic => ({
  type: UPDATE_PROFILE_PIC,
  payload: data
})