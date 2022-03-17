// import {getLocalStorageItem, updateLocalStorage} from "../../../utils/common";
import {productActions} from "../../actionTypes";
import {ApplicationAction, ProductState} from "../../types";
import produce from "immer";

const initialState: ProductState = {
    products: {
        total: 0,
        pages: 0,
        current_page: 1,
        per_page: 0,
        data: [],
        loading: false,
    },
    onlineProducts: {
        total: 0,
        pages: 0,
        current_page: 1,
        per_page: 0,
        data: [],
        loading: false,
    },
    subCatProducts: {
        total: 0,
        pages: 0,
        current_page: 1,
        per_page: 0,
        data: [],
        loading: false,
    },
    tips: {
        data: [],
    },
    cart: []
};

const productReducer = (state = initialState, {type, payload}: ApplicationAction) => {
    switch (type) {

        case productActions.GET_PRODUCTS_REQUEST: {
            return {
                ...state,
                products: {
                    ...initialState.products,
                    loading: true
                }
            }
        }

        case productActions.GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: {
                    ...payload,
                    loading: false
                }
            }
        }

        case productActions.GET_PRODUCTS_FAIL: {
            return {
                ...state,
                products: {
                    ...state.products,
                    loading: false
                }
            }
        }

        case productActions.UPDATE_PRODUCT_REQUEST: {
            return {
                ...state,
                products: {
                    ...state.products,
                    loading: true
                }
            }
        }

        case productActions.UPDATE_PRODUCT_SUCCESS: {
            const productIndex = state.products.data.findIndex(product => product.uuid === payload.uuid)
            if (productIndex > -1) {
                state.products.data.splice(productIndex, 1)
                state.products.data.splice(productIndex, 0, {...payload})
            }
            return {
                ...state,
                products: {
                    ...state.products,
                    loading: false
                }
            }
        }

        case productActions.UPDATE_PRODUCT_FAIL: {
            return {
                ...state,
                products: {
                    ...state.products,
                    loading: false
                }
            }
        }

        case productActions.CREATE_PRODUCT_REQUEST: {
            return {
                ...state,
                products: {
                    ...state.products,
                    loading: true
                }
            }
        }

        case productActions.CREATE_PRODUCT_SUCCESS: {
            if (state.products.per_page === state.products.data.length) {
                state.products.data.pop()
            }
            return {
                ...state,
                products: {
                    ...state.products,
                    data: [
                        payload,
                        ...state.products.data
                    ],
                    loading: false
                }
            }
        }

        case productActions.CREATE_PRODUCT_FAIL: {
            return {
                ...state,
                products: {
                    ...state.products,
                    loading: false
                }
            }
        }

        case productActions.DELETE_PRODUCT_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }

        case productActions.DELETE_PRODUCT_SUCCESS: {
            const products = [...state.products.data]
            const productIndex = products.findIndex(product => product.uuid === payload.uuid)
            if (productIndex > -1) {
                products.splice(productIndex, 1)
            }
            return {
                ...state,
                loading: false,
                products: {
                    ...state.products,
                    data: products
                }
            }
        }

        case productActions.DELETE_PRODUCT_FAIL: {
            return {
                ...state,
                loading: false
            }
        }

        case productActions.GET_PRODUCT_REQUEST: {
            return {
                ...state
            }
        }

        case productActions.GET_PRODUCT_SUCCESS: {
            return {
                ...state
            }
        }

        case productActions.GET_PRODUCT_FAIL: {
            return {
                ...state
            }
        }

        case productActions.PUT_REMOVE_PRODUCT_ONLINE_REQUEST: {
            return {
                ...state
            }
        }

        case productActions.PUT_REMOVE_PRODUCT_ONLINE_SUCCESS: {
            return {
                ...state
            }
        }

        case productActions.PUT_REMOVE_PRODUCT_ONLINE_FAIL: {
            return {
                ...state
            }
        }

        case productActions.DELETE_PRODUCT_IMAGE_REQUEST: {
            return {
                ...state
            }
        }

        case productActions.DELETE_PRODUCT_IMAGE_SUCCESS: {
            const products = [...state.products.data]
            const productIndex = products.findIndex(product => product.uuid === payload.uuid)
            if (productIndex > -1) {
                const product = products[productIndex]
                const imgIndex = product.images.findIndex(img => img.fileUrl === payload.fileUrl)
                if (imgIndex > -1) {
                    product.images.splice(imgIndex, 1)
                }
            }
            return {
                ...state,
                products: {
                    ...state.products,
                    data: products
                }
            }
        }

        case productActions.DELETE_PRODUCT_IMAGE_FAIL: {
            return {
                ...state
            }
        }

        case productActions.ADD_REMOVE_PRODUCT_FAVORITE_REQUEST: {
            return {
                ...state
            }
        }

        case productActions.ADD_REMOVE_PRODUCT_FAVORITE_SUCCESS:
            return produce(state, (draft) => {
                draft.subCatProducts.data = draft.subCatProducts.data.map(product => {
                    if(product.uuid === payload.product_uuid) {
                        product.is_favoris = !product.is_favoris
                        return product
                    } else {
                        return product
                    }
                })
            })


        case productActions.ADD_REMOVE_PRODUCT_FAVORITE_FAIL: {
            return {
                ...state
            }
        }

        case productActions.GET_ONLINE_PRODUCTS_REQUEST: {
            return {
                ...state,
                onlineProducts: {
                    ...initialState.onlineProducts,
                    loading: true
                }
            }
        }

        case productActions.GET_ONLINE_PRODUCTS_SUCCESS: {
            return {
                ...state,
                onlineProducts: {
                    ...payload,
                    loading: false
                }
            }
        }

        case productActions.GET_ONLINE_PRODUCTS_FAIL: {
            return {
                ...state,
                onlineProducts: {
                    ...state.onlineProducts,
                    loading: false
                }
            }
        }

        case productActions.GET_SUBCAT_PRODUCTS_REQUEST: {
            return {
                ...state,
                subCatProducts: {
                    ...initialState.subCatProducts,
                    loading: true
                }
            }
        }

        case productActions.GET_SUBCAT_PRODUCTS_SUCCESS: {
            return {
                ...state,
                subCatProducts: {
                    ...payload,
                    loading: false
                }
            }
        }

        case productActions.GET_SUBCAT_PRODUCTS_FAIL: {
            return {
                ...state,
                subCatProducts: {
                    ...state.subCatProducts,
                    loading: false
                }
            }
        }

        case productActions.CLEAR_SUBCAT_PRODUCTS: {
            return {
                ...state
            }
        }

        case productActions.CLEAR_ONLINE_PRODUCTS: {
            return {
                ...state
            }
        }

        case productActions.CLEAR_PRODUCTS: {
            return {
                ...state
            }
        }

        case productActions.ADD_TO_CART: {
            const newCart = [...state.cart]
            const productIndex = newCart?.findIndex(item => item.product.uuid === payload.product.uuid)
            if (productIndex > -1) {
                newCart[productIndex].qty = newCart[productIndex].qty + payload.qty
            } else {
                newCart.push(payload)
            }
            // updateLocalStorage("cart", newCart)
            return {
                ...state,
                cart: newCart
            }
        }

        case productActions.REMOVE_FROM_CART: {
            let newCart = [...state.cart]
            if (payload) {
                const productIndex = newCart.findIndex(item => item.product.uuid === payload.product.uuid)
                if (productIndex > -1) {
                    if (payload?.qty) {
                        if(newCart[productIndex].qty === 1) {
                            newCart.splice(productIndex, 1)
                        } else {
                            newCart[productIndex].qty = newCart[productIndex].qty - payload.qty
                        }
                    } else {
                        newCart.splice(productIndex, 1)
                    }
                }
            } else {
                newCart = []
            }
            // updateLocalStorage("cart", newCart)
            return {
                ...state,
                cart: [...newCart]
            }
        }

        case productActions.SET_TIPS:
            return {
                ...state,
                tips: {
                    data: payload
                }
            }

        default:
            return {...state};
    }
};

export default productReducer