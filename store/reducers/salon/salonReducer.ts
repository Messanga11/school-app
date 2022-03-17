import produce from "immer";
import { salonActions } from "../../actionTypes";
import { ApplicationAction, salonState } from "../../types";

const initialState: salonState = {
  hairDressersSalons: {
    total: 0,
    current_page: 0,
    pages: 0,
    per_page: 0,
    data: [],
    loading: false,
  },
  hairstyleInspirations: {
    total: 0,
    current_page: 0,
    pages: 0,
    per_page: 0,
    data: [],
    loading: false,
  },
  hairDressers: {
    total: 0,
    current_page: 0,
    pages: 0,
    per_page: 0,
    data: [],
    loading: false,
  },
  currentSalon: {
    item: null,
    loading: false
  },
  currentHairstyleInspiration: {
    item: null,
    loading: false
  },
};

const salonReducer = (state = initialState, { type, payload }: ApplicationAction) => {
  switch (type) {
   
    case salonActions.GET_HAIR_DRESSERS_SALON_REQUEST: {
      return {
        ...state,
        hairDressersSalons: {
            ...initialState.hairDressersSalons,
            loading: true
        }
      }
    }
    case salonActions.GET_HAIR_DRESSERS_SALON_SUCCESS: {
      return {
        ...state,
        hairDressersSalons: {
            ...payload,
            loading: false
        }
      }
    }
    case salonActions.GET_HAIR_DRESSERS_SALON_FAIL: {
      return {
        ...state,
        hairDressersSalons: {
            ...state.hairDressersSalons,
            loading: false
        }
      }
    }
    case salonActions.GET_HAIRSTYLE_INSPIRATIONS_REQUEST: {
      return {
        ...initialState,
        hairstyleInspirations: {
            ...state.hairstyleInspirations,
            loading: true
        }
      }
    }
    case salonActions.GET_HAIRSTYLE_INSPIRATIONS_SUCCESS: {
      return {
        ...state,
        hairstyleInspirations: {
            data: [...payload],
            loading: false
        }
      }
    }
    case salonActions.GET_HAIRSTYLE_INSPIRATIONS_FAIL: {
      return {
        ...state,
        hairstyleInspirations: {
            ...state.hairstyleInspirations,
            loading: false
        }
      }
    }
    case salonActions.GET_HAIR_DRESSERS_REQUEST: {
      return {
        ...initialState,
        hairDressers: {
            ...state.hairDressers,
            loading: true
        }
      }
    }
    case salonActions.GET_HAIR_DRESSERS_SUCCESS: {
      return {
        ...state,
        hairDressers: {
            data: payload,
            loading: false
        }
      }
    }
    case salonActions.GET_HAIR_DRESSERS_FAIL: {
      return {
        ...state,
        hairDressers: {
            ...state.hairDressers,
            loading: false
        }
      }
    }
    case salonActions.ADD_HAIR_DRESSER_REQUEST: {
      return {
        ...initialState,
        hairDressers: {
            ...state.hairDressers,
            loading: true
        }
      }
    }
    case salonActions.ADD_HAIR_DRESSER_SUCCESS: {
      return {
        ...state,
        hairDressers: {
          ...state.hairDressers,
            data: [
              ...state.hairDressers.data,
              {...payload}
            ],
            loading: false
        }
      }
    }
    case salonActions.ADD_HAIR_DRESSER_FAIL: {
      return {
        ...state,
        hairDressers: {
            ...state.hairDressers,
            loading: false
        }
      }
    }
    case salonActions.DELETE_HAIR_DRESSER_REQUEST: {
      return {
        ...initialState,
        hairDressers: {
            ...state.hairDressers,
            loading: true
        }
      }
    }
    case salonActions.DELETE_HAIR_DRESSER_SUCCESS: {
      const hairdressers = [...state.hairDressers.data]
      const hairdresserIndex = hairdressers.findIndex(hairdresser => hairdresser.uuid === payload.uuid)
      if(hairdresserIndex > -1) {
        hairdressers.splice(hairdresserIndex, 1)
      }
      return {
        ...state,
        hairDressers: {
          ...state.hairDressers,
            data: hairdressers,
            loading: false
        }
      }
    }
    case salonActions.DELETE_HAIR_DRESSER_FAIL: {
      return {
        ...state,
        hairDressers: {
            ...state.hairDressers,
            loading: false
        }
      }
    }
    case salonActions.GET_HAIR_DRESSER_SALON_REQUEST: {
      return {
        ...initialState,
        currentSalon: {
            ...state.currentSalon,
            loading: true
        }
      }
    }
    case salonActions.GET_HAIR_DRESSER_SALON_SUCCESS: {
      return {
        ...state,
        currentSalon: {
            item: payload,
            loading: false
        }
      }
    }
    case salonActions.GET_HAIR_DRESSER_SALON_FAIL: {
      return {
        ...state,
        currentSalon: {
            ...state.currentSalon,
            loading: false
        }
      }
    }
    case salonActions.GET_HAIRSTYLE_INSPIRATION_REQUEST: {
      return {
        ...initialState,
        currentHairstyleInspiration: {
            ...state.currentHairstyleInspiration,
            loading: true
        }
      }
    }
    case salonActions.GET_HAIRSTYLE_INSPIRATION_SUCCESS: {
      return {
        ...state,
        currentHairstyleInspiration: {
            item: payload,
            loading: false
        }
      }
    }
    case salonActions.GET_HAIRSTYLE_INSPIRATION_FAIL: {
      return {
        ...state,
        currentHairstyleInspiration: {
            ...state.currentHairstyleInspiration,
            loading: false
        }
      }
    }
    case salonActions.UPDATE_SALON_FEES_REQUEST: {
      return {
        ...state,
        currentSalon: {
          ...state.currentSalon,
          loading: true
        }
      }
    }
    case salonActions.UPDATE_SALON_FEES_SUCCESS: {
      return {
        ...state,
        currentSalon: {
          ...state.currentSalon,
          loading: false
        }
      }
    }
    case salonActions.UPDATE_SALON_FEES_FAIL: {
      return {
        ...state,
        currentSalon: {
          ...state.currentSalon,
          loading: false
        }
      }
    }
    case salonActions.ADD_REMOVE_SALON_FAVORITE_REQUEST: {
      return {
          ...state
      }
  }

  case salonActions.ADD_REMOVE_SALON_FAVORITE_SUCCESS:
      return produce(state, (draft) => {
          draft.hairDressersSalons.data = draft.hairDressersSalons.data.map(salon => {
              if(salon.uuid === payload.hairdressing_salon_uuid) {
                // @ts-ignore  
                salon.is_favoris = !salon?.is_favoris
                  return salon
              } else {
                  return salon
              }
          })
      })


  case salonActions.ADD_REMOVE_SALON_FAVORITE_FAIL: {
      return {
          ...state
      }
  }
    default:
      return state;
  }
};

export default salonReducer