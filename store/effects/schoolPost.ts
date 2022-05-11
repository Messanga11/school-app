import SchoolPostService from "@/services/SchoolPostService";
import { createSchoolPost, deleteSchoolPost, getSchoolPost, getSchoolPosts, updateSchoolPost } from "../actions";
import { Effect, EffectRange } from "../types";
import { basicEffectFunction } from "./shared";

export const getSchoolPostsEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, SchoolPostService.getSchoolPosts, dispatch, getSchoolPosts)

export const getSchoolPostEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, SchoolPostService.getSchoolPost, dispatch, getSchoolPost)

export const createSchoolPostEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, SchoolPostService.createSchoolPost, dispatch, createSchoolPost)

export const updateSchoolPostEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, SchoolPostService.updateSchoolPost, dispatch, updateSchoolPost)

export const deleteSchoolPostEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, SchoolPostService.deleteSchoolPost, dispatch, deleteSchoolPost)
