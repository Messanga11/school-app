import React, { useState } from "react"
import { ApplicationState } from "@/store/types"
import { useSelector } from "react-redux"
import Modal from "./Modal"
import { useCustomFormik, Field } from "@/utils/hooks"
import Button from "@/components/basics/Button";
import * as Yup from "yup"
import { toBase64 } from "@/utils/common"

interface Props {
    handleClose: Function;
    updatePrincipal: Function;
    updateMembers: (data: any, prop: string, i?: number) => void;
    isPrincipal: boolean;
}

const AddMemberModal:React.FC<Props> = ({ handleClose, updatePrincipal, updateMembers, isPrincipal }) => {

    // States
    const [base_64, setBase_64] = useState<any>("")
    
    // Hooks
    const {fields, formik} = useCustomFormik([
        {
            initialValue: "",
            name: "name",
            validation: Yup.string().required("This field is required"),
            placeholder: "Name"
        },
        ...((!isPrincipal ? [{
            initialValue: "",
            name: "function",
            type: "select",
            options: [
                {
                    label: "Teacher",
                    value: "teachers"
                },
                {
                    label: "Vice Principal",
                    value: "vice_principals"
                }
            ],
            validation: Yup.string().required("This field is required"),
            placeholder: "Function"
        }] : []) as Field[])
    ], (values) => {
        
        const payload = {
            ...values,
            base_64,
        }

        if(isPrincipal) {
         updatePrincipal(payload)   
        } else {
            const prop = JSON.parse(payload.function).value
            const index = undefined // index of the element to update in the array
            updateMembers(payload, prop, index)
        }
        handleClose()
    })

    return (
        <Modal className="max-w-xl" handleClose={() => handleClose()}>
            <div className="text-center">
                <h2 className="text-white">Update school informations</h2>
                <p>In this view you can update informations about a school</p>
            </div>
            {base_64 && <div>
                <img className="w-32 h-32 rounded-full object-cover block mt-8 mb-4 mx-auto" src={base_64} alt="" />
            </div>}
            
            <input id="image" className="hidden" type="file" onChange={(e) => toBase64(e.target?.files![0]).then(base64 => setBase_64(base64))} />
            <label htmlFor="image" className="text-center rounded-full py-2 mt-8 px-4 border text-sm cursor-pointer border-white hover:bg-white hover:text-black text-white">
                {base_64 ? "Change image" : "Add an image"}
            </label>
            <form className="mt-4 flex flex-col gap-4 w-full max-w-lg" onSubmit={formik.handleSubmit}>
                {fields}
                <Button className="mt-8">Register</Button>
            </form>
        </Modal>
    )
}

export default AddMemberModal