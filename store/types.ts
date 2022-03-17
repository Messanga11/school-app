import { LayoutState } from "framer-motion/types/render/utils/state";
import { Action } from "redux";
import { authActions, orderActions, bookingActions, productActions, salonActions, notificationActions } from "./actionTypes"
import {
  Article,
  Booking,
  Conversation,
  Hairdresser,
  HairstyleInspiration,
  HomepageItem,
  List,
  Order,
  Product,
  Profile,
  Program,
  Salon,
  User
} from "./ResponseTypes";
import {
  ChatState,
  fetchAllConversationError,
  fetchAllConversationRequest,
  fetchAllConversationSuccess,
  fetchOneConversationError,
  fetchOneConversationSuccess,
  sendMessageFileRequest,
  sendMessageFileSuccess,
  sendMessageRequest,
  sendMessageSuccess
} from "./types/ChatTypes";

// ************* What an action looks like
interface BasicAction extends Action {
  type: string;
  payload?: any;
}

// --------------- STATES --------------------
// ************* Auth State
export interface AuthState {
  loading: boolean,
  token: string,
  user: User,
  tokenPro: string,
  userPro: User,
  salon: any,
  locale: string,
  globalData: any,
  activeProfile: Profile,
  loadingUpdateSalon: boolean,
  pos: null | { lat: number, lng: number },
  stats: any[],
  parcours: any[],
  articles: {
    total: number,
    pages: number,
    current_page: number,
    per_page: number,
    data: Article[],
    loading: boolean,
  }
  homepage: {
    total: number,
    pages: number,
    current_page: number,
    per_page: number,
    data: HomepageItem[],
    loading: boolean,
  },
  lastRecievedMsg: {
    conversation?: Conversation | null,
    programs: Program[],
    bookings: Booking[],
    loading: boolean
  }
};

interface CartItem {
  product: Product,
  qty: number
}

export interface ProductState {
  products: {
    total: number,
    pages: number,
    current_page: number,
    per_page: number,
    data: Product[],
    loading: boolean,
  },
  onlineProducts: {
    total: number,
    pages: number,
    current_page: number,
    per_page: number,
    data: Product[],
    loading: boolean,
  },
  subCatProducts: {
    total: number,
    pages: number,
    current_page: number,
    per_page: number,
    data: Product[],
    loading: boolean,
  },
  tips: {
    data: Product[],
  },
  cart: CartItem[]
};

export interface OrderState extends List {
  data: Order[],
  loading: boolean,
};

export interface BookingState extends List {
  data: Booking[],
  loading: boolean,
  loadingPrograms: boolean,
  program: any
};

export interface salonState {
  hairDressersSalons: {
    total: number,
    pages: number,
    current_page: number,
    per_page: number,
    data: Salon[],
    loading: boolean,
  },
  hairstyleInspirations: {
    total?: number,
    current_page?: number,
    pages?: number,
    per_page?: number,
    data?: HairstyleInspiration[],
    loading?: boolean,
  },
  hairDressers: {
    total?: number,
    pages?: number,
    current_page?: number,
    per_page?: number,
    data?: Hairdresser[],
    loading?: boolean,
  },
  currentSalon: {
    item: Salon | null,
    loading: boolean
  }
  currentHairstyleInspiration: {
    item: HairstyleInspiration | null,
    loading: boolean
  }
};

export interface NotificationState {
  notifications: any[],
  loading: boolean,
  loadingSettings: boolean,
  unreadCount: object | number,
  notificationSettings: null
}

export interface ApplicationState {
  auth: AuthState,
  product: ProductState,
  order: OrderState,
  salon: salonState,
  booking: BookingState,
  layout: LayoutState,
  notification: NotificationState,
  chat: ChatState,
}

