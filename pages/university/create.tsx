import React, { useState } from "react"
import { ApplicationState } from "@/store/types"
import { useDispatch, useSelector } from "react-redux"
import DefaultLayout from "@/layouts/DefaultLayout"
import Container from '@/components/Container';
import { useCustomFormik } from '../../utils/hooks';
import Button from "@/components/basics/Button";
import * as Yup from "yup"
import { createSchoolEffect } from '../../store/effects/school';
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { regionOptions } from "@/utils/common";
import SchoolCreateUpdate from "@/components/SchoolCreateUpdate";

interface Props {
}

const CreateASchool:React.FC<Props> = () => {

    // Hooks
    const dispatch = useDispatch()
    const router = useRouter()
    
    // Function
    const save = (payload:any, setLoading:React.Dispatch<React.SetStateAction<boolean>>) => {
        dispatch(createSchoolEffect(
            {
                failCb: () => {
                    toast.error("Unable to create your university")
                },
                successCb: () => {
                    toast.success("Your school has been successfully created. Please login to access your dashboard.")
                    router.push("/university/login")
                },
                setLoading,
                payload
            }
        ))
    }

    return (
        <DefaultLayout university>
            <SchoolCreateUpdate university submitFunc={save} />
        </DefaultLayout>
    )
}

export default CreateASchool