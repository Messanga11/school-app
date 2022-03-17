import { notificationActions } from "../actionTypes"
import { getAllUnreadFail, getAllUnreadRequest, getAllUnreadSuccess, getNotificationsSalonFail, getNotificationsSalonRequest, getNotificationsSalonSuccess, getNotificationsSettingsFail, getNotificationsSettingsRequest, getNotificationsSettingsSuccess, getUnreadCountFail, getUnreadCountRequest, getUnreadCountSuccess, markAsDeleteFail, markAsDeleteRequest, markAsDeleteSuccess, markAsReadSalonFail, markAsReadSalonRequest, markAsReadSalonSuccess, setNotificationsSettingsFail, setNotificationsSettingsRequest, setNotificationsSettingsSuccess } from "../types"

export const _getNotificationsRequest = ():getNotificationsSalonRequest => ({
    type: notificationActions.GET_NOTIFICATIONS_REQUEST
  })
  export const _getNotificationsSuccess = (data:object):getNotificationsSalonSuccess => ({
    type: notificationActions.GET_NOTIFICATIONS_SUCCESS,
    payload: data
  })
  export const _getNotificationsFail = ():getNotificationsSalonFail => ({
    type: notificationActions.GET_NOTIFICATIONS_FAIL
  })
  export const _markAsReadRequest = ():markAsReadSalonRequest => ({
    type: notificationActions.MARK_AS_READ_REQUEST
  })
  export const _markAsReadSuccess = (data:object):markAsReadSalonSuccess => ({
    type: notificationActions.MARK_AS_READ_SUCCESS,
    payload: data
  })
  export const _markAsReadFail = ():markAsReadSalonFail => ({
    type: notificationActions.MARK_AS_READ_FAIL
  })
  export const _markAsDeleteRequest = ():markAsDeleteRequest => ({
    type: notificationActions.MARK_AS_DELETE_REQUEST
  })
  export const _markAsDeleteSuccess = (data:object):markAsDeleteSuccess => ({
    type: notificationActions.MARK_AS_DELETE_SUCCESS,
    payload: data
  })
  export const _markAsDeleteFail = ():markAsDeleteFail => ({
    type: notificationActions.MARK_AS_DELETE_FAIL
  })
  export const _getUnreadCountRequest = ():getUnreadCountRequest => ({
    type: notificationActions.GET_UNREAD_COUNT_REQUEST
  })
  export const _getUnreadCountSuccess = (data:object):getUnreadCountSuccess => ({
    type: notificationActions.GET_UNREAD_COUNT_SUCCESS,
    payload: data
  })
  export const _getUnreadCountFail = ():getUnreadCountFail => ({
    type: notificationActions.GET_UNREAD_COUNT_FAIL
  })
  export const _getAllUnreadRequest = ():getAllUnreadRequest => ({
    type: notificationActions.GET_UNREAD_COUNT_REQUEST
  })
  export const _getAllUnreadSuccess = (data:object):getAllUnreadSuccess => ({
    type: notificationActions.GET_UNREAD_COUNT_SUCCESS,
    payload: data
  })
  export const _getAllUnreadFail = ():getAllUnreadFail => ({
    type: notificationActions.GET_UNREAD_COUNT_FAIL
  })
  export const _getNotificationsSettingsRequest = ():getNotificationsSettingsRequest => ({
    type: notificationActions.GET_NOTIFICATIONS_SETTINGS_REQUEST
  })
  export const _getNotificationsSettingsSuccess = (data:object):getNotificationsSettingsSuccess => ({
    type: notificationActions.GET_NOTIFICATIONS_SETTINGS_SUCCESS,
    payload: data
  })
  export const _getNotificationsSettingsFail = ():getNotificationsSettingsFail => ({
    type: notificationActions.GET_NOTIFICATIONS_SETTINGS_FAIL
  })
  export const _setNotificationsSettingsRequest = ():setNotificationsSettingsRequest => ({
    type: notificationActions.SET_NOTIFICATIONS_SETTINGS_REQUEST
  })
  export const _setNotificationsSettingsSuccess = (data:object):setNotificationsSettingsSuccess => ({
    type: notificationActions.SET_NOTIFICATIONS_SETTINGS_SUCCESS,
    payload: data
  })
  export const _setNotificationsSettingsFail = ():setNotificationsSettingsFail => ({
    type: notificationActions.SET_NOTIFICATIONS_SETTINGS_FAIL
  })