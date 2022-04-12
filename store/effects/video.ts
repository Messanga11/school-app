import VideoService from "@/services/VideoService";
import { createVideo, deleteVideo, getVideos, updateVideo } from "../actions";
import { Effect, EffectRange } from "../types";
import { basicEffectFunction } from "./shared";

export const getVideosEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, VideoService.getVideos, dispatch, getVideos)

export const createVideoEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, VideoService.createVideo, dispatch, createVideo)

export const updateVideoEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, VideoService.updateVideo, dispatch, updateVideo)

export const deleteVideoEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, VideoService.deleteVideo, dispatch, deleteVideo)