import { EventHandler, MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik"
import { object } from "yup"
import AuthService from "@/services/AuthService"

export function useClickOutsideClose(ref: MutableRefObject<HTMLElement>, closeFunc: Function, eventToListen = "mousedown") {
    useEffect(() => {
        function handleClickOutside(event: any) {
            // if target is not in the current ref
            if (ref.current && !ref.current?.contains(event.target)) {
                closeFunc(event)
            }
        }
        document.addEventListener(eventToListen, handleClickOutside);
        return () => {
            document.removeEventListener(eventToListen, handleClickOutside);
        };
    }, [ref, closeFunc, eventToListen]);
}

export const useCurrency = () => {
    const it = useIntl()
    // @ts-ignore
    const locale = useSelector(state => state.auth.locale)
    return (num: number) => locale.includes("fr")
        ?
        it.formatNumber(num, {
            currency: "CAD",
            style: "currency"
        }).split("").reverse().slice(2).reverse().join("")
        :
        it.formatNumber(num, {
            currency: "CAD",
            style: "currency"
        }).substring(2)
}

export const useTranslation = () => {
    const it = useIntl()
    return (id: string | undefined) => {
        return (id || !id?.includes(" ")) ? it.formatMessage({ id }) : id
    }
}

import Input from "@/components/basics/Input"
import InputCheckbox from "@/components/basics/InputCheckbox"
import InputImage from "@/components/basics/InputImage"
import SelectComponent from "@/components/basics/Select"
import TextArea from "@/components/basics/Textarea"
// import { useFormik } from "formik"
import toast from "react-hot-toast"
import { useRouter } from "next/router";
import { apiPrefix } from "@/services/urls";
import { debounceFunction } from "./common";
// import { object } from "yup"

interface Option {
    label: string,
    value: string | number
}
export interface Field {
    name: string,
    type?: "select" | "number" | "text" | "image" | "checkbox" | "textarea" | "password" | "email",
    placeholder?: string,
    validation: any,
    initialValue: string,
    className?: string,
    isMulti?: boolean,
    options?: Option[],
    onChange?: (e: any) => void,
    value?: string
}

function FormikErrorComp(fieldName: string, formik: any) {
    return (formik.touched[fieldName] && formik.errors[fieldName]) ? (
        <small className="text-red-500">{formik.errors[fieldName]}</small>
    ) : null
}

export const useToast = () => {
    const t = useTranslation()
    return (key: string, type: "error" | "success" | "normal" = "normal") => type === "error" ? toast.error(t(key)) : type === "success" ? toast.success(t(key)) : toast(t(key))
}

export const useFormikInitNValidation = (fields: Field[]) => {
    const initialValues: any = {}
    const validationSchema: any = {}
    fields.forEach(field => {
        initialValues[field.name] = field.initialValue
        validationSchema[field.name] = field.validation
    })

    const returnValues: any = [initialValues, object(validationSchema)]

    return returnValues
}

export const useFields = (fields: Field[], formik: any) => {
    const t = useTranslation()
    const fieldsToReturn: any[] = []
    fields.forEach((field, i) => {
        fieldsToReturn.push(field.type === "select"
            ? (
                <div key={field.name}>
                    <SelectComponent
                        options={field.options}
                        onChange={formik.handleChange}
                        className={field.className || undefined}
                        placeholder={field.placeholder}
                        name={field.name}
                        isMulti={!!field.isMulti}
                        label={field.placeholder}
                        initialValue={field.initialValue ? JSON.parse(field.initialValue) : null}
                    />
                    {FormikErrorComp(field.name, formik)}
                </div>
            )
            : field.type === "textarea"
                ? (
                    <div key={field.name}>
                        <TextArea
                            onChange={formik.handleChange}
                            className="w-full"
                            onBlur={formik.handleBlur}
                            value={formik.values[field.name]}
                            invalid={Boolean(
                                formik.touched[field.name] &&
                                formik.errors[field.name]
                            )}
                            name={field.name}
                            placeholder={field?.placeholder ? t(field.placeholder) : ""}
                        />
                        {FormikErrorComp(field.name, formik)}
                    </div>
                )
                : field.type === "image"
                    ? (
                        <InputImage field={field} />
                    )
                    :
                    field.type === "checkbox" ?
                        (
                            <div key={`${field.name}-${field.placeholder}-${i}`}>
                                <InputCheckbox
                                    type={field.type}
                                    onChange={formik.handleChange}
                                    className="w-full"
                                    onBlur={formik.handleBlur}
                                    value={formik.values[field.name]}
                                    name={field.name}
                                    label={field.placeholder}
                                    placeholder={field?.placeholder ? t(field.placeholder) : ""}
                                />
                                {FormikErrorComp(field.name, formik)}
                            </div>
                        )
                        : (
                            <div key={field.name}>
                                <Input
                                    type={field?.type || "text"}
                                    onChange={formik.handleChange}
                                    className="w-full"
                                    onBlur={formik.handleBlur}
                                    label={field.placeholder}
                                    value={formik.values[field.name]}
                                    invalid={Boolean(
                                        formik.touched[field.name] &&
                                        formik.errors[field.name]
                                    )}
                                    name={field.name}
                                    placeholder={field?.placeholder ? t(field.placeholder) : ""}
                                />
                                {FormikErrorComp(field.name, formik)}
                            </div>
                        ))
    })

    return fieldsToReturn
}

export const useCustomFormik = (fields: Field[], onSubmit: (values: any) => any, reinitialize = true) => {
    const [initialValues, validationSchema] = useFormikInitNValidation(fields)
    const formik = useFormik({
        initialValues,
        enableReinitialize: reinitialize,
        validationSchema,
        onSubmit
    })
    return { fields: useFields(fields, formik), formik }
}

export const useLoginChecker = (isAdminPage: boolean = false) => {
    const router = useRouter()

    useEffect(() => {
        const inLoginRoutes = ["/login", "/signup"].includes(router.pathname)
        const token = localStorage.getItem("token") ? JSON.stringify(localStorage.getItem("token")) : null // replace by admin token
        if (!token && !inLoginRoutes) {
            router.push("/")
        }
        else if (token && inLoginRoutes) {
            router.push("/")
        }
        console.log(token)
        // eslint-disable-next-line
    }, [])
}

export const uploadFormDataWithFile = ({
    setLoading,
    payload,
    successCb,
    failCb,
    url,
    requireAuth
}: {
    setLoading: Function,
    successCb: Function,
    failCb: Function,
    payload: any,
    url?: string,
    requireAuth?: boolean
}) => {
    const formData = new FormData()
    setLoading(true)
    Object.keys(payload).map(key => {
        formData.append(key, payload[key])
    })
    const request = new XMLHttpRequest()
    request.open("POST", url || `${apiPrefix}/administration/books`)
    if (requireAuth) {
        request.setRequestHeader("authorization", `Bearer ${localStorage.getItem("token") || ""}`)
    }

    request.send(formData)
    request.onload = () => {
        if (request.status === 200) {
            successCb()
        } else {
            failCb()
        }
        setLoading(false)
    }
    request.onerror = () => {
        toast.error("An unexpected error occurred!")
        setLoading(false)
        failCb()
    }
}

export const useSearch = (searchFunction: Function, deps: any[] = []) => {

    // eslint-disable-next-line
    const searchHandler = useCallback(debounceFunction(() => {
        searchFunction()
    }, 500), deps)


    useEffect(() => {
        searchHandler()
        // eslint-disable-next-line
    }, deps)
}

export const useVipChecker = (url?: string, setLoading?: Function) => {
    useEffect(() => {
        if (setLoading instanceof Function) setLoading(true)
        AuthService.checkIsVIP()
            .then(res => {
                if (res.status !== 200) {
                    window.location.href = url || "/"
                    if (setLoading instanceof Function) setLoading(false)
                }
            })
        // eslint-disable-next-line
    }, [])
}