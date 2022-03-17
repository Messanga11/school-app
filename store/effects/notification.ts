import { ThunkAction } from "redux-thunk";
import notificationService from "../../service/api/notificationService";
import { requestErrorHandler, requestSuccessHandler } from "../../utils/common";
import { _getAllUnreadFail, _getAllUnreadRequest, _getAllUnreadSuccess, _getNotificationsFail, _getNotificationsRequest, _getNotificationsSettingsFail, _getNotificationsSettingsRequest, _getNotificationsSettingsSuccess, _getNotificationsSuccess, _getUnreadCountFail, _getUnreadCountRequest, _getUnreadCountSuccess, _markAsDeleteFail, _markAsDeleteRequest, _markAsDeleteSuccess, _markAsReadFail, _markAsReadRequest, _markAsReadSuccess, _setNotificationsSettingsFail, _setNotificationsSettingsRequest, _setNotificationsSettingsSuccess } from "../actions/notification";
import { notificationActions } from "../actionTypes";
import { NotificationState, ApplicationAction } from "../types";

type Effect = ThunkAction<any, NotificationState, any, ApplicationAction>;

export const getNotificationsEffect =
  (): Effect =>
  async (dispatch, getState) => {
    dispatch(_getNotificationsRequest());
    try {
      const res = await notificationService.getNotifications();
      const data = await res.json();
      requestSuccessHandler(
        res.status, data?.detail,
        () => dispatch(_getNotificationsSuccess(data)),
        () => dispatch(_getNotificationsFail())
      );
    } catch (error) {
      requestErrorHandler(() => dispatch(_getNotificationsFail()));
    }
  };

  export const getUnreadCountEffect =
  (): Effect =>
  async (dispatch, getState) => {
    dispatch(_getUnreadCountRequest());
    try {
      const res = await notificationService.getUnreadCount();
      const data = await res.json();
      requestSuccessHandler(
        res.status, data?.detail,
        () => dispatch(_getUnreadCountSuccess(data)),
        () => dispatch(_getUnreadCountFail())
      );
    } catch (error) {
      requestErrorHandler(() => dispatch(_getUnreadCountFail()));
    }
  };
  
  export const getAllUnreadEffect =
  (): Effect =>
  async (dispatch, getState) => {
    dispatch(_getAllUnreadRequest());
    try {
      const res = await notificationService.getAllUnread();
      const data = await res.json();
      requestSuccessHandler(
        res.status, data?.detail,
        () => dispatch(_getAllUnreadSuccess(data)),
        () => dispatch(_getAllUnreadFail())
      );
    } catch (error) {
      requestErrorHandler(() => dispatch(_getAllUnreadFail()));
    }
  };
  
  export const getNotificationsSettingsEffect =
  (cb = (_:any) => undefined): Effect =>
  async (dispatch, getState) => {
    dispatch(_getNotificationsSettingsRequest());
    try {
      const res = await notificationService.getNotificationsSettings();
      const data = await res.json();
      requestSuccessHandler(
        res.status, data?.detail,
        () => {
          dispatch(_getNotificationsSettingsSuccess(data))
          cb(data)
        },
        () => dispatch(_getNotificationsSettingsFail())
      );
    } catch (error) {
      requestErrorHandler(() => dispatch(_getNotificationsSettingsFail()));
    }
  };
  
  export const setNotificationsSettingsEffect =
  (payload:object, cb = () => undefined): Effect =>
  async (dispatch, getState) => {
    dispatch(_setNotificationsSettingsRequest());
    try {
      const res = await notificationService.setNotificationsSettings(payload);
      const data = await res.json();
      requestSuccessHandler(
        res.status, data?.detail,
        () => {
          dispatch(_setNotificationsSettingsSuccess(data))
          cb()
        },
        () => dispatch(_setNotificationsSettingsFail())
      );
    } catch (error) {
      requestErrorHandler(() => dispatch(_setNotificationsSettingsFail()));
    }
  };

  export const markAsReadEffect =
  (payload:object, cb = () => undefined): Effect =>
  async (dispatch, getState) => {
    dispatch(_markAsReadRequest());
    try {
      const res = await notificationService.markAsRead(payload);
      const data = await res.json();
      requestSuccessHandler(
        res.status, data?.detail,
        () => {
          dispatch(_markAsReadSuccess(data))
          cb()
        },
        () => dispatch(_markAsReadFail())
      );
    } catch (error) {
      requestErrorHandler(() => dispatch(_markAsReadFail()));
    }
  };

  export const markAsDeleteEffect =
  (payload:object, cb = () => undefined): Effect =>
  async (dispatch, getState) => {
    dispatch(_markAsDeleteRequest());
    try {
      const res = await notificationService.markAsDelete(payload);
      const data = await res.json();
      requestSuccessHandler(
        res.status, data?.detail,
        () => {
          dispatch(_markAsDeleteSuccess(data))
          cb()
        },
        () => dispatch(_markAsDeleteFail())
      );
    } catch (error) {
      requestErrorHandler(() => dispatch(_markAsDeleteFail()));
    }
  };