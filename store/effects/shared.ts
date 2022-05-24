import { ThunkDispatch } from "redux-thunk"
import { ApplicationAction, ApplicationState, EffectRange, RequestRange, StudentActions } from "../types"

export const basicEffectFunction = async (effectRange:EffectRange, serviceFunction: (rangeOrPayload?:RequestRange | any) => Promise<Response>, dispatch: ThunkDispatch<ApplicationState, any, ApplicationAction>, successActionFunction?:(data?:any) => ApplicationAction, isAuth=false) => {
    effectRange.setLoading(true)
    
    try {
        const res = await (!!effectRange.payload ? serviceFunction(effectRange.payload) : !!effectRange.range ? serviceFunction(effectRange.range) : serviceFunction())
        
        const data = await res.json()
        
        if(res.status === 200 || res.status === 201) {
            if(successActionFunction) {
                dispatch(successActionFunction(data))
            }
            effectRange.successCb(data)
        } else {
            effectRange.failCb(data)
            if(isAuth) {
                localStorage.removeItem("token")
            }
        }
    }
    
    catch (e) {
        effectRange.setLoading(false)
        effectRange.failCb()
        if(isAuth) {
            localStorage.removeItem("token")
        }
    }

    finally {
        effectRange.setLoading(false)
    }
}