import { salonActions } from "../actionTypes"
import { addHairDresserFail, addHairDresserRequest, addHairDresserSuccess, addPrestationFail, addPrestationRequest, addPrestationSuccess, addRemoveSalonFavoriteFail, addRemoveSalonFavoriteRequest, addRemoveSalonFavoriteSuccess, deleteHairDresserFail, deleteHairDresserRequest, deleteHairDresserSuccess, deletePrestationFail, deletePrestationRequest, deletePrestationSuccess, getHairDressersFail, getHairDressersRequest, getHairDressersSalonFail, getHairDressersSalonRequest, getHairDressersSalonsFail, getHairDressersSalonsRequest, getHairDressersSalonsSuccess, getHairDressersSalonSuccess, getHairDressersSuccess, getHairstyleInspirationFail, getHairstyleInspirationRequest, getHairstyleInspirationsFail, getHairstyleInspirationsRequest, getHairstyleInspirationsSuccess, getHairstyleInspirationSuccess, updateHairdressingSalonFail, updateHairdressingSalonRequest, updateHairdressingSalonSuccess, updatePrestationFail, updatePrestationRequest, updatePrestationSuccess, updateSalonFeesFail, updateSalonFeesRequest, updateSalonFeesSuccess } from "../types"

export const _getHaiDressersSalonsRequest = ():getHairDressersSalonsRequest => ({
    type: salonActions.GET_HAIR_DRESSERS_SALON_REQUEST
})
export const _getHaiDressersSalonsSuccess = (data:object):getHairDressersSalonsSuccess => ({
    type: salonActions.GET_HAIR_DRESSERS_SALON_SUCCESS,
    payload: data
})
export const _getHaiDressersSalonsFail = ():getHairDressersSalonsFail => ({
    type: salonActions.GET_HAIR_DRESSERS_SALON_FAIL
})

export const _getHairstyleInspirationsRequest = ():getHairstyleInspirationsRequest => ({
    type: salonActions.GET_HAIRSTYLE_INSPIRATIONS_REQUEST
})
export const _getHairstyleInspirationsSuccess = (data:object):getHairstyleInspirationsSuccess => ({
    type: salonActions.GET_HAIRSTYLE_INSPIRATIONS_SUCCESS,
    payload: data
})
export const _getHairstyleInspirationsFail = ():getHairstyleInspirationsFail => ({
    type: salonActions.GET_HAIRSTYLE_INSPIRATIONS_FAIL
})

export const _updateHairdressingSalonRequest = ():updateHairdressingSalonRequest => ({
    type: salonActions.UPDATE_HAIRDRESSING_SALON_REQUEST
})
export const _updateHairdressingSalonSuccess = (data:object):updateHairdressingSalonSuccess => ({
    type: salonActions.UPDATE_HAIRDRESSING_SALON_SUCCESS,
    payload: data
})
export const _updateHairdressingSalonFail = ():updateHairdressingSalonFail => ({
    type: salonActions.UPDATE_HAIRDRESSING_SALON_FAIL
})

export const _getHairstyleInspirationRequest = ():getHairstyleInspirationRequest => ({
    type: salonActions.GET_HAIRSTYLE_INSPIRATION_REQUEST
})
export const _getHairstyleInspirationSuccess = (data:object):getHairstyleInspirationSuccess => ({
    type: salonActions.GET_HAIRSTYLE_INSPIRATION_SUCCESS,
    payload: data
})
export const _getHairstyleInspirationFail = ():getHairstyleInspirationFail => ({
    type: salonActions.GET_HAIRSTYLE_INSPIRATION_FAIL
})

export const _getHaiDressersSalonRequest = ():getHairDressersSalonRequest => ({
    type: salonActions.GET_HAIR_DRESSER_SALON_REQUEST
})
export const _getHaiDressersSalonSuccess = (data:object):getHairDressersSalonSuccess => ({
    type: salonActions.GET_HAIR_DRESSER_SALON_SUCCESS,
    payload: data
})
export const _getHaiDressersSalonFail = ():getHairDressersSalonFail => ({
    type: salonActions.GET_HAIR_DRESSER_SALON_FAIL
})
export const _getHaiDressersRequest = ():getHairDressersRequest => ({
    type: salonActions.GET_HAIR_DRESSERS_REQUEST
})
export const _getHaiDressersSuccess = (data:object):getHairDressersSuccess => ({
    type: salonActions.GET_HAIR_DRESSERS_SUCCESS,
    payload: data
})
export const _getHaiDressersFail = ():getHairDressersFail => ({
    type: salonActions.GET_HAIR_DRESSERS_FAIL
})
export const _addHaiDresserRequest = ():addHairDresserRequest => ({
    type: salonActions.ADD_HAIR_DRESSER_REQUEST
})
export const _addHaiDresserSuccess = (data:object):addHairDresserSuccess => ({
    type: salonActions.ADD_HAIR_DRESSER_SUCCESS,
    payload: data
})
export const _addHaiDresserFail = ():addHairDresserFail => ({
    type: salonActions.ADD_HAIR_DRESSER_FAIL
})
export const _deleteHaiDresserRequest = ():deleteHairDresserRequest => ({
    type: salonActions.DELETE_HAIR_DRESSER_REQUEST
})
export const _deleteHaiDresserSuccess = (data:object):deleteHairDresserSuccess => ({
    type: salonActions.DELETE_HAIR_DRESSER_SUCCESS,
    payload: data
})
export const _deleteHaiDresserFail = ():deleteHairDresserFail => ({
    type: salonActions.DELETE_HAIR_DRESSER_FAIL
})
export const _addPrestationRequest = ():addPrestationRequest => ({
    type: salonActions.ADD_PRESTATION_REQUEST
})
export const _addPrestationSuccess = (data:object):addPrestationSuccess => ({
    type: salonActions.ADD_PRESTATION_SUCCESS,
    payload: data
})
export const _addPrestationFail = ():addPrestationFail => ({
    type: salonActions.ADD_PRESTATION_FAIL
})
export const _updatePrestationRequest = ():updatePrestationRequest => ({
    type: salonActions.UPDATE_PRESTATION_REQUEST
})
export const _updatePrestationSuccess = (data:object):updatePrestationSuccess => ({
    type: salonActions.UPDATE_PRESTATION_SUCCESS,
    payload: data
})
export const _updatePrestationFail = ():updatePrestationFail => ({
    type: salonActions.UPDATE_PRESTATION_FAIL
})
export const _deletePrestationRequest = ():deletePrestationRequest => ({
    type: salonActions.DELETE_PRESTATION_REQUEST
})
export const _deletePrestationSuccess = (data:object):deletePrestationSuccess => ({
    type: salonActions.DELETE_PRESTATION_SUCCESS,
    payload: data
})
export const _deletePrestationFail = ():deletePrestationFail => ({
    type: salonActions.DELETE_PRESTATION_FAIL
})
export const _updateSalonFeesRequest = ():updateSalonFeesRequest => ({
    type: salonActions.UPDATE_SALON_FEES_REQUEST
})
export const _updateSalonFeesSuccess = (data:object):updateSalonFeesSuccess => ({
    type: salonActions.UPDATE_SALON_FEES_SUCCESS,
    payload: data
})
export const _updateSalonFeesFail = ():updateSalonFeesFail => ({
    type: salonActions.UPDATE_SALON_FEES_FAIL
})
export const _addRemoveSalonFavoriteRequest = ():addRemoveSalonFavoriteRequest => ({
  type: salonActions.ADD_REMOVE_SALON_FAVORITE_REQUEST
})
export const _addRemoveSalonFavoriteSuccess = (data:object):addRemoveSalonFavoriteSuccess => ({
  type: salonActions.ADD_REMOVE_SALON_FAVORITE_SUCCESS,
  payload: data
})
export const _addRemoveSalonFavoriteFail = ():addRemoveSalonFavoriteFail => ({
  type: salonActions.ADD_REMOVE_SALON_FAVORITE_FAIL
})