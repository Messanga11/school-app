import { DeleteResponse, RequestRange, SchoolPost, SchoolPostRequest, SchoolPostsResponse } from "@/store/types";
import BaseService from "./BaseService";
import { schoolPostUrls } from "./urls";

export default class SchoolPostService {
    static getSchoolPosts = (range: (RequestRange | undefined)):Promise<Response> => BaseService.getRequest(schoolPostUrls.GET_SCHOOL_POSTS(range), true)
    static getSchoolPost = (uuid:string):Promise<Response> => BaseService.getRequest(schoolPostUrls.GET_SCHOOL_POST(uuid), true)
    static createSchoolPost = (payload:SchoolPostRequest):Promise<Response> => BaseService.postRequest(schoolPostUrls.CREATE_SCHOOL_POST, payload, true)
    static deleteSchoolPost = (uuid:string):Promise<Response> => BaseService.deleteRequest(schoolPostUrls.DELETE_SCHOOL_POST(uuid), {}, true)
    static updateSchoolPost = (payload: SchoolPost):Promise<Response> => BaseService.putRequest(schoolPostUrls.UPDATE_SCHOOL_POST, payload, true)
}