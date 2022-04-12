import { Action } from "redux";
import { RequestRange } from ".";

// ************************* Constants **************************** //
export const GET_VIDEOS = "GET_VIDEOS"
export const GET_VIDEO = "GET_VIDEO"
export const UPDATE_VIDEO = "UPDATE_VIDEO"
export const CREATE_VIDEO = "CREATE_VIDEO"
export const DELETE_VIDEO = "DELETE_VIDEO"
export const RESET_VIDEO_STATE = "RESET_VIDEO_STATE"

// ************************* Interfaces ***************************** //
export interface Video {
    uuid: string;
    first_name: string;
    last_name: string;
    phone_number: number;
    email?: string;
    img_url?: string;
    guardian_phone_number?: number;
}

export interface VideosResponse {
    total: number;
    pages: number;
    current_page: number;
    data: Video[];
}

export interface VideoRequest {
    title: string;
    file: File
}

export interface VideoState {
    video_data: VideosResponse;
    current_video: Video | null
}

// ************************* Actions ***************************** //
export interface GetVideos extends Action {
    type: typeof GET_VIDEOS;
    payload: VideosResponse
}

export interface GetVideo extends Action {
    type: typeof GET_VIDEO;
    payload: Video
}

export interface UpdateVideo extends Action {
    type: typeof UPDATE_VIDEO;
    payload: Video
}

export interface CreateVideo extends Action {
    type: typeof CREATE_VIDEO;
    payload: Video
}

export interface DeleteVideo extends Action {
    type: typeof DELETE_VIDEO;
    payload: {
        message: string
    }
}

export interface ResetVideoState extends Action {
    type: typeof RESET_VIDEO_STATE;
    payload: undefined
}

export type VideoActions = 
GetVideos
| GetVideo
| UpdateVideo
| CreateVideo
| DeleteVideo 
| ResetVideoState