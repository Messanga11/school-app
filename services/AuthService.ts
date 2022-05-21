import { LoginPayload } from "@/store/types/Auth";
import BaseService from "./BaseService";
import { authUrls } from "./urls";

export default class StudentService {
    static login = (payload:LoginPayload):Promise<Response> => {
        const {guardian_phone_number, type, ...payloadData} = payload
        return BaseService.postRequest(authUrls.LOGIN(guardian_phone_number || type), payloadData, false)}
    static getAuthInfos = ():Promise<Response> => BaseService.postRequest(authUrls.GET_AUTH_INFOS, {}, true)
    static updateAuthInfos = (payload:LoginPayload):Promise<Response> => BaseService.putRequest(authUrls.UPDATE_AUTH_INFOS, payload, true)
}