// --------------- ACTIONS --------------------
// ************* Auth actions
export interface getGlobalDataRequest extends BasicAction {
  type: typeof authActions.LOGIN_PRO_REQUEST;
}
export interface getGlobalDataSuccess extends BasicAction {
  type: typeof authActions.LOGIN_PRO_SUCCESS;
}
export interface getGlobalDataFail extends BasicAction {
  type: typeof authActions.LOGIN_PRO_FAIL;
}
export interface loginClientRequest extends BasicAction {
  type: typeof authActions.LOGIN_CLIENT_REQUEST;
}
export interface loginClientSuccess extends BasicAction {
  type: typeof authActions.LOGIN_CLIENT_SUCCESS;
}
export interface logOut extends BasicAction {
  type: typeof authActions.LOGOUT;
}
export interface loginClientFail extends BasicAction {
  type: typeof authActions.LOGIN_CLIENT_FAIL;
}
export interface loginProRequest extends BasicAction {
  type: typeof authActions.LOGIN_PRO_REQUEST;
}
export interface loginProSuccess extends BasicAction {
  type: typeof authActions.LOGIN_PRO_SUCCESS;
}
export interface loginProFail extends BasicAction {
  type: typeof authActions.LOGIN_PRO_FAIL;
}
export interface loginFacebookRequest extends BasicAction {
  type: typeof authActions.LOGIN_FACEBOOK_REQUEST;
}
export interface loginFacebookSuccess extends BasicAction {
  type: typeof authActions.LOGIN_FACEBOOK_SUCCESS;
}
export interface loginFacebookFail extends BasicAction {
  type: typeof authActions.LOGIN_FACEBOOK_FAIL;
}
export interface createClientRequest extends BasicAction {
  type: typeof authActions.CREATE_CLIENT_REQUEST;
}
export interface createClientSuccess extends BasicAction {
  type: typeof authActions.CREATE_CLIENT_SUCCESS;
}
export interface createClientFail extends BasicAction {
  type: typeof authActions.CREATE_CLIENT_FAIL;
}
export interface createProRequest extends BasicAction {
  type: typeof authActions.CREATE_PRO_REQUEST;
}
export interface createProSuccess extends BasicAction {
  type: typeof authActions.CREATE_PRO_SUCCESS;
}
export interface createProFail extends BasicAction {
  type: typeof authActions.CREATE_PRO_FAIL;
}
export interface confirmAccountRequest extends BasicAction {
  type: typeof authActions.CONFIRM_ACCOUNT_REQUEST;
}
export interface confirmAccountSuccess extends BasicAction {
  type: typeof authActions.CONFIRM_ACCOUNT_SUCCESS;
}
export interface confirmAccountFail extends BasicAction {
  type: typeof authActions.CONFIRM_ACCOUNT_FAIL;
}
export interface getUserRequest extends BasicAction {
  type: typeof authActions.GET_USER_REQUEST;
}
export interface getUserSuccess extends BasicAction {
  type: typeof authActions.GET_USER_SUCCESS;
}
export interface getUserFail extends BasicAction {
  type: typeof authActions.GET_USER_FAIL;
}
export interface recoverPasswordRequest extends BasicAction {
  type: typeof authActions.RECOVER_PASSWORD_REQUEST;
}
export interface recoverPasswordSuccess extends BasicAction {
  type: typeof authActions.RECOVER_PASSWORD_SUCCESS;
}
export interface recoverPasswordFail extends BasicAction {
  type: typeof authActions.RECOVER_PASSWORD_FAIL;
}
export interface resetPasswordRequest extends BasicAction {
  type: typeof authActions.RESET_PASSWORD_REQUEST;
}
export interface resetPasswordSuccess extends BasicAction {
  type: typeof authActions.RESET_PASSWORD_SUCCESS;
}
export interface resetPasswordFail extends BasicAction {
  type: typeof authActions.RESET_PASSWORD_FAIL;
}
export interface updatePreferencesRequest extends BasicAction {
  type: typeof authActions.UPDATE_PREFERENCES_REQUEST;
}
export interface updatePreferencesSuccess extends BasicAction {
  type: typeof authActions.UPDATE_PREFERENCES_SUCCESS;
}
export interface updatePreferencesFail extends BasicAction {
  type: typeof authActions.UPDATE_PREFERENCES_FAIL;
}
export interface createNewProfileRequest extends BasicAction {
  type: typeof authActions.CREATE_NEW_PROFILE_REQUEST;
}
export interface createNewProfileSuccess extends BasicAction {
  type: typeof authActions.CREATE_NEW_PROFILE_SUCCESS;
}
export interface createNewProfileFail extends BasicAction {
  type: typeof authActions.CREATE_NEW_PROFILE_FAIL;
}
export interface updateUserInfos extends BasicAction {
  type: typeof authActions.UPDATE_USER_INFOS;
}
export interface createGuestAccount extends BasicAction {
  type: typeof authActions.CREATE_GUEST_ACCOUNT
}

