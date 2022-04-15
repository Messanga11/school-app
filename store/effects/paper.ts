import PaperService from "@/services/PaperService";
import { createPaper, deletePaper, getPapers, updatePaper } from "../actions";
import { Effect, EffectRange } from "../types";
import { basicEffectFunction } from "./shared";
import { validatePaper } from '../actions/paper';

export const getPapersEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, PaperService.getPapers, dispatch, getPapers)

export const createPaperEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, PaperService.createPaper, dispatch, createPaper)

export const updatePaperEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, PaperService.updatePaper, dispatch, updatePaper)

export const deletePaperEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, PaperService.deletePaper, dispatch, deletePaper)

export const validatePaperEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, PaperService.validatePaper, dispatch, validatePaper)