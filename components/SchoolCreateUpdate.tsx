import React, { useState } from "react"
import { ApplicationState } from "@/store/types"
import { useDispatch, useSelector } from "react-redux"
import DefaultLayout from "@/layouts/DefaultLayout"
import Container from '@/components/Container';
import { useCustomFormik } from '@/utils/hooks';
import Button from "@/components/basics/Button";
import * as Yup from "yup"
import { createSchoolEffect } from '@/store/effects/school';
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { regionOptions } from "@/utils/common";
import { School } from '../store/types/School';

interface Props {
    submitFunc: Function;
    update?: boolean;
}

const SchoolCreateUpdate:React.FC<Props> = ({submitFunc, update}) => {

    // Store
    const { auth: { userInfos } } = useSelector((state:ApplicationState) => state)

    // App data
    const schoolInfos = update ? userInfos as School : null

    // States
    const [loading, setLoading] = useState<boolean>(false)

    // Hooks
    const dispatch = useDispatch()
    const router = useRouter()
    const {fields, formik} = useCustomFormik([
        {
            initialValue: update ? (schoolInfos?.name || "") : "",
            name: "name",
            validation: Yup.string().required("This field is required"),
            placeholder: "School name"
        },
        {
            initialValue:  update ? regionOptions.find(r => r.value === schoolInfos?.region) ? JSON.stringify(regionOptions.find(r => r.value === schoolInfos?.region)) : "" : "",
            type: "select",
            name: "region",
            options: regionOptions,
            validation: Yup.string().required("This field is required"),
            placeholder: "School region"
        },
        {
            initialValue:  update ? (schoolInfos?.email || "") : "",
            name: "email",
            type: "email",
            validation: Yup.string().email("Enter a valid email address").required("This field is required"),
            placeholder: "Email"
        },
        //@ts-ignore
        ...(update ? [{
            initialValue: "",
            name: "previous_password",
            type: "password",
            validation: Yup.string().required("This field is required").min(6).typeError("Enter at least 6 characters"),
            placeholder: "Previous password"
        }] : []),
        {
            initialValue: "",
            name: "password",
            //@ts-ignore
            type: "password",
            validation: Yup.string().required("This field is required").min(6).typeError("Enter at least 6 characters"),
            placeholder: "New password"
        },
        {
            initialValue: "",
            name: "confirm_password",
            //@ts-ignore
            type: "password",
            validation: Yup.string().required("This field is required").min(6).typeError("Enter at least 6 characters"),
            placeholder: "Confirm new password"
        },
    ], (values) => {
        const payload = {...values}
        if(update) {
            payload.uuid = schoolInfos?.uuid
        }
        payload.region = JSON.parse(payload.region)?.value
        Reflect.deleteProperty(payload, "confirm_password")
        submitFunc(payload, setLoading)
    })
    
    // Constants
    
    // Function
    
    // Effects

    return (
        <Container>
            <div>
                <div className="flex flex-col items-center p-12 rounded-xl shadow-md bg-white max-w-lg w-full mx-auto">
                    <h2>Register your school</h2>
                    <small>Join our amazing team of schools an enjoy amazing features</small>
                    <form className="mt-8 flex flex-col gap-4 w-full" onSubmit={formik.handleSubmit}>
                        {fields}
                        <Button loading={loading}>Register</Button>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default SchoolCreateUpdate