// ************* Products actions
export interface getProductsRequest extends BasicAction {
  type: typeof productActions.GET_PRODUCTS_REQUEST;
}
export interface getProductsSuccess extends BasicAction {
  type: typeof productActions.GET_PRODUCTS_SUCCESS;
}
export interface getProductsFail extends BasicAction {
  type: typeof productActions.GET_PRODUCTS_FAIL;
}
export interface updateProductRequest extends BasicAction {
  type: typeof productActions.UPDATE_PRODUCT_REQUEST;
}
export interface updateProductSuccess extends BasicAction {
  type: typeof productActions.UPDATE_PRODUCT_SUCCESS;
}
export interface updateProductFail extends BasicAction {
  type: typeof productActions.UPDATE_PRODUCT_FAIL;
}
export interface createProductRequest extends BasicAction {
  type: typeof productActions.CREATE_PRODUCT_REQUEST;
}
export interface createProductSuccess extends BasicAction {
  type: typeof productActions.CREATE_PRODUCT_SUCCESS;
}
export interface createProductFail extends BasicAction {
  type: typeof productActions.CREATE_PRODUCT_FAIL;
}
export interface deleteProductRequest extends BasicAction {
  type: typeof productActions.DELETE_PRODUCT_REQUEST;
}
export interface deleteProductSuccess extends BasicAction {
  type: typeof productActions.DELETE_PRODUCT_SUCCESS;
}
export interface deleteProductFail extends BasicAction {
  type: typeof productActions.DELETE_PRODUCT_FAIL;
}
export interface getProductRequest extends BasicAction {
  type: typeof productActions.GET_PRODUCT_REQUEST;
}
export interface getProductSuccess extends BasicAction {
  type: typeof productActions.GET_PRODUCT_SUCCESS;
}
export interface getProductFail extends BasicAction {
  type: typeof productActions.GET_PRODUCT_FAIL;
}
export interface putRemoveProductOnlineRequest extends BasicAction {
  type: typeof productActions.PUT_REMOVE_PRODUCT_ONLINE_REQUEST;
}
export interface putRemoveProductOnlineSuccess extends BasicAction {
  type: typeof productActions.PUT_REMOVE_PRODUCT_ONLINE_SUCCESS;
}
export interface putRemoveProductOnlineFail extends BasicAction {
  type: typeof productActions.PUT_REMOVE_PRODUCT_ONLINE_FAIL;
}
export interface deleteProductImageRequest extends BasicAction {
  type: typeof productActions.DELETE_PRODUCT_IMAGE_REQUEST;
}
export interface deleteProductImageSuccess extends BasicAction {
  type: typeof productActions.DELETE_PRODUCT_IMAGE_SUCCESS;
}
export interface deleteProductImageFail extends BasicAction {
  type: typeof productActions.DELETE_PRODUCT_IMAGE_FAIL;
}
export interface addRemoveProductFavoriteRequest extends BasicAction {
  type: typeof productActions.ADD_REMOVE_PRODUCT_FAVORITE_REQUEST;
}
export interface addRemoveProductFavoriteSuccess extends BasicAction {
  type: typeof productActions.ADD_REMOVE_PRODUCT_FAVORITE_SUCCESS;
}
export interface addRemoveProductFavoriteFail extends BasicAction {
  type: typeof productActions.ADD_REMOVE_PRODUCT_FAVORITE_FAIL;
}
export interface getOnlineProductsRequest extends BasicAction {
  type: typeof productActions.GET_ONLINE_PRODUCTS_REQUEST;
}
export interface getOnlineProductsSuccess extends BasicAction {
  type: typeof productActions.GET_ONLINE_PRODUCTS_SUCCESS;
}
export interface getOnlineProductsFail extends BasicAction {
  type: typeof productActions.GET_ONLINE_PRODUCTS_FAIL;
}
export interface getSubcatProductsRequest extends BasicAction {
  type: typeof productActions.GET_SUBCAT_PRODUCTS_REQUEST;
}
export interface getSubcatProductsSuccess extends BasicAction {
  type: typeof productActions.GET_SUBCAT_PRODUCTS_SUCCESS;
}
export interface getSubcatProductsFail extends BasicAction {
  type: typeof productActions.GET_SUBCAT_PRODUCTS_FAIL;
}
export interface setTips extends BasicAction {
  type: typeof productActions.SET_TIPS;
}

