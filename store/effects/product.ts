import {ThunkAction} from "redux-thunk";
import productService from "../../service/api/productService";
import {requestErrorHandler, requestSuccessHandler} from "../../utils/common";
import {
    _addRemoveProductFavoriteFail,
    _addRemoveProductFavoriteRequest,
    _addRemoveProductFavoriteSuccess,
    _createProductFail,
    _createProductRequest,
    _createProductSuccess,
    _deleteProductFail,
    _deleteProductImageFail,
    _deleteProductImageRequest,
    _deleteProductImageSuccess,
    _deleteProductRequest,
    _deleteProductSuccess,
    _getOnlineProductsFail,
    _getOnlineProductsRequest,
    _getOnlineProductsSuccess,
    _getProductsFail,
    _getProductsRequest,
    _getProductsSuccess,
    _getSubcatProductsFail,
    _getSubcatProductsRequest,
    _getSubcatProductsSuccess,
    _putRemoveProductOnlineFail,
    _putRemoveProductOnlineRequest,
    _putRemoveProductOnlineSuccess,
    _setTips,
    _updateProductFail,
    _updateProductRequest,
    _updateProductSuccess
} from "../actions/product";
import {productActions} from "../actionTypes";
import {ApplicationAction, ProductState} from "../types";

type Effect = ThunkAction<any, ProductState, any, ApplicationAction>;

export const getProductsEffect =
    (range: object, cb = () => undefined): Effect =>
        async (dispatch, getState) => {
            dispatch(_getProductsRequest());
            try {
                const res = await productService.getProducts(range);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_getProductsSuccess(data))
                        cb()
                    },
                    () => dispatch(_getProductsFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_getProductsFail()));
            }
        };

export const updateProductEffect =
    (payload: object, cb = () => undefined): Effect =>
        async (dispatch, getState) => {
            dispatch(_updateProductRequest());
            try {
                const res = await productService.updateProduct(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_updateProductSuccess(data))
                        cb()
                    },
                    () => dispatch(_updateProductFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_updateProductFail()));
            }
        };

export const createProductEffect =
    (payload: object, cb = () => undefined): Effect =>
        async (dispatch, getState) => {
            dispatch(_createProductRequest());
            try {
                const res = await productService.createProduct(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_createProductSuccess(data))
                        cb()
                    },
                    () => dispatch(_createProductFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_createProductFail()));
            }
        };

export const deleteProductEffect =
    (payload: object): Effect =>
        async (dispatch, getState) => {
            dispatch(_deleteProductRequest());
            try {
                const res = await productService.deleteProduct(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => dispatch(_deleteProductSuccess(payload)),
                    () => dispatch(_deleteProductFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_deleteProductFail()));
            }
        };

export const putRemoveProductOnlineEffect =
    (uuid: string): Effect =>
        async (dispatch, getState) => {
            dispatch(_putRemoveProductOnlineRequest());
            try {
                const res = await productService.putRemoveProductOnline(uuid);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => dispatch(_putRemoveProductOnlineSuccess(data)),
                    () => dispatch(_putRemoveProductOnlineFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_putRemoveProductOnlineFail()));
            }
        };

export const deleteProductImageEffect =
    (uuid: string, fileUrl: string): Effect =>
        async (dispatch, getState) => {
            dispatch(_deleteProductImageRequest());
            try {
                const res = await productService.deleteProductImage(uuid, fileUrl);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => dispatch(_deleteProductImageSuccess({uuid, fileUrl})),
                    () => dispatch(_deleteProductImageFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_deleteProductImageFail()));
            }
        };

export const addRemoveProductFavoriteEffect =
    (payload: object): Effect =>
        async (dispatch, getState) => {
            dispatch(_addRemoveProductFavoriteRequest());
            try {
                const res = await productService.addRemoveProductFavorite(payload);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => dispatch(_addRemoveProductFavoriteSuccess(payload)),
                    () => dispatch(_addRemoveProductFavoriteFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_addRemoveProductFavoriteFail()));
            }
        };

export const getOnlineProductsEffect =
    (range: object): Effect =>
        async (dispatch, getState) => {
            dispatch(_getOnlineProductsRequest());
            try {
                const res = await productService.getOnlineProducts(range);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => dispatch(_getOnlineProductsSuccess(data)),
                    () => dispatch(_getOnlineProductsFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_getOnlineProductsFail()));
            }
        };

export const getSubcatProductsEffect =
    (range: object, cb = () => undefined): Effect =>
        async (dispatch, getState) => {
            dispatch(_getSubcatProductsRequest());
            try {
                const res = await productService.getSubcatProducts(range);
                const data = await res.json();
                requestSuccessHandler(
                    res.status, data?.detail,
                    () => {
                        dispatch(_getSubcatProductsSuccess(data))
                        cb()
                    },
                    () => dispatch(_getSubcatProductsFail())
                );
            } catch (error) {
                requestErrorHandler(() => dispatch(_getSubcatProductsFail()));
            }
        };

export const addToCartEffect =
    (product: object, qty: number): Effect =>
        async (dispatch, getState) => {
            dispatch({
                type: productActions.ADD_TO_CART,
                payload: {
                    product,
                    qty
                }
            });
        };

export const removeFromCartEffect =
    (product: object, qty: number | null): Effect =>
        async (dispatch, getState) => {
            dispatch({
                type: productActions.REMOVE_FROM_CART,
                payload: {
                    product,
                    qty
                }
            });
        };

export const getTipsEffect =
    (range: object, setLoading, toast): Effect =>
        async (dispatch, getState) => {
            setLoading(true)
            try {
                const res = await productService.getTips(range);
                const data = await res.json();
                if (res.status === 200 || res.status === 201) {
                    dispatch(_setTips(data))
                } else {
                    toast.error("something_went_wrong")
                }
                setLoading(false)
            } catch (error) {
                toast.error("something_went_wrong")
                setLoading(false)
            }
        };