import { DeleteResponse, RequestRange, Paper, PaperRequest, PapersResponse } from "@/store/types";
import BaseService from "./BaseService";
import { paperUrls } from "./urls";

export default class PaperService {
    static getPapers = (range: (RequestRange | undefined)):Promise<Response> => BaseService.getRequest(paperUrls.GET_PAPERS(range), true)
    static getPaper = (uuid:string):Promise<Response> => BaseService.getRequest(paperUrls.GET_PAPER(uuid), true)
    static createPaper = (payload:PaperRequest):Promise<Response> => BaseService.postRequest(paperUrls.CREATE_PAPER, payload, true)
    static deletePaper = (uuid:string):Promise<Response> => BaseService.deleteRequest(paperUrls.DELETE_PAPER(uuid), {}, true)
    static updatePaper = (payload: Paper):Promise<Response> => BaseService.putRequest(paperUrls.UPDATE_PAPER, payload, true)
}