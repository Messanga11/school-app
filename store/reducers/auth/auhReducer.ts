// import SecureLS from "secure-ls";
import { authActions, salonActions } from "../../actionTypes";
import { ApplicationAction, AuthState } from "../../types";

// const ls = new SecureLS({encodingType: 'aes'})

let user;
let userPro;
let loginProRes;
let token;
let tokenPro;
// try {
//   user = ls.get("cp_102398_user") ? JSON.parse(ls.get("cp_102398_user")) : null;
//   loginProRes = ls.get("cp_102398_pro_logger") ? JSON.parse(ls.get("cp_102398_pro_logger"))._logg : null;
//   token = ls.get("cp_102398_token") || null;
//   tokenPro = ls.get("cp_102398_pro_token") || null;
// } catch (err) {
//   ls.remove("cp_102398_user");
//   ls.remove("cp_102398_token");
//   ls.remove("cp_102398_pro_logger");
//   ls.remove("cp_102398_pro_token");
//   window.location.reload();
// }

const initialState: AuthState = {
  loading: false,
  token,
  user,
  userPro: loginProRes?.user || null,
  tokenPro,
  locale: "en-GB",
  // locale: ls.get("locale") ? "en-GB" : "fr-FR",
  salon: loginProRes?.hairdressing_salon,
  globalData: null,
  activeProfile: (((user || loginProRes?.user)?.profiles?.sort((a, b) => a.is_parent ? -1 : 1)) && ((user || loginProRes?.user)?.profiles?.sort((a, b) => a.is_parent ? -1 : 1))[0]) || null,
  loadingUpdateSalon: false,
  pos: null,
  stats: null,
  parcours: null,
  homepage: {
    total: 0,
    current_page: 0,
    pages: 0,
    per_page: 0,
    data: [],
    loading: false,
  },
  articles: {
    total: 0,
    current_page: 0,
    pages: 0,
    per_page: 0,
    data: [],
    loading: false,
  },
  lastRecievedMsg: {
    conversation: null,
    programs: [],
    bookings: [],
    loading: false
  }
}

