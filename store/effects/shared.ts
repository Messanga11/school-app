import { ThunkDispatch } from "redux-thunk"
import { ApplicationAction, ApplicationState, EffectRange, RequestRange, StudentActions } from "../types"

export const basicEffectFunction = async (effectRange:EffectRange, serviceFunction: (rangeOrPayload?:RequestRange | any) => Promise<Response>, dispatch: ThunkDispatch<ApplicationState, any, ApplicationAction>, successActionFunction?:(data?:any) => ApplicationAction) => {
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
        }
    }
    
    catch (e) {
        effectRange.setLoading(false)
        effectRange.failCb()
        console.log(e)
    }

    finally {
        effectRange.setLoading(false)
    }
}