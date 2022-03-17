import { notificationActions } from "../../actionTypes";
import { NotificationState, ApplicationAction } from "../../types";

const initialState: NotificationState = {
  notifications: [],
  loading: false,
  loadingSettings: false,
  notificationSettings: null,
  unreadCount: null
};

const notificationReducer = (state = initialState, { type, payload }: ApplicationAction) => {
  switch (type) {
    
    case notificationActions.GET_NOTIFICATIONS_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    
    case notificationActions.GET_NOTIFICATIONS_SUCCESS: {
      return {
        ...state,
        loading: false,
        notifications: payload
      }
    }
    
    case notificationActions.GET_NOTIFICATIONS_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    
    case notificationActions.MARK_AS_READ_REQUEST: {
        return {
            ...state,
            loading: true
        }
    }
    
    case notificationActions.MARK_AS_READ_SUCCESS: {
        const notificationIndex = state.notifications.findIndex(notif => notif.id === payload.notification_id)
        if(notificationIndex > -1) {
            state.notifications[notificationIndex].read = true
        }
        return {
            ...state,
            loading: false
        }
    }
    
    case notificationActions.MARK_AS_READ_FAIL: {
        return {
            ...state,
            loading: false
        }
    }
    
    case notificationActions.MARK_AS_DELETE_REQUEST: {
        return {
            ...state,
            loading: true
        }
    }
    
    case notificationActions.MARK_AS_DELETE_SUCCESS: {
        const notificationIndex = state.notifications.findIndex(notif => notif.id === payload.notification_id)
        if(notificationIndex > -1) {
            state.notifications.splice(notificationIndex, 1)
        }
        return {
            ...state,
            loading: false
        }
    }
    
    case notificationActions.MARK_AS_DELETE_FAIL: {
        return {
            ...state,
            loading: false
        }
    }
    
    case notificationActions.GET_UNREAD_COUNT_REQUEST: {
        return {
            ...state,
            loading: true
        }
    }
    
    case notificationActions.GET_UNREAD_COUNT_SUCCESS: {
        const notificationIndex = state.notifications.findIndex(notif => notif.id === payload.notification_id)
        if(notificationIndex > -1) {
            state.notifications.splice(notificationIndex, 1)
        }
        return {
            ...state,
            loading: false
        }
    }
    
    case notificationActions.GET_UNREAD_COUNT_FAIL: {
        return {
            ...state,
            loading: false
        }
    }
    
    case notificationActions.GET_ALL_UNREAD_REQUEST: {
        return {
            ...state,
            loading: true
        }
    }
    
    case notificationActions.GET_ALL_UNREAD_SUCCESS: {
        return {
            ...state,
            notifications: payload,
            loading: false
        }
    }
    
    case notificationActions.GET_ALL_UNREAD_FAIL: {
        return {
            ...state,
            loading: false
        }
    }
  
    case notificationActions.GET_NOTIFICATIONS_SETTINGS_REQUEST: {
        return {
            ...state,
            loadingSettings: true
        }
    }
    
    case notificationActions.GET_NOTIFICATIONS_SETTINGS_SUCCESS: {
        return {
            ...state,
            notificationSettings: payload,
            loadingSettings: false
        }
    }
    
    case notificationActions.GET_NOTIFICATIONS_SETTINGS_FAIL: {
        return {
            ...state,
            loadingSettings: false
        }
    }
  
    case notificationActions.SET_NOTIFICATIONS_SETTINGS_REQUEST: {
        return {
            ...state,
            loadingSettings: true
        }
    }
    
    case notificationActions.SET_NOTIFICATIONS_SETTINGS_SUCCESS: {
        return {
            ...state,
            loadingSettings: false
        }
    }
    
    case notificationActions.SET_NOTIFICATIONS_SETTINGS_FAIL: {
        return {
            ...state,
            loadingSettings: false
        }
    }
    
    default:
      return {...state};
  }
};

export default notificationReducer