// ************* Order actions
export interface getOrdersRequest extends BasicAction {
  type: typeof orderActions.GET_ORDERS_REQUEST;
}
export interface getOrdersSuccess extends BasicAction {
  type: typeof orderActions.GET_ORDERS_SUCCESS;
}
export interface getOrdersFail extends BasicAction {
  type: typeof orderActions.GET_ORDERS_FAIL;
}
export interface createOrderRequest extends BasicAction {
  type: typeof orderActions.CREATE_ORDER_REQUEST;
}
export interface createOrderSuccess extends BasicAction {
  type: typeof orderActions.CREATE_ORDER_SUCCESS;
}
export interface createOrderFail extends BasicAction {
  type: typeof orderActions.CREATE_ORDER_FAIL;
}
export interface getOrderRequest extends BasicAction {
  type: typeof orderActions.GET_ORDER_REQUEST;
}
export interface getOrderSuccess extends BasicAction {
  type: typeof orderActions.GET_ORDER_SUCCESS;
}
export interface getOrderFail extends BasicAction {
  type: typeof orderActions.GET_ORDER_FAIL;
}
export interface changeOrderStatusRequest extends BasicAction {
  type: typeof orderActions.CHANGE_ORDER_STATUS_REQUEST;
}
export interface changeOrderStatusSuccess extends BasicAction {
  type: typeof orderActions.CHANGE_ORDER_STATUS_SUCCESS;
}
export interface changeOrderStatusFail extends BasicAction {
  type: typeof orderActions.CHANGE_ORDER_STATUS_FAIL;
}


// ************* Booking actions
export interface getBookingsRequest extends BasicAction {
  type: typeof bookingActions.GET_BOOKINGS_REQUEST;
}
export interface getBookingsSuccess extends BasicAction {
  type: typeof bookingActions.GET_BOOKINGS_SUCCESS;
}
export interface getBookingsFail extends BasicAction {
  type: typeof bookingActions.GET_BOOKINGS_FAIL;
}
export interface createBookingRequest extends BasicAction {
  type: typeof bookingActions.CREATE_BOOKING_REQUEST;
}
export interface createBookingSuccess extends BasicAction {
  type: typeof bookingActions.CREATE_BOOKING_SUCCESS;
}
export interface createBookingFail extends BasicAction {
  type: typeof bookingActions.CREATE_BOOKING_FAIL;
}
export interface getBookingRequest extends BasicAction {
  type: typeof bookingActions.GET_BOOKING_REQUEST;
}
export interface getBookingSuccess extends BasicAction {
  type: typeof bookingActions.GET_BOOKING_SUCCESS;
}
export interface getBookingFail extends BasicAction {
  type: typeof bookingActions.GET_BOOKING_FAIL;
}
export interface changeBookingStatusRequest extends BasicAction {
  type: typeof bookingActions.CHANGE_BOOKING_STATUS_REQUEST;
}
export interface changeBookingStatusSuccess extends BasicAction {
  type: typeof bookingActions.CHANGE_BOOKING_STATUS_SUCCESS;
}
export interface changeBookingStatusFail extends BasicAction {
  type: typeof bookingActions.CHANGE_BOOKING_STATUS_FAIL;
}

export interface acceptRefuseSchedule extends BasicAction {
  type: typeof bookingActions.ACCEPT_REFUSE_SCHEDULE
}

