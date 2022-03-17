import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";

 export function useClickOutsideClose(ref, closeFunc, enventToListen="mousedown") {
    useEffect(() => {
      function handleClickOutside(event) {
          // if target is not in the current ref
        if (ref.current && !ref.current.contains(event.target)) {
            closeFunc(event)
        }
      }
      document.addEventListener(enventToListen, handleClickOutside);
      return () => {
        document.removeEventListener(enventToListen, handleClickOutside);
      };
    }, [ref]);
  }

  export const useCurrency = () => {
    const it = useIntl()
    // @ts-ignore
    const locale = useSelector(state => state.auth.locale)
    return (num:number) => locale.includes("fr") 
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
    return (id:string | undefined) => {
      return (id || !id?.includes(" ")) ? it.formatMessage({id}) : id
    }
  }

  import Input from "@/components/basics/Input"
import InputCheckbox from "@/components/basics/InputCheckbox"
import InputImage from "@/components/basics/InputImage"
import Select from "@/components/basics/Select"
import TextArea from "@/components/basics/Textarea"
// import { useFormik } from "formik"
import toast from "react-hot-toast"
// import { object } from "yup"

interface Field {
    name: string,
    type?: string,
    placeholder?: string,
    validation: any,
    initialValue: string,
    className?: string,
    options?: any[],
    onChange?: (e:any) => void,
    value?: string
}

// function FormikErrorComp (fieldName: string, formik:any) {
//     return (formik.touched[fieldName] && formik.errors[fieldName]) ? (
//         <small>{formik.errors[fieldName]}</small>
//     ): null
// }

// export const useToast = () => {
//     const t = useTranslation()
//     return (key:string, type: "error" | "success" | "normal" = "normal") => type === "error" ? toast.error(t(key)) : type === "success" ? toast.success(t(key)) : toast(t(key))
// }

// export const useFormikInitNValidation = (fields:Field[]) => {
//     const initialValues = {}
//     const validationSchema = {}
//     fields.forEach(field => {
//         initialValues[field.name] = field.initialValue
//         validationSchema[field.name] = field.validation
//     }) 

//     return [initialValues, object(validationSchema)]
// }

// export const useFields = (fields: Field[], formik:any) => {
//     const t = useTranslation()
//     const fieldsToReturn = []
//     fields.forEach((field) => {
//         fieldsToReturn.push(field.type === "select"
//         ? (
//             <div>
//                 <Select
//                     options = {field.options}
//                     onChange= {field.onChange}
//                     className={field.className || undefined}
//                     black
//                 />
//                 {FormikErrorComp(field.name, formik)}
//             </div>
//         )
//         : field.type === "textarea"
//         ? (
//             <div>
//                 <TextArea
//                     onChange={formik.handleChange}
//                     className="w-full"
//                     onBlur={formik.handleBlur}
//                     value={formik.values[field.name]}
//                     invalid={Boolean(
//                         formik.touched[field.name] &&
//                         formik.errors[field.name]
//                     )}
//                     name={field.name}
//                     placeholder={field?.placeholder ? t(field.placeholder) : ""}
//                 />
//                 {FormikErrorComp(field.name, formik)}
//             </div>
//         )
//         : field.type === "image"
//         ? (
//             <InputImage field={field} />
//         )
//         :
//         field.type=== "checkbox" ?
//         (
//             <div>
//                 <InputCheckbox
//                     type={field.type}
//                     onChange={formik.handleChange}
//                     className="w-full"
//                     onBlur={formik.handleBlur}
//                     value={formik.values[field.name]}
//                     name={field.name}
//                     label={field.placeholder}
//                     placeholder={field?.placeholder ? t(field.placeholder) : ""}
//                 />
//                 {FormikErrorComp(field.name, formik)}
//             </div>
//         )
//         : (
//             <div>
//                 <Input
//                     type={field?.type || "text"}
//                     onChange={formik.handleChange}
//                     className="w-full"
//                     onBlur={formik.handleBlur}
//                     value={formik.values[field.name]}
//                     invalid={Boolean(
//                         formik.touched[field.name] &&
//                         formik.errors[field.name]
//                     )}
//                     name={field.name}
//                     placeholder={field?.placeholder ? t(field.placeholder) : ""}
//                 />
//                 {FormikErrorComp(field.name, formik)}
//             </div>
//         ))
//     })

//     return fieldsToReturn
// }

//   export const useCustomFormik = (fields:Field[], onSubmit: any, reinitialize=true) => {
//     const [initialValues, validationSchema] = useFormikInitNValidation(fields)
// 	const formik = useFormik({
// 		initialValues,
// 		enableReinitialize: reinitialize,
// 		validationSchema,
// 		onSubmit
// 	})
// 	return {fields:useFields(fields, formik), formik}
//   }