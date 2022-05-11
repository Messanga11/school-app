import React from "react"
import { ApplicationState } from "@/store/types"
import { useSelector } from "react-redux"
import Modal from "./Modal"
import { useCustomFormik } from "@/utils/hooks"
import Button from "@/components/basics/Button";
import * as Yup from "yup"

interface Props {
    handleClose: Function
}

const EditSchoolInfoModal:React.FC<Props> = ({ handleClose }) => {
    // Store

    
    // Hooks
    const {fields, formik} = useCustomFormik([
        {
            initialValue: "",
            name: "name",
            validation: Yup.string().required("This field is required"),
            placeholder: "School name"
        },
        {
            initialValue: "",
            name: "region",
            validation: Yup.string().required("This field is required"),
            placeholder: "School region"
        },
        {
            initialValue: "",
            name: "email",
            type: "email",
            validation: Yup.string().email("Enter a valid email address").required("This field is required"),
            placeholder: "Email"
        },
        {
            initialValue: "",
            name: "password",
            type: "password",
            validation: Yup.string().required("This field is required").min(6).typeError("Enter at least 6 characters"),
            placeholder: "Password"
        },
        {
            initialValue: "",
            name: "confirm_password",
            type: "password",
            validation: Yup.string().required("This field is required").min(6).typeError("Enter at least 6 characters"),
            placeholder: "Confirm password"
        },
    ], () => undefined)
    
    // States
    const {  } = useSelector((state:ApplicationState) => state)
    // Constants
    
    // Function
    
    // Effects

    return (
        <Modal className="max-w-xl" handleClose={() => handleClose()}>
            <div className="text-center">
                <h2>Update school informations</h2>
                <small>In this view you can update informations about a school</small>
            </div>
            <form className="mt-8 flex flex-col gap-4 w-full max-w-lg" onSubmit={formik.handleSubmit}>
                {fields}
                <Button>Register</Button>
            </form>
        </Modal>
    )
}

export default EditSchoolInfoModal