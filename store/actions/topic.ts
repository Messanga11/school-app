import { CreateTopic, CREATE_TOPIC, DeleteResponse, DeleteTopic, DELETE_TOPIC, GetTopic, GetTopics, GET_TOPIC, GET_TOPICS, Topic, TopicsResponse, UpdateTopic, UPDATE_TOPIC } from "../types";

export const getTopics = (data:TopicsResponse):GetTopics => ({
  type: GET_TOPICS,
  payload: data
})

export const getTopic = (data:Topic):GetTopic => ({
  type: GET_TOPIC,
  payload: data
})

export const updateTopic = (data:Topic):UpdateTopic => ({
  type: UPDATE_TOPIC,
  payload: data
})

export const createTopic = (data:Topic):CreateTopic => ({
  type: CREATE_TOPIC,
  payload: data
})

export const deleteTopic = (data:DeleteResponse):DeleteTopic => ({
  type: DELETE_TOPIC,
  payload: data
})