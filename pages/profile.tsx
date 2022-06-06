import { useRouter } from 'next/router'
import React, { useState } from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import { subjects, handleImages } from '../utils/common';
import Image from "next/image"
import { useCustomFormik, useTranslation } from '@/utils/hooks'
import * as Yup from "yup"
import { createStudentEffect, updateProfilePicEffect, updateStudentEffect } from '@/store/effects'
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationDispatch } from '@/store/types'
import toast from 'react-hot-toast'
import { Icon } from '@iconify/react'
import Button from '@/components/basics/Button'
import { ApplicationState } from '../store/types/index';
import { getUserInfosEffect } from '../store/effects/auth';
import DefaultImageComponent from '../components/DefaultImageComponent';
import { uploadFormDataWithFile } from '../utils/hooks';
import { studentUrls } from '@/services/urls';
import Container from '../components/Container';

const Profile = () => {

    // Store
    const { auth: { userInfos } } = useSelector((state:ApplicationState) => state)
  
    const [selectedExam, setSelectedExam] = useState(null)
    const router = useRouter()
    const t = useTranslation()

      const [loading, setLoading] = useState<boolean>(false)
      const [file, setFile] = useState<any>(null)
      const [uploading, setUploading] = useState<boolean>(false)
      const [profileBase64, setProfileBase64] = useState<string>("")

      const dispatch:ApplicationDispatch = useDispatch()

    const {fields, formik} = useCustomFormik([
      {
        initialValue: userInfos?.first_name || "",
        name: "first_name",
        placeholder: t("first_name"),
        validation: Yup.string().required(t("required_field"))
      },
      {
        initialValue:  userInfos?.last_name || "",
        name: "last_name",
        placeholder: t("last_name"),
        validation: Yup.string().required(t("required_field"))
      },
      {
        initialValue:  userInfos?.user_name || "",
        name: "user_name",
        placeholder: t("user_name"),
        validation: Yup.string().min(4).typeError(t("enter_at_least_four_chars")).required(t("required_field"))
      },
      {
        initialValue:  userInfos?.email || "",
        name: "email",
        placeholder: t("email"),
        validation: Yup.string().email(t("enter_a_valid_email")).required(t("required_field"))
      },
      {
        initialValue: "",
        type: "password",
        name: "password",
        placeholder: t("password"),
        validation: Yup.string().min(6).typeError(t("enter_at_least_six_chars")).required(t("required_field"))
      },
      // {
      //   initialValue: "",
      //   name: "selected_exam",
      //   type: "select",
      //   options:userInfos?.selectedSubjects?.map(item => ({
      //     label: item?.title,
      //     value: item?.title
      //   })) || [],
      //   placeholder: t("select_subject"),
      //   validation: Yup.string()
      // },
      {
        initialValue: "",
        name: "confirm_password",
        type: "password",
        placeholder: t("confirm_password"),
        validation: Yup.string().required(t("required_field"))
      },
      {
        initialValue:  userInfos?.guardian_phone_number || "",
        name: "guardian_phone_number",
        type: "number",
        placeholder: t("guardian_phone_number"),
        validation: Yup.string().required(t("required_field"))
      },
      {
        initialValue:  userInfos?.phone_number || "",
        name: "phone_number",
        type: "number",
        placeholder: t("phone_number"),
        validation: Yup.string().required(t("required_field"))
      },
    ],
    (values) => {
      const payload = {...values}
      Reflect.deleteProperty(payload, "confirm_password")
      dispatch(updateStudentEffect({
        payload,
        setLoading: setLoading,
        successCb: () => {
          dispatch(getUserInfosEffect({
            setLoading,
            successCb: () => {
              toast.success("Your account have been successfully updated.")
           },
           failCb: () => {
             toast.error("Something went wrong!")
           }
          }))
        },
        failCb: () => {
          toast.error("Something went wrong")
        },
      }))
    })

    // Functions
    const uploadImage = () => {
      if(!file) {
        toast.error("Image file needed")
      }
      uploadFormDataWithFile({
        url: studentUrls.UPDATE_PROFILE_PIC,
        payload: {
          file
        },
        requireAuth: true,
        setLoading: setUploading,
        successCb: () => toast.success("Profile picture updated"),
        failCb: () => toast.error("Something went wrong!")
      })
    }

  return (
    <DashboardLayout title="Profile">
      <Container>
        <div>
              <p className='mb-2'>Actual profile picture
              </p>

              <div className='flex flex-wrap gap-8'>
                <div className='w-44 flex-shrink-0'>
                  <div className='w-full h-44 rounded-md overflow-hidden shadow-sm'>
                    {profileBase64 || userInfos?.image_url ? (
                      <img className='w-full h-full object-cover' src={profileBase64 || userInfos?.image_url} alt="" />
                    )
                    : (
                      <DefaultImageComponent />
                    )}
                  </div>
                  <input id='profile-picture' className='hidden' type="file" onChange={(e) => {
                    setFile(e.target.files?.[0])
                    handleImages(e, (data:string) => setProfileBase64(data))
                  }} />
                  <Button className='w-full mt-4'><label className='cursor-pointer' htmlFor="profile-picture">{profileBase64 || userInfos?.image_url ? "Change this image" : "Add an image"}</label></Button>
                  {profileBase64 && (
                    <Button loading={uploading} className='mt-2 w-full' color="secondary" onClick={uploadImage}>Upload</Button>
                  )}
                </div>

                <form onSubmit={formik.handleSubmit} className='grid grid-cols-2 gap-4 flex-grow p-8 bg-[#fdfdfd] rounded-md shadow-sm'>
                  <div className='col-span-2'>
                    <h2 className='text-black'>Update informations about your profile</h2>
                    <p>You can change all informations about your profile here</p>
                  </div>
                      {fields}

                <Button
                      type="submit"
                      className='col-span-2 mt-8'
                >
                      Save
                </Button>
                </form>
              </div>
        </div>
      </Container>
    </DashboardLayout>
  )
}

export default Profile