// ************* Salon actions
export interface getHairDressersSalonsRequest extends BasicAction {
  type: typeof salonActions.GET_HAIR_DRESSERS_SALON_REQUEST;
}
export interface getHairDressersSalonsSuccess extends BasicAction {
  type: typeof salonActions.GET_HAIR_DRESSERS_SALON_SUCCESS;
}
export interface getHairDressersSalonsFail extends BasicAction {
  type: typeof salonActions.GET_HAIR_DRESSERS_SALON_FAIL;
}
export interface getHairstyleInspirationsRequest extends BasicAction {
  type: typeof salonActions.GET_HAIRSTYLE_INSPIRATIONS_REQUEST;
}
export interface getHairstyleInspirationsSuccess extends BasicAction {
  type: typeof salonActions.GET_HAIRSTYLE_INSPIRATIONS_SUCCESS;
}
export interface getHairstyleInspirationsFail extends BasicAction {
  type: typeof salonActions.GET_HAIRSTYLE_INSPIRATIONS_FAIL;
}
export interface getHairstyleInspirationRequest extends BasicAction {
  type: typeof salonActions.GET_HAIRSTYLE_INSPIRATION_REQUEST;
}
export interface getHairstyleInspirationSuccess extends BasicAction {
  type: typeof salonActions.GET_HAIRSTYLE_INSPIRATION_SUCCESS;
}
export interface getHairstyleInspirationFail extends BasicAction {
  type: typeof salonActions.GET_HAIRSTYLE_INSPIRATION_FAIL;
}
export interface getHairDressersSalonRequest extends BasicAction {
  type: typeof salonActions.GET_HAIR_DRESSER_SALON_REQUEST;
}
export interface getHairDressersSalonSuccess extends BasicAction {
  type: typeof salonActions.GET_HAIR_DRESSER_SALON_SUCCESS;
}
export interface getHairDressersSalonFail extends BasicAction {
  type: typeof salonActions.GET_HAIR_DRESSER_SALON_FAIL;
}
export interface getHairDressersRequest extends BasicAction {
  type: typeof salonActions.GET_HAIR_DRESSERS_REQUEST;
}
export interface getHairDressersSuccess extends BasicAction {
  type: typeof salonActions.GET_HAIR_DRESSERS_SUCCESS;
}
export interface getHairDressersFail extends BasicAction {
  type: typeof salonActions.GET_HAIR_DRESSERS_FAIL;
}
export interface addHairDresserRequest extends BasicAction {
  type: typeof salonActions.ADD_HAIR_DRESSER_REQUEST;
}
export interface addHairDresserSuccess extends BasicAction {
  type: typeof salonActions.ADD_HAIR_DRESSER_SUCCESS;
}
export interface addHairDresserFail extends BasicAction {
  type: typeof salonActions.ADD_HAIR_DRESSER_FAIL;
}
export interface deleteHairDresserRequest extends BasicAction {
  type: typeof salonActions.DELETE_HAIR_DRESSER_REQUEST;
}
export interface deleteHairDresserSuccess extends BasicAction {
  type: typeof salonActions.DELETE_HAIR_DRESSER_SUCCESS;
}
export interface deleteHairDresserFail extends BasicAction {
  type: typeof salonActions.DELETE_HAIR_DRESSER_FAIL;
}
export interface addPrestationRequest extends BasicAction {
  type: typeof salonActions.ADD_PRESTATION_REQUEST;
}
export interface addPrestationSuccess extends BasicAction {
  type: typeof salonActions.ADD_PRESTATION_SUCCESS;
}
export interface addPrestationFail extends BasicAction {
  type: typeof salonActions.ADD_PRESTATION_FAIL;
}
export interface updatePrestationRequest extends BasicAction {
  type: typeof salonActions.UPDATE_PRESTATION_REQUEST;
}
export interface updatePrestationSuccess extends BasicAction {
  type: typeof salonActions.UPDATE_PRESTATION_SUCCESS;
}
export interface updatePrestationFail extends BasicAction {
  type: typeof salonActions.UPDATE_PRESTATION_FAIL;
}
export interface deletePrestationRequest extends BasicAction {
  type: typeof salonActions.DELETE_PRESTATION_REQUEST;
}
export interface deletePrestationSuccess extends BasicAction {
  type: typeof salonActions.DELETE_PRESTATION_SUCCESS;
}
export interface deletePrestationFail extends BasicAction {
  type: typeof salonActions.DELETE_PRESTATION_FAIL;
}
export interface updateHairdressingSalonRequest extends BasicAction {
  type: typeof salonActions.UPDATE_HAIRDRESSING_SALON_REQUEST;
}
export interface updateHairdressingSalonSuccess extends BasicAction {
  type: typeof salonActions.UPDATE_HAIRDRESSING_SALON_SUCCESS;
}
export interface updateHairdressingSalonFail extends BasicAction {
  type: typeof salonActions.UPDATE_HAIRDRESSING_SALON_FAIL;
}
export interface updateSalonFeesRequest extends BasicAction {
  type: typeof salonActions.UPDATE_SALON_FEES_REQUEST;
}
export interface updateSalonFeesSuccess extends BasicAction {
  type: typeof salonActions.UPDATE_SALON_FEES_SUCCESS;
}
export interface updateSalonFeesFail extends BasicAction {
  type: typeof salonActions.UPDATE_SALON_FEES_FAIL;
}
export interface addRemoveSalonFavoriteRequest extends BasicAction {
  type: typeof salonActions.ADD_REMOVE_SALON_FAVORITE_REQUEST;
}
export interface addRemoveSalonFavoriteSuccess extends BasicAction {
  type: typeof salonActions.ADD_REMOVE_SALON_FAVORITE_SUCCESS;
}
export interface addRemoveSalonFavoriteFail extends BasicAction {
  type: typeof salonActions.ADD_REMOVE_SALON_FAVORITE_FAIL;
}
// ************* Notifications actions
export interface getNotificationsSalonRequest extends BasicAction {
  type: typeof notificationActions.GET_NOTIFICATIONS_REQUEST;
}
export interface getNotificationsSalonSuccess extends BasicAction {
  type: typeof notificationActions.GET_NOTIFICATIONS_SUCCESS;
}
export interface getNotificationsSalonFail extends BasicAction {
  type: typeof notificationActions.GET_NOTIFICATIONS_FAIL;
}
export interface markAsReadSalonRequest extends BasicAction {
  type: typeof notificationActions.MARK_AS_READ_REQUEST;
}
export interface markAsReadSalonSuccess extends BasicAction {
  type: typeof notificationActions.MARK_AS_READ_SUCCESS;
}
export interface markAsReadSalonFail extends BasicAction {
  type: typeof notificationActions.MARK_AS_READ_FAIL;
}
export interface markAsDeleteRequest extends BasicAction {
  type: typeof notificationActions.MARK_AS_DELETE_REQUEST;
}
export interface markAsDeleteSuccess extends BasicAction {
  type: typeof notificationActions.MARK_AS_DELETE_SUCCESS;
}
export interface markAsDeleteFail extends BasicAction {
  type: typeof notificationActions.MARK_AS_DELETE_FAIL;
}
export interface getUnreadCountRequest extends BasicAction {
  type: typeof notificationActions.GET_UNREAD_COUNT_REQUEST;
}
export interface getUnreadCountSuccess extends BasicAction {
  type: typeof notificationActions.GET_UNREAD_COUNT_SUCCESS;
}
export interface getUnreadCountFail extends BasicAction {
  type: typeof notificationActions.GET_UNREAD_COUNT_FAIL;
}
export interface getAllUnreadRequest extends BasicAction {
  type: typeof notificationActions.GET_ALL_UNREAD_REQUEST;
}
export interface getAllUnreadSuccess extends BasicAction {
  type: typeof notificationActions.GET_ALL_UNREAD_SUCCESS;
}
export interface getAllUnreadFail extends BasicAction {
  type: typeof notificationActions.GET_ALL_UNREAD_FAIL;
}
export interface getNotificationsSettingsRequest extends BasicAction {
  type: typeof notificationActions.GET_NOTIFICATIONS_SETTINGS_REQUEST;
}
export interface getNotificationsSettingsSuccess extends BasicAction {
  type: typeof notificationActions.GET_NOTIFICATIONS_SETTINGS_SUCCESS;
}
export interface getNotificationsSettingsFail extends BasicAction {
  type: typeof notificationActions.GET_NOTIFICATIONS_SETTINGS_FAIL;
}
export interface setNotificationsSettingsRequest extends BasicAction {
  type: typeof notificationActions.SET_NOTIFICATIONS_SETTINGS_REQUEST;
}
export interface setNotificationsSettingsSuccess extends BasicAction {
  type: typeof notificationActions.SET_NOTIFICATIONS_SETTINGS_SUCCESS;
}
export interface setNotificationsSettingsFail extends BasicAction {
  type: typeof notificationActions.SET_NOTIFICATIONS_SETTINGS_FAIL;
}

