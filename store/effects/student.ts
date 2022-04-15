import StudentService from "@/services/StudentService";
import { createStudent, deleteMessage, deleteStudent, getConversations, getMessages, getStudents, sendMessage, updateStudent } from "../actions";
import { Effect, EffectRange } from "../types";
import { basicEffectFunction } from "./shared";
import { getFriends, getInvitations, acceptInvitation, refuseInvitation, deleteFriend, sendInvitation, updateProfilePic } from '../actions/student';

export const getStudentsEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, StudentService.getStudents, dispatch, getStudents)

export const createStudentEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, StudentService.createStudent, dispatch, createStudent)

export const updateStudentEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, StudentService.updateStudent, dispatch, updateStudent)

export const deleteStudentEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, StudentService.deleteStudent, dispatch, deleteStudent)

export const deleteMessageEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, StudentService.deleteMessage, dispatch, deleteMessage)

export const sendMessageEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, StudentService.sendMessage, dispatch, sendMessage)

export const getMessagesEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, StudentService.getMessages, dispatch, getMessages)

export const getConversationsEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, StudentService.getConversations, dispatch, getConversations)

export const getFriendsEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, StudentService.getFriends, dispatch, getFriends)

export const getInvitationsEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, StudentService.getInvitations, dispatch, getInvitations)

export const sendInvitationEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, StudentService.sendInvitation, dispatch, sendInvitation)

export const acceptInvitationEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, StudentService.acceptInvitation, dispatch, acceptInvitation)

export const refuseInvitationEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, StudentService.refuseInvitation, dispatch, refuseInvitation)

export const deleteFriendEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, StudentService.deleteFriend, dispatch, deleteFriend)

export const updateProfilePicEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, StudentService.updateProfilePic, dispatch, updateProfilePic)