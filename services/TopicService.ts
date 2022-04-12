import { DeleteResponse, RequestRange, Topic, TopicRequest, TopicsResponse } from "@/store/types";
import BaseService from "./BaseService";
import { topicUrls } from "./urls";

export default class TopicService {
    static getTopics = (range: (RequestRange | undefined)):Promise<Response> => BaseService.getRequest(topicUrls.GET_TOPICS(range), true)
    static getTopic = (uuid:string):Promise<Response> => BaseService.getRequest(topicUrls.GET_TOPIC(uuid), true)
    static createTopic = (payload:TopicRequest):Promise<Response> => BaseService.postRequest(topicUrls.CREATE_TOPIC, payload, true)
    static deleteTopic = (uuid:string):Promise<Response> => BaseService.deleteRequest(topicUrls.DELETE_TOPIC(uuid), {}, true)
    static updateTopic = (payload: Topic):Promise<Response> => BaseService.putRequest(topicUrls.UPDATE_TOPIC, payload, true)
}