// ********** Program actions
export interface createProgramRequest extends BasicAction {
  type: typeof bookingActions.CREATE_PROGRAM_REQUEST;
}
export interface createProgramSuccess extends BasicAction {
  type: typeof bookingActions.CREATE_PROGRAM_SUCCESS;
}
export interface createProgramFail extends BasicAction {
  type: typeof bookingActions.CREATE_PROGRAM_FAIL;
}
export interface updateProgramRequest extends BasicAction {
  type: typeof bookingActions.UPDATE_PROGRAM_REQUEST;
}
export interface updateProgramSuccess extends BasicAction {
  type: typeof bookingActions.UPDATE_PROGRAM_SUCCESS;
}
export interface updateProgramFail extends BasicAction {
  type: typeof bookingActions.UPDATE_PROGRAM_FAIL;
}
export interface deleteProgramRequest extends BasicAction {
  type: typeof bookingActions.DELETE_PROGRAM_REQUEST;
}
export interface deleteProgramSuccess extends BasicAction {
  type: typeof bookingActions.DELETE_PROGRAM_SUCCESS;
}
export interface deleteProgramFail extends BasicAction {
  type: typeof bookingActions.DELETE_PROGRAM_FAIL;
}
export interface markProgramRequest extends BasicAction {
  type: typeof bookingActions.MARK_PROGRAM_REQUEST;
}
export interface markProgramSuccess extends BasicAction {
  type: typeof bookingActions.MARK_PROGRAM_SUCCESS;
}
export interface markProgramFail extends BasicAction {
  type: typeof bookingActions.MARK_PROGRAM_FAIL;
}
export interface getAllProgramsRequest extends BasicAction {
  type: typeof bookingActions.GET_ALL_PROGRAMS_REQUEST;
}
export interface getAllProgramsSuccess extends BasicAction {
  type: typeof bookingActions.GET_ALL_PROGRAMS_SUCCESS;
}
export interface getAllProgramsFail extends BasicAction {
  type: typeof bookingActions.GET_ALL_PROGRAMS_FAIL;
}