const authReducer = (
  state = initialState,
  { type, payload }: ApplicationAction
) => {
  switch (type) {

    case "UPDATE_POS": {
      return {
        ...state,
        pos: payload
      }
    }
    
    case authActions.LOGIN_PRO_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    
    case authActions.LOGIN_PRO_SUCCESS: {
      // ls.set("cp_102398_pro_token", JSON.stringify(payload.token));
      // ls.set("cp_102398_pro_logger", JSON.stringify({_logg: payload}));
      return { 
        ...state,
        salon: payload.hairdressing_salon,
        userPro: payload.user,
        tokenPro: payload.token,
        activeProfile: payload.user.profiles?.sort((a, b) => a.is_parent ? -1 : 1)[0],
        loading: false
      };
    }
    
    case authActions.LOGIN_PRO_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.LOGIN_CLIENT_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    
    case authActions.LOGIN_CLIENT_SUCCESS: {
      // ls.set("cp_102398_token", JSON.stringify(payload.token));
      // ls.set("cp_102398_user", JSON.stringify(payload.user));
      const profilesSorted = [...(payload?.user?.profiles || [])]?.sort((a, b) => a.is_parent ? -1 : 1)
      return { ...state, loading: false, ...payload, activeProfile: profilesSorted[0],  user: {...payload?.user, profiles: profilesSorted} };
    }

    case authActions.UPDATE_USER_INFOS: {
      // ls.set("cp_102398_user", JSON.stringify(payload));
      const profiles = [...(payload?.profiles || [])]
      const profilesSorted = [...(payload?.profiles || [])]?.sort((a, b) => a.is_parent ? -1 : 1)
      return { ...state, loading: false, activeProfile: profilesSorted[0], user: {...payload, profiles: profilesSorted} };
    }
    
    case authActions.LOGOUT: {
      // ls.remove("cp_102398_token");
      // ls.remove("cp_102398_user");
      // ls.remove("cp_102398_pro_token");
      // ls.remove("cp_102398_pro_logger");
      // ls.remove("cart")
      return {
        ...initialState,
        globalData: state.globalData,
        token: null,
        tokenPro: null,
        user: null,
        userPro: null,
        activeProfile: null,
        salon: null
      };
    }
    
    case authActions.SET_ACTIVE_PROFILE: {
      return {
        ...state,
        activeProfile: payload
      }
    }

    case authActions.LOGIN_CLIENT_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.LOGIN_PRO_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    
    case authActions.LOGIN_PRO_SUCCESS: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.LOGIN_PRO_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.LOGIN_FACEBOOK_REQUEST: {
      return {
        ...state
      }
    }
    
    case authActions.LOGIN_FACEBOOK_SUCCESS: {
      return {
        ...state
      }
    }
    
    case authActions.LOGIN_FACEBOOK_FAIL: {
      return {
        ...state
      }
    }
    
    case authActions.CREATE_CLIENT_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    
    case authActions.CREATE_CLIENT_SUCCESS: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.CREATE_CLIENT_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.CREATE_PRO_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    
    case authActions.CREATE_PRO_SUCCESS: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.CREATE_PRO_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.CONFIRM_ACCOUNT_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    
    case authActions.CONFIRM_ACCOUNT_SUCCESS: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.CONFIRM_ACCOUNT_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.UPDATE_PREFERENCES_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    
    case authActions.UPDATE_PREFERENCES_SUCCESS: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.UPDATE_PREFERENCES_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.GET_USER_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    
    case authActions.GET_USER_SUCCESS: {
      const profilesSorted = [...(payload?.profiles || [])].sort((a, b) => a.is_parent ? -1 : 0)
      return { ...state, loading: false, activeProfile: profilesSorted[0], user: {...payload, profiles: profilesSorted} };
    }
    
    case authActions.GET_USER_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.RECOVER_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    
    case authActions.RECOVER_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.RECOVER_PASSWORD_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    
    case authActions.RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.RESET_PASSWORD_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.GET_GLOBAL_DATA_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    
    case authActions.GET_GLOBAL_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        globalData: payload,
      }
    }
    
    case authActions.GET_GLOBAL_DATA_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    
    case authActions.SET_LOCALE: {
      // ls.set("locale", payload)
      return {
        ...state,
        locale: payload
      }
    }

    // SALON ACTIONS because this infos are located in user response from the API
    case salonActions.ADD_PRESTATION_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case salonActions.ADD_PRESTATION_SUCCESS: {
      return {
        ...state,
        salon: {
          ...state.salon,
          prestations: [
            ...state.salon.prestations,
            payload
          ]
        },
        loading: false
      }
    }
    case salonActions.ADD_PRESTATION_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    case salonActions.UPDATE_PRESTATION_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case salonActions.UPDATE_PRESTATION_SUCCESS: {
      const newPrestations = [...state.salon.prestations]
      const prestIndex = newPrestations.findIndex(prest => prest.uuid === payload.uuid)
      if(prestIndex > -1) {
        newPrestations[prestIndex] = payload
      }
      return {
        ...state,
        salon: {
          ...state.salon,
          prestations: newPrestations
        },
        loading: false
      }
    }
    case salonActions.UPDATE_PRESTATION_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    case salonActions.DELETE_PRESTATION_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case salonActions.DELETE_PRESTATION_SUCCESS: {
      const newPrestations = [...state.salon.prestations]
      const prestIndex = newPrestations.findIndex(prest => prest.uuid === payload.uuid)
      if(prestIndex > -1) {
        newPrestations.splice(prestIndex, 1)
      }
      return {
        ...state,
        salon: {
          ...state.salon,
          prestations: newPrestations
        },
        loading: false
      }
    }
    case salonActions.DELETE_PRESTATION_FAIL: {
      return {
        ...state,
        loading: false
      }
    }

    // Because `salon` is updated in auth sate
    
    case salonActions.UPDATE_HAIRDRESSING_SALON_REQUEST: {
      return {
        ...state,
        loadingUpdateSalon: true,
        salon: {
            ...state.salon,
        }
      }
    }
    case salonActions.UPDATE_HAIRDRESSING_SALON_SUCCESS: {
      // ls.set("cp_102398_pro_logger", JSON.stringify({_logg: {...loginProRes, hairdressing_salon: payload}}));
      return {
        ...state,
        loadingUpdateSalon: false,
        salon: {
            ...payload,
        }
      }
    }
    case salonActions.UPDATE_HAIRDRESSING_SALON_FAIL: {
      return {
        ...state,
        loadingUpdateSalon: false,
        salon: {
            ...state.salon,
        }
      }
    }
    
    case authActions.CREATE_NEW_PROFILE_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case authActions.CREATE_NEW_PROFILE_SUCCESS: {
      // ls.set("cp_102398_user", JSON.stringify(payload));
      return {
        ...state,
        loading: false,
        user: payload
      }
    }
    case authActions.CREATE_NEW_PROFILE_FAIL: {
      return {
        ...state,
        loading: false,
      }
    }
    
    case authActions.UPDATE_PROFILE_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case authActions.UPDATE_PROFILE_SUCCESS: {
      return {
        ...state,
        loading: false,
      }
    }
    case authActions.UPDATE_PROFILE_FAIL: {
      return {
        ...state,
        loading: false,
      }
    }
    
    case authActions.DELETE_PROFILE_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case authActions.DELETE_PROFILE_SUCCESS: {
      return {
        ...state,
        loading: false,
      }
    }
    case authActions.DELETE_PROFILE_FAIL: {
      return {
        ...state,
        loading: false,
      }
    }
    
    case authActions.GET_STATS_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case authActions.GET_STATS_SUCCESS: {
      return {
        ...state,
        stats: payload,
        loading: false,
      }
    }
    case authActions.GET_STATS_FAIL: {
      return {
        ...state,
        loading: false,
      }
    }
    
    case authActions.GET_PARCOURS_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case authActions.GET_PARCOURS_SUCCESS: {
      return {
        ...state,
        loading: false,
        parcours: payload
      }
    }
    case authActions.GET_PARCOURS_FAIL: {
      return {
        ...state,
        loading: false,
      }
    }
    
    case authActions.GET_HOMEPAGE_INFOS_REQUEST: {
      return {
        ...state,
        homepage: {
          ...state.homepage,
          loading: true,
        }
      }
    }
    case authActions.GET_HOMEPAGE_INFOS_REQUEST: {
      return {
        ...state,
        homepage: {
          ...state.homepage,
          ...payload,
          loading: false,
        }
      }
    }
    case authActions.GET_HOMEPAGE_INFOS_FAIL: {
      return {
        ...state,
        homepage: {
          ...state.homepage,
          loading: false,
        }
      }
    }
    
    case authActions.GET_ARTICLES_REQUEST: {
      return {
        ...state,
        articles: {
          ...state.articles,
          loading: true,
        }
      }
    }
    case authActions.GET_ARTICLES_REQUEST: {
      return {
        ...state,
        articles: {
          ...state.articles,
          ...payload,
          loading: false,
        }
      }
    }
    case authActions.GET_ARTICLES_FAIL: {
      return {
        ...state,
        articles: {
          ...state.articles,
          loading: false,
        }
      }
    }
    
    case authActions.GET_LAST_RECIEVED_MSG_REQUEST: {
      return {
        ...state,
        lastRecievedMsg: {
          ...state.lastRecievedMsg,
          loading: true,
        }
      }
    }
    case authActions.GET_LAST_RECIEVED_MSG_SUCCESS: {
      return {
        ...state,
        lastRecievedMsg: {
          ...state.lastRecievedMsg,
          ...payload,
          loading: false,
        }
      }
    }
    case authActions.GET_LAST_RECIEVED_MSG_FAIL: {
      return {
        ...state,
        lastRecievedMsg: {
          ...state.lastRecievedMsg,
          loading: false,
        }
      }
    }

    case authActions.UPDATE_SALON: {
      // loginProRes = ls.get("cp_102398_pro_logger") ? JSON.parse(ls.get("cp_102398_pro_logger"))._logg : null;
      const newSalon = {...(loginProRes.hairdressing_salon || {}), ...payload}
      loginProRes.hairdressing_salon = newSalon
      // ls.set("cp_102398_pro_logger", JSON.stringify({_logg: loginProRes}));
      return {
        ...state,
        salon: newSalon,
      }
    }

    default:
      return {...state};
  }
};

export default authReducer;
