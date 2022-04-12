import { LoginPayload } from "@/store/types/Auth";
import BaseService from "./BaseService";
import { authUrls } from "./urls";

export default class StudentService {
    static login = (payload:LoginPayload):Promise<Response> => BaseService.postRequest(authUrls.LOGIN, payload, true)
    static getAuthInfos = (payload:LoginPayload):Promise<Response> => BaseService.postRequest(authUrls.GET_AUTH_INFOS, payload, true)
    static updateAuthInfos = (payload:LoginPayload):Promise<Response> => BaseService.putRequest(authUrls.UPDATE_AUTH_INFOS, payload, true)
}