// Stats
export interface updateProfileRequest extends BasicAction {
  type: typeof authActions.UPDATE_PROFILE_REQUEST;
}
export interface updateProfileSuccess extends BasicAction {
  type: typeof authActions.UPDATE_PROFILE_SUCCESS;
}
export interface updateProfileFail extends BasicAction {
  type: typeof authActions.UPDATE_PROFILE_FAIL;
}

export interface deleteProfileRequest extends BasicAction {
  type: typeof authActions.DELETE_PROFILE_REQUEST;
}
export interface deleteProfileSuccess extends BasicAction {
  type: typeof authActions.DELETE_PROFILE_SUCCESS;
}
export interface deleteProfileFail extends BasicAction {
  type: typeof authActions.DELETE_PROFILE_FAIL;
}

export interface getParcoursRequest extends BasicAction {
  type: typeof authActions.GET_PARCOURS_REQUEST;
}
export interface getParcoursSuccess extends BasicAction {
  type: typeof authActions.GET_PARCOURS_SUCCESS;
}
export interface getParcoursFail extends BasicAction {
  type: typeof authActions.GET_PARCOURS_FAIL;
}

export interface getStatsRequest extends BasicAction {
  type: typeof authActions.GET_STATS_REQUEST;
}
export interface getStatsSuccess extends BasicAction {
  type: typeof authActions.GET_STATS_SUCCESS;
}
export interface getStatsFail extends BasicAction {
  type: typeof authActions.GET_STATS_FAIL;
}
export interface getHomePageRequest extends BasicAction {
  type: typeof authActions.GET_HOMEPAGE_INFOS_REQUEST;
}
export interface getHomePageSuccess extends BasicAction {
  type: typeof authActions.GET_HOMEPAGE_INFOS_SUCCESS;
}
export interface getHomePageFail extends BasicAction {
  type: typeof authActions.GET_HOMEPAGE_INFOS_FAIL;
}

export interface getArticlesRequest extends BasicAction {
  type: typeof authActions.GET_ARTICLES_REQUEST;
}
export interface getArticlesSuccess extends BasicAction {
  type: typeof authActions.GET_ARTICLES_SUCCESS;
}
export interface getArticlesFail extends BasicAction {
  type: typeof authActions.GET_ARTICLES_FAIL;
}

export interface getLastRecievedMsgRequest extends BasicAction {
  type: typeof authActions.GET_LAST_RECIEVED_MSG_REQUEST;
}
export interface getLastRecievedMsgSuccess extends BasicAction {
  type: typeof authActions.GET_LAST_RECIEVED_MSG_SUCCESS;
}
export interface getLastRecievedMsgFail extends BasicAction {
  type: typeof authActions.GET_LAST_RECIEVED_MSG_FAIL;
}

export interface subscribeToFormula extends BasicAction {
  type: typeof authActions.SUBSCRIBE_TO_FORMULA;
}

