import SchoolService from "@/services/SchoolService";
import { createSchool, deleteSchool, getSchool, getSchools, updateSchool } from "../actions";
import { Effect, EffectRange } from "../types";
import { basicEffectFunction } from "./shared";

export const getSchoolsEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, SchoolService.getSchools, dispatch, getSchools)

export const getSchoolEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, SchoolService.getSchool, dispatch, getSchool)

export const createSchoolEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, SchoolService.createSchool, dispatch, createSchool)

export const updateSchoolEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, SchoolService.updateSchool, dispatch, updateSchool)

export const deleteSchoolEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, SchoolService.deleteSchool, dispatch, deleteSchool)
