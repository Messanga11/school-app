import { DeleteResponse, RequestRange, School, SchoolRequest, SchoolsResponse } from "@/store/types";
import BaseService from "./BaseService";
import { schoolUrls } from "./urls";

export default class SchoolService {
    static getSchools = (range: (RequestRange | undefined)):Promise<Response> => BaseService.getRequest(schoolUrls.GET_SCHOOLS(range), true)
    static getSchool = (uuid:string):Promise<Response> => BaseService.getRequest(schoolUrls.GET_SCHOOL(uuid), true)
    static createSchool = (payload:SchoolRequest):Promise<Response> => BaseService.postRequest(schoolUrls.CREATE_SCHOOL, payload, true)
    static deleteSchool = (uuid:string):Promise<Response> => BaseService.deleteRequest(schoolUrls.DELETE_SCHOOL(uuid), {}, true)
    static updateSchool = (payload: School):Promise<Response> => BaseService.putRequest(schoolUrls.UPDATE_SCHOOL, payload, true)
}