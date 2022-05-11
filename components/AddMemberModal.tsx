import React, { useState } from "react"
import { ApplicationState } from "@/store/types"
import { useSelector } from "react-redux"
import Modal from "./Modal"
import { useCustomFormik } from "@/utils/hooks"
import Button from "@/components/basics/Button";
import * as Yup from "yup"
import { toBase64 } from "@/utils/common"

interface Props {
    handleClose: Function,
    updateSchool: Function
}

const AddMemberModal:React.FC<Props> = ({ handleClose, updateSchool }) => {

    // State
    const [base_64, setBase_64] = useState<any>("")
    
    // Hooks
    const {fields, formik} = useCustomFormik([
        {
            initialValue: "",
            name: "name",
            validation: Yup.string().required("This field is required"),
            placeholder: "Name"
        },
        {
            initialValue: "",
            name: "function",
            type: "select",
            options: [
                {
                    label: "Teacher",
                    value: "teacher"
                },
                {
                    label: "Vice Principal",
                    value: "vice_principal"
                }
            ],
            validation: Yup.string().required("This field is required"),
            placeholder: "Function"
        },
    ], (values) => {
        updateSchool({
            ...values,
            base_64,
        })
    })
    
    // Constants
    
    // Function
    
    // Effects

    return (
        <Modal className="max-w-xl" handleClose={() => handleClose()}>
            <div className="text-center">
                <h2>Update school informations</h2>
                <small>In this view you can update informations about a school</small>
            </div>
            {base_64 && <div>
                <img className="w-32 h-32 rounded-full object-cover block my-4 mx-auto" src={base_64} alt="" />
            </div>}
            
            <input id="image" className="hidden" type="file" onChange={(e) => toBase64(e.target?.files![0]).then(base64 => setBase_64(base64))} />
            <label htmlFor="image" className="text-center rounded-full py-2 px-4 border-2 text-sm cursor-pointer border-black hover:bg-black hover:text-white font-semibold">
                {base_64 ? "Change image" : "Add an image"}
            </label>
            <form className="mt-8 flex flex-col gap-4 w-full max-w-lg" onSubmit={formik.handleSubmit}>
                {fields}
                <Button>Register</Button>
            </form>
        </Modal>
    )
}

export default AddMemberModal