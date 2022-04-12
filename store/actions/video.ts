import { CreateVideo, CREATE_VIDEO, DeleteResponse, DeleteVideo, DELETE_VIDEO, GetVideo, GetVideos, GET_VIDEO, GET_VIDEOS, Video, VideosResponse, UpdateVideo, UPDATE_VIDEO } from "../types";

export const getVideos = (data:VideosResponse):GetVideos => ({
  type: GET_VIDEOS,
  payload: data
})

export const getVideo = (data:Video):GetVideo => ({
  type: GET_VIDEO,
  payload: data
})

export const updateVideo = (data:Video):UpdateVideo => ({
  type: UPDATE_VIDEO,
  payload: data
})

export const createVideo = (data:Video):CreateVideo => ({
  type: CREATE_VIDEO,
  payload: data
})

export const deleteVideo = (data:DeleteResponse):DeleteVideo => ({
  type: DELETE_VIDEO,
  payload: data
})