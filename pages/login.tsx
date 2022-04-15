import Image from "next/image";
import { useRouter } from "next/router"
import Link from "next/link";
import { useCustomFormik, useLoginChecker, useTranslation } from "../utils/hooks";
import { NextPage } from "next";
import * as Yup from "yup"
import Button from "@/components/basics/Button";
import { loginEffect } from "@/store/effects/auth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ApplicationDispatch } from "@/store/types";
import { useState } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import { getUserInfosEffect } from '../store/effects/auth';

const Home:NextPage = () => {

  // Hooks
  const router = useRouter()
  const t = useTranslation()
  const dispatch:ApplicationDispatch = useDispatch()

  // States
  const [loading, setLoading] = useState(false)
  useLoginChecker()

  // Form handler
  const { fields, formik } = useCustomFormik(
    [
      {
        initialValue: "",
        name: "email",
        placeholder: "email",
        type: "text",
        validation: Yup.string().email("Enter a valid email")
      },
      {
        initialValue: "",
        name: "password",
        placeholder: "password",
        type: "password",
        validation: Yup.string().min(6).typeError(t("enter_at_least_six_chars")).required(t("required_field"))
      },
    ],
    (values) => {
      dispatch(loginEffect({
        payload: values,
       successCb: () => {
         dispatch(getUserInfosEffect({
           setLoading,
           successCb: () => {
             router.push("/dashboard")
          },
          failCb: () => {
            toast.error("Something went wrong!")
          }
         }))
       },
       failCb: (data:any) => {
         toast.error(data?.detail || "Something went wrong!")
       },
       setLoading: setLoading
      }))
    }
  )

  return (
    <DefaultLayout titleDesc="Login to your account" noWidthLimit>
      <div className="white-label py-10 text-white bg-gradient-to-tr from-purple-800 to-pink-700" style={{margin: 0}}>
        <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
          <div className="space-y-6 xl:space-y-10">
            <div>
              <h1 className="text-3xl md:text-5xl text-white max-w-xl !leading-snug pl-4 xl:pl-0">
                Please Login
              </h1>
              <p className="text-gray-200">{t("login_text")}</p>
            </div>
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              {fields}
              <Button loading={loading} type="submit">Submit</Button>
            </form>
          </div>

          <div className="relative xl:absolute w-72 h-72 xl:w-[650px] xl:h-[650px] top-14 right-5">
            <Image className="object-cover" src="/images/exams.svg" layout="fill" priority alt="" />
          </div>
        </main>
      </div>
    </DefaultLayout>
  );
}

export default Home;
