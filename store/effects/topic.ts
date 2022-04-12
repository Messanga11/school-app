import TopicService from "@/services/TopicService";
import { createTopic, deleteTopic, getTopics, updateTopic } from "../actions";
import { Effect, EffectRange } from "../types";
import { basicEffectFunction } from "./shared";

export const getTopicsEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, TopicService.getTopics, dispatch, getTopics)

export const createTopicEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, TopicService.createTopic, dispatch, createTopic)

export const updateTopicEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, TopicService.updateTopic, dispatch, updateTopic)

export const deleteTopicEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, TopicService.deleteTopic, dispatch, deleteTopic)