import { Action } from "redux";
import { RequestRange } from ".";
import { BookRequest } from "./Book";
import { VideoRequest } from "./Video";

// ************************* Constants **************************** //
export const GET_TOPICS = "GET_TOPICS"
export const GET_TOPIC = "GET_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const CREATE_TOPIC = "CREATE_TOPIC"
export const DELETE_TOPIC = "DELETE_TOPIC"
export const RESET_TOPIC_STATE = "RESET_TOPIC_STATE"

// ************************* Interfaces ***************************** //
export interface Topic {
    uuid: string;
    title: string;
    visible_for: string;
}

export interface TopicsResponse {
    total?: number;
    pages?: number;
    current_page?: number;
    data: Topic[];
}

export interface TopicRequest {
    uuid?: string;
    title: string;
    visible_for: string;
    subject_uuid: string
}

export interface TopicState {
    topic_data: TopicsResponse;
    current_topic: Topic | null
}

// ************************* Actions ***************************** //
export interface GetTopics extends Action {
    type: typeof GET_TOPICS;
    payload: TopicsResponse
}

export interface GetTopic extends Action {
    type: typeof GET_TOPIC;
    payload: Topic
}

export interface UpdateTopic extends Action {
    type: typeof UPDATE_TOPIC;
    payload: Topic
}

export interface CreateTopic extends Action {
    type: typeof CREATE_TOPIC;
    payload: Topic
}

export interface DeleteTopic extends Action {
    type: typeof DELETE_TOPIC;
    payload: {
        message: string
    }
}

export interface ResetTopicState extends Action {
    type: typeof RESET_TOPIC_STATE;
    payload: undefined
}

export type TopicActions = 
GetTopics
| GetTopic
| UpdateTopic
| CreateTopic
| DeleteTopic 
| ResetTopicState