export type ApplicationAction =
getGlobalDataRequest
| getGlobalDataSuccess
| getGlobalDataFail
| loginClientRequest
| loginClientSuccess
| logOut
| loginClientFail
| loginProRequest
| loginProSuccess
| loginProFail
| loginFacebookRequest
| loginFacebookSuccess
| loginFacebookFail
| createClientRequest
| createClientSuccess
| createClientFail
| createProRequest
| createProSuccess
| createProFail
| confirmAccountRequest
| confirmAccountSuccess
| confirmAccountFail
| getUserRequest
| getUserSuccess
| getUserFail
| recoverPasswordRequest
| recoverPasswordSuccess
| recoverPasswordFail
| resetPasswordRequest
| resetPasswordSuccess
| resetPasswordFail
| getProductsRequest
| getProductsSuccess
| getProductsFail
| updateProductRequest
| updateProductSuccess
| updateProductFail
| createProductRequest
| createProductSuccess
| createProductFail
| deleteProductRequest
| deleteProductSuccess
| deleteProductFail
| getProductRequest
| getProductSuccess
| getProductFail
| putRemoveProductOnlineRequest
| putRemoveProductOnlineSuccess
| putRemoveProductOnlineFail
| deleteProductImageRequest
| deleteProductImageSuccess
| deleteProductImageFail
| addRemoveProductFavoriteRequest
| addRemoveProductFavoriteSuccess
| addRemoveProductFavoriteFail
| getOnlineProductsRequest
| getOnlineProductsSuccess
| getOnlineProductsFail
| getSubcatProductsRequest
| getSubcatProductsSuccess
| getSubcatProductsFail
| getOrdersRequest
| getOrdersSuccess
| getOrdersFail
| createOrderRequest
| createOrderSuccess
| createOrderFail
| getOrderRequest
| getOrderSuccess
| getOrderFail
| changeOrderStatusRequest
| changeOrderStatusSuccess
| changeOrderStatusFail
| getHairDressersSalonsRequest
| getHairDressersSalonsSuccess
| getHairDressersSalonsFail
| getHairDressersSalonRequest
| getHairDressersSalonSuccess
| getHairDressersSalonFail
| getHairDressersRequest
| getHairDressersSuccess
| getHairDressersFail
| addHairDresserRequest
| addHairDresserSuccess
| addHairDresserFail
| deleteHairDresserRequest
| deleteHairDresserSuccess
| deleteHairDresserFail
| addPrestationRequest
| addPrestationSuccess
| addPrestationFail
| deletePrestationRequest
| deletePrestationSuccess
| deletePrestationFail
| updatePrestationRequest
| updatePrestationSuccess
| updatePrestationFail
| updatePreferencesRequest
| updatePreferencesSuccess
| updatePreferencesFail
| updateHairdressingSalonRequest
| updateHairdressingSalonSuccess
| updateHairdressingSalonFail
| getNotificationsSalonRequest
| getNotificationsSalonSuccess
| getNotificationsSalonFail
| markAsReadSalonRequest
| markAsReadSalonSuccess
| markAsReadSalonFail
| markAsDeleteRequest
| markAsDeleteSuccess
| markAsDeleteFail
| getUnreadCountRequest
| getUnreadCountSuccess
| getUnreadCountFail
| getAllUnreadRequest
| getAllUnreadSuccess
| getAllUnreadFail
| getNotificationsSettingsRequest
| getNotificationsSettingsSuccess
| getNotificationsSettingsFail
| setNotificationsSettingsRequest
| setNotificationsSettingsSuccess
| setNotificationsSettingsFail
| createNewProfileRequest
| createNewProfileSuccess
| createNewProfileFail
| updateUserInfos
| createProgramRequest
| createProgramSuccess
| createProgramFail
| updateProgramRequest
| updateProgramSuccess
| updateProgramFail
| deleteProgramRequest
| deleteProgramSuccess
| deleteProgramFail
| markProgramRequest
| markProgramSuccess
| markProgramFail
| getAllProgramsRequest
| getAllProgramsSuccess
| getAllProgramsFail
| updateProfileRequest
| updateProfileSuccess
| updateProfileFail
| getParcoursRequest
| getParcoursSuccess
| getParcoursFail
| getStatsRequest
| getStatsSuccess
| getStatsFail
| acceptRefuseSchedule
| setTips
| sendMessageFileSuccess
| sendMessageFileRequest
| sendMessageSuccess
| sendMessageRequest
| fetchAllConversationError
| fetchAllConversationRequest
| fetchAllConversationSuccess
| fetchOneConversationError
| fetchOneConversationSuccess
| fetchOneConversationError
| getHomePageRequest
| getHomePageSuccess
| getHomePageFail
| getArticlesRequest
| getArticlesSuccess
| getArticlesFail
| getLastRecievedMsgRequest
| getLastRecievedMsgSuccess
| getLastRecievedMsgFail
| updateSalonFeesRequest
| updateSalonFeesSuccess
| updateSalonFeesFail
| subscribeToFormula
| addRemoveSalonFavoriteRequest
| addRemoveSalonFavoriteSuccess
| addRemoveSalonFavoriteFail