import { DeleteResponse, Message, RequestRange, ResponseRange, Student, StudentRequest, StudentsResponse, ImageUpload } from "@/store/types";
import BaseService from "./BaseService";
import { studentUrls } from "./urls";

export default class StudentService {
    static getStudents = (range: (RequestRange | undefined)):Promise<Response> => BaseService.getRequest(studentUrls.GET_STUDENTS(range), true)
    static getStudent = (uuid:string):Promise<Response> => BaseService.getRequest(studentUrls.GET_STUDENT(uuid), true)
    static createStudent = (payload:StudentRequest):Promise<Response> => BaseService.postRequest(studentUrls.CREATE_STUDENT, payload, true)
    static deleteStudent = (uuid:string):Promise<Response> => BaseService.deleteRequest(studentUrls.DELETE_STUDENT(uuid), {}, true)
    static updateStudent = (payload: Student):Promise<Response> => BaseService.putRequest(studentUrls.UPDATE_STUDENT, payload, true)
    static sendMessage = (payload: Message):Promise<Response> => BaseService.postRequest(studentUrls.SEND_MESSAGE, payload, true)
    static deleteMessage = (payload: Message):Promise<Response> => BaseService.deleteRequest(studentUrls.DELETE_MESSAGE, payload, true)
    static getMessages = (range: (RequestRange | undefined)):Promise<Response> => BaseService.getRequest(studentUrls.GET_MESSAGES(range), true)
    static getConversations = (range: (RequestRange | undefined)):Promise<Response> => BaseService.getRequest(studentUrls.GET_CONVERSATIONS, true)
    static getFriends = (range: (RequestRange | undefined)):Promise<Response> => BaseService.getRequest(studentUrls.GET_FRIENDS, true)
    static getInvitations = (range: (RequestRange | undefined)):Promise<Response> => BaseService.getRequest(studentUrls.GET_INVITATIONS, true)
    static acceptInvitation = (payload: Message):Promise<Response> => BaseService.postRequest(studentUrls.ACCEPT_INVITATION, payload, true)
    static sendInvitation = (payload: Message):Promise<Response> => BaseService.postRequest(studentUrls.SEND_INVITATION, payload, true)
    static refuseInvitation = (payload: Message):Promise<Response> => BaseService.deleteRequest(studentUrls.REFUSE_INVITATION, payload, true)
    static deleteFriend = (payload: Message):Promise<Response> => BaseService.deleteRequest(studentUrls.DELETE_FRIEND, payload, true)
    static updateProfilePic = (payload: ImageUpload):Promise<Response> => BaseService.postRequest(studentUrls.UPDATE_PROFILE_PIC, payload, true)
}