import React, { useState } from "react"
import { ApplicationState } from "@/store/types"
import { useDispatch, useSelector } from "react-redux"
import DefaultLayout from "@/layouts/DefaultLayout"
import Container from '@/components/Container';
import { useCustomFormik } from '@/utils/hooks';
import Button from "@/components/basics/Button";
import * as Yup from "yup"
import { updateSchoolEffect } from '@/store/effects/school';
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { regionOptions } from "@/utils/common";
import SchoolCreateUpdate from "@/components/SchoolCreateUpdate";
import DashboardLayout from "@/layouts/DashboardLayout";

interface Props {
}

const UpdateASchool:React.FC<Props> = () => {

    // Hooks
    const dispatch = useDispatch()
    
    // Function
    const save = (payload:any, setLoading:React.Dispatch<React.SetStateAction<boolean>>) => {
        dispatch(updateSchoolEffect(
            {
                failCb: (data:any) => {
                    toast.error(typeof data?.detail === "string" ? data?.detail : "Unable to update your school")
                },
                successCb: () => {
                    toast.success("Your school has been successfully updated. Plesae login to access your dashboard.")
                },
                setLoading,
                payload
            }
        ))
    }

    return (
        <DashboardLayout university admin>
            <SchoolCreateUpdate university update submitFunc={save} />
        </DashboardLayout>
    )
}

export default UpdateASchool