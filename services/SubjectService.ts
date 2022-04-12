import { DeleteResponse, RequestRange, Subject, SubjectRequest, SubjectsResponse } from "@/store/types";
import BaseService from "./BaseService";
import { subjectUrls } from "./urls";

export default class SubjectService {
    static getSubjects = (range: (RequestRange | undefined)):Promise<Response> => BaseService.getRequest(subjectUrls.GET_SUBJECTS(range), true)
    static getSubject = (uuid:string):Promise<Response> => BaseService.getRequest(subjectUrls.GET_SUBJECT(uuid), true)
    static createSubject = (payload:SubjectRequest):Promise<Response> => BaseService.postRequest(subjectUrls.CREATE_SUBJECT, payload, true)
    static deleteSubject = (uuid:string):Promise<Response> => BaseService.deleteRequest(subjectUrls.DELETE_SUBJECT(uuid), {}, true)
    static updateSubject = (payload: Subject):Promise<Response> => BaseService.putRequest(subjectUrls.UPDATE_SUBJECT, payload, true)
}