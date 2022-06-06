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
    university?: boolean;
}

const SchoolCreateUpdate:React.FC<Props> = ({submitFunc, update, university}) => {

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
        const payload = {...values, type: university ? "UNIVERSITY": "SCHOOL"}
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
        <div className="pb-20">
            <div className="flex flex-col items-center px-12 pb-10 rounded-md shadow-sm max-w-2xl w-full mx-auto bg-white">
                <h2 className="title text-center">{update ? "Update" : "Register"} your {university ? "university": "school"}</h2>
                <p>Join our amazing team an enjoy amazing features</p>
                <form className="mt-8 flex flex-col gap-4 w-full" onSubmit={formik.handleSubmit}>
                    {fields}
                    {!update && <p className="text-xs mt-8">By clicking on the submit button bellow, you are accepting, <a href="#">privacy and policy</a>, and <a href="#">term of use</a>.</p>}
                    <Button className={update ? "mt-8" : undefined} loading={loading}>Register</Button>
                </form>
            </div>
        </div>
    )
}

export default SchoolCreateUpdate