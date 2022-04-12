import SubjectService from "@/services/SubjectService";
import { createSubject, deleteSubject, getSubjects, updateSubject } from "../actions";
import { Effect, EffectRange } from "../types";
import { basicEffectFunction } from "./shared";

export const getSubjectsEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, SubjectService.getSubjects, dispatch, getSubjects)

export const createSubjectEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, SubjectService.createSubject, dispatch, createSubject)

export const updateSubjectEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, SubjectService.updateSubject, dispatch, updateSubject)

export const deleteSubjectEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, SubjectService.deleteSubject, dispatch, deleteSubject)