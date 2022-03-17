import { productActions } from "../actionTypes"
import { addRemoveProductFavoriteFail, addRemoveProductFavoriteRequest, addRemoveProductFavoriteSuccess, createProductFail, createProductRequest, createProductSuccess, deleteProductFail, deleteProductImageFail, deleteProductImageRequest, deleteProductImageSuccess, deleteProductRequest, deleteProductSuccess, getOnlineProductsFail, getOnlineProductsRequest, getOnlineProductsSuccess, getProductFail, getProductRequest, getProductsFail, getProductsRequest, getProductsSuccess, getProductSuccess, getSubcatProductsFail, getSubcatProductsRequest, getSubcatProductsSuccess, putRemoveProductOnlineFail, putRemoveProductOnlineRequest, putRemoveProductOnlineSuccess, setTips, updateProductFail, updateProductRequest, updateProductSuccess } from "../types"

export const _getProductsRequest = ():getProductsRequest => ({
    type: productActions.GET_PRODUCTS_REQUEST
  })
  export const _getProductsSuccess = (data:object):getProductsSuccess => ({
    type: productActions.GET_PRODUCTS_SUCCESS,
    payload: data
  })
  export const _getProductsFail = ():getProductsFail => ({
    type: productActions.GET_PRODUCTS_FAIL
  })
  export const _updateProductRequest = ():updateProductRequest => ({
    type: productActions.UPDATE_PRODUCT_REQUEST
  })
  export const _updateProductSuccess = (data:object):updateProductSuccess => ({
    type: productActions.UPDATE_PRODUCT_SUCCESS,
    payload: data
  })
  export const _updateProductFail = ():updateProductFail => ({
    type: productActions.UPDATE_PRODUCT_FAIL
  })
  export const _createProductRequest = ():createProductRequest => ({
    type: productActions.CREATE_PRODUCT_REQUEST
  })
  export const _createProductSuccess = (data:object):createProductSuccess => ({
    type: productActions.CREATE_PRODUCT_SUCCESS,
    payload: data
  })
  export const _createProductFail = ():createProductFail => ({
    type: productActions.CREATE_PRODUCT_FAIL
  })
  export const _deleteProductRequest = ():deleteProductRequest => ({
    type: productActions.DELETE_PRODUCT_REQUEST
  })
  export const _deleteProductSuccess = (data:object):deleteProductSuccess => ({
    type: productActions.DELETE_PRODUCT_SUCCESS,
    payload: data
  })
  export const _deleteProductFail = ():deleteProductFail => ({
    type: productActions.DELETE_PRODUCT_FAIL
  })
  export const _getProductRequest = ():getProductRequest => ({
    type: productActions.GET_PRODUCT_REQUEST
  })
  export const _getProductSuccess = (data:object):getProductSuccess => ({
    type: productActions.GET_PRODUCT_SUCCESS,
    payload: data
  })
  export const _getProductFail = ():getProductFail => ({
    type: productActions.GET_PRODUCT_FAIL
  })
  export const _putRemoveProductOnlineRequest = ():putRemoveProductOnlineRequest => ({
    type: productActions.PUT_REMOVE_PRODUCT_ONLINE_REQUEST
  })
  export const _putRemoveProductOnlineSuccess = (data:object):putRemoveProductOnlineSuccess => ({
    type: productActions.PUT_REMOVE_PRODUCT_ONLINE_SUCCESS,
    payload: data
  })
  export const _putRemoveProductOnlineFail = ():putRemoveProductOnlineFail => ({
    type: productActions.PUT_REMOVE_PRODUCT_ONLINE_FAIL
  })
  export const _deleteProductImageRequest = ():deleteProductImageRequest => ({
    type: productActions.DELETE_PRODUCT_IMAGE_REQUEST
  })
  export const _deleteProductImageSuccess = (data:object):deleteProductImageSuccess => ({
    type: productActions.DELETE_PRODUCT_IMAGE_SUCCESS,
    payload: data
  })
  export const _deleteProductImageFail = ():deleteProductImageFail => ({
    type: productActions.DELETE_PRODUCT_IMAGE_FAIL
  })
  export const _addRemoveProductFavoriteRequest = ():addRemoveProductFavoriteRequest => ({
    type: productActions.ADD_REMOVE_PRODUCT_FAVORITE_REQUEST
  })
  export const _addRemoveProductFavoriteSuccess = (data:object):addRemoveProductFavoriteSuccess => ({
    type: productActions.ADD_REMOVE_PRODUCT_FAVORITE_SUCCESS,
    payload: data
  })
  export const _addRemoveProductFavoriteFail = ():addRemoveProductFavoriteFail => ({
    type: productActions.ADD_REMOVE_PRODUCT_FAVORITE_FAIL
  })
  export const _getOnlineProductsRequest = ():getOnlineProductsRequest => ({
    type: productActions.GET_ONLINE_PRODUCTS_REQUEST
  })
  export const _getOnlineProductsSuccess = (data:object):getOnlineProductsSuccess => ({
    type: productActions.GET_ONLINE_PRODUCTS_SUCCESS,
    payload: data
  })
  export const _getOnlineProductsFail = ():getOnlineProductsFail => ({
    type: productActions.GET_ONLINE_PRODUCTS_FAIL
  })
  export const _getSubcatProductsRequest = ():getSubcatProductsRequest => ({
    type: productActions.GET_SUBCAT_PRODUCTS_REQUEST
  })
  export const _getSubcatProductsSuccess = (data:object):getSubcatProductsSuccess => ({
    type: productActions.GET_SUBCAT_PRODUCTS_SUCCESS,
    payload: data
  })
  export const _getSubcatProductsFail = ():getSubcatProductsFail => ({
    type: productActions.GET_SUBCAT_PRODUCTS_FAIL
  })
  export const _setTips = (data:object):setTips => ({
    type: productActions.SET_TIPS,
    payload: data
  })
  