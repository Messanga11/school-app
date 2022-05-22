import Image from "next/image";
import { useRouter } from "next/router"
import Link from "next/link";
import { useCustomFormik, useLoginChecker, useTranslation } from "../../utils/hooks";
import { NextPage } from "next";
import * as Yup from "yup"
import Button from "@/components/basics/Button";
import { loginEffect } from "@/store/effects/auth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ApplicationDispatch } from "@/store/types";
import { useRef, useState } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import { getUserInfosEffect } from '../../store/effects/auth';
import Container from '../../components/Container';

const SchoolLogin: NextPage = () => {

  // Hooks
  const router = useRouter()
  const t = useTranslation()
  const dispatch: ApplicationDispatch = useDispatch()

  // States
  const [loading, setLoading] = useState(false)
  // useLoginChecker()

  // Refs
  const submitBtnRef = useRef(null)

  // Form handler
  const { fields, formik } = useCustomFormik(
    [
      {
        initialValue: "",
        name: "email",
        placeholder: t("email"),
        type: "text",
        validation: Yup.string().email("Enter a valid email").required(t("required_field"))
      },
      {
        initialValue: "",
        name: "password",
        placeholder: t("password"),
        type: "password",
        validation: Yup.string().min(6, t("enter_at_least_six_chars")).required(t("required_field"))
      },
    ],
    (values: any) => {
      dispatch(loginEffect({
        payload: { ...values, type: "school" },
        successCb: () => {
          dispatch(getUserInfosEffect({
            setLoading,
            successCb: () => {
              router.push("/schools/administration")
            },
            failCb: () => {
              toast.error("Something went wrong!")
            }
          }))
        },
        failCb: (data: any) => {
          toast.error(data?.detail || "Something went wrong!")
        },
        setLoading: setLoading
      }))
    }
  )

  return (
    <DefaultLayout titleDesc="Login to your account" noWidthLimit school>
      <div className="container-block pt-0">
        <div className="space-y-6 xl:space-y-10">
          <div className="text-center">
            <h1 className="title">
              Please sign  up
            </h1>
            <p>Fill your informations to create a student account</p>
          </div>
          <form className="space-y-2 max-w-xl mx-auto pb-16" onSubmit={formik.handleSubmit}>
            {fields}
            <div className="py-8">
              <Button color="primary" className="w-full" loading={loading} type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default SchoolLogin;
