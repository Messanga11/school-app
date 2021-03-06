import React from "react"
import Image from "next/image";
import { useRouter } from "next/router"
import Link from "next/link";
import { useCustomFormik, useLoginChecker, useTranslation } from "@/utils/hooks";
import { NextPage } from "next";
import * as Yup from "yup"
import Button from "@/components/basics/Button";
import { loginEffect } from "@/store/effects/auth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ApplicationDispatch } from "@/store/types";
import { useRef, useState } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import { getUserInfosEffect } from '@/store/effects/auth';
import Container from '@/components/Container';

const Login:NextPage = () => {

  // Hooks
  const router = useRouter()
  const t = useTranslation()
  const dispatch:ApplicationDispatch = useDispatch()

  // States
  const [loading, setLoading] = useState(false)
  useLoginChecker()

  // Refs
  const submitBtnRef = useRef(null)

  // Form handler
  const { fields, formik } = useCustomFormik(
    [
      {
        initialValue: "",
        name: "code",
        placeholder: t("code"),
        type: "text",
        validation: Yup.string().required(t("required_field"))
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
    <DefaultLayout titleDesc="Enter the validation code" noWidthLimit university>
      <div className="bg-dotted">
        <Container>
          <div className="flex max-w-6xl mx-auto bg-white rounded-md overflow-hidden shadow-xl" style={{maxHeight: 700, height: "calc(100vh - 100px)"}}>
            <div className="bg-blue-500 flex-shrink-0 p-8 flex justify-center items-center flex-col w-1/2">
                <div className="w-4/5 h-full">
                  <h2 className="text-white text-3xl mb-8">We are waiting for you in the other side!</h2>
                  <div className="h-2/3 w-full bg-white bg-opacity-50 rounded-md flex justify-center items-center">
                    <img className="rounded-md object-cover object-center" style={{width: "95%", height: "95%"}} src="/images/log-in-illustration.jpg" alt="" />
                  </div>
                </div>
            </div>
            <div className="w-1/2 overflow-y-auto flex-shrink-0 flex flex-col">
              <div className="space-y-6 xl:space-y-10 flex flex-col justify-between h-full px-12 py-8">
                <div>
                  <h1 className="text-xl md:text-3xl !leading-snug pl-4 xl:pl-0 font-bold">
                    Please login
                  </h1>
                  <p>We sent you an validation code via email. Enter it bellow.</p>
                </div>
                <form className="space-y-4" onSubmit={formik.handleSubmit}>
                {fields}
                <div className="py-8">
                <button ref={submitBtnRef} className="hidden w-full" type="submit">Submit</button>
                Did you forgot your password? <Link href={"/recover-password"}>click here</Link>
                </div>
                </form>
                <Button onClick={() => {
                  // @ts-ignore
                  submitBtnRef.current?.click()
                  }} loading={loading}>Submit</Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </DefaultLayout>
  );
}

export default Login;
