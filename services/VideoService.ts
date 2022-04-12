import { DeleteResponse, RequestRange, Video, VideoRequest, VideosResponse } from "@/store/types";
import BaseService from "./BaseService";
import { videoUrls } from "./urls";

export default class VideoService {
    static getVideos = (range: (RequestRange | undefined)):Promise<Response> => BaseService.getRequest(videoUrls.GET_TOPICS(range), true)
    static getVideo = (uuid:string):Promise<Response> => BaseService.getRequest(videoUrls.GET_TOPIC(uuid), true)
    static createVideo = (payload:VideoRequest):Promise<Response> => BaseService.postRequest(videoUrls.CREATE_TOPIC, payload, true)
    static deleteVideo = (uuid:string):Promise<Response> => BaseService.deleteRequest(videoUrls.DELETE_TOPIC(uuid), {}, true)
    static updateVideo = (payload: Video):Promise<Response> => BaseService.putRequest(videoUrls.UPDATE_TOPIC, payload, true)
}