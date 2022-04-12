import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import { useRouter } from "next/router"
import { subjects } from "@/utils/common"
import { NextPage } from "next";
import { useCustomFormik, useTranslation } from "@/utils/hooks";
import * as Yup from "yup"
import Button from "@/components/basics/Button";
import { ApplicationDispatch } from "@/store/types";
import { useDispatch } from "react-redux";
import { createStudentEffect } from "@/store/effects";
import toast from "react-hot-toast";
import { useState } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";

const SignUp:NextPage = ():JSX.Element => {

  const t = useTranslation()
  const dispatch:ApplicationDispatch = useDispatch() 

  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const selectedExam:("ordinaryGrammar" | "ordinaryCommercial" | "advancedGrammar" | "advancedCommercial") = !!router.query?.exam 
                                ? String(router.query?.exam) as ("ordinaryGrammar" | "ordinaryCommercial" | "advancedGrammar" | "advancedCommercial")
                                : "ordinaryGrammar"

  const validateConfirmPassword = (values:any) => {

    

    let error = "";
    if (values.password && values.confirm_password) {
      if (values.password !== values.confirm_password) {
        error = t("passwords_not_matches");
      }
    }
    return error;
  };

  const {fields, formik} = useCustomFormik([
    {
      initialValue: "",
      name: "first_name",
      placeholder: t("first_name"),
      validation: Yup.string().required(t("required_field"))
    },
    {
      initialValue: "",
      name: "last_name",
      placeholder: t("last_name"),
      validation: Yup.string().required(t("required_field"))
    },
    {
      initialValue: "",
      name: "user_name",
      placeholder: t("user_name"),
      validation: Yup.string().min(4).typeError(t("enter_at_least_four_chars")).required(t("required_field"))
    },
    {
      initialValue: "",
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
    {
      initialValue: "",
      name: "confirm_password",
      type: "password",
      placeholder: t("confirm_password"),
      validation: Yup.string().required(t("required_field"))
    },
    {
      initialValue: "",
      name: "selected_exam",
      type: "select",
      isMulti: true,
      options:subjects[selectedExam]?.map(item => ({
        label: item?.title,
        value: item?.title
      })) || [],
      placeholder: t("select_subject"),
      validation: Yup.string()
    },
    {
      initialValue: "",
      name: "guardian_phone_number",
      type: "number",
      placeholder: t("guardian_phone_number"),
      validation: Yup.string().required(t("required_field"))
    },
    {
      initialValue: "",
      name: "phone_number",
      type: "number",
      placeholder: t("phone_number"),
      validation: Yup.string().required(t("required_field"))
    },
  ],
  (values) => {
    const payload = {...values}
    Reflect.deleteProperty(payload, "confirm_password")
    dispatch(createStudentEffect({
      payload,
      setLoading: setLoading,
      successCb: () => {
        router.push("/login")
        toast.success("Your account have been successfully created. Please login now")
      },
      failCb: () => {
        toast.error("Something went wrong")
      },
    }))
  })

  return (
    <DefaultLayout titleDesc="Sign up to the platform" noWidthLimit>
      <div className="white-label  bg-gradient-to-tr from-purple-800 to-pink-700">
        <div className="flex gap-5 justify-between px-10 max-w-6xl mx-auto">
          <main className="flex-grow mt-16 max-w-xl">
            <div className="space-y-6 xl:space-y-10">
              <div>
                <h1 className="text-3xl md:text-5xl !leading-snug pl-4 xl:pl-0 text-white">
                  Please sign  up
                </h1>
                <p className="text-gray-200">Lorem ipsum dolor sit amet</p>
              </div>
              <form className="space-y-4" onSubmit={formik.handleSubmit}>
              {fields}
              <div className="py-8">
              <Button className="w-full" loading={loading} type="submit">Submit</Button>
              </div>
              </form>
            </div>
          </main>
          <div className="flex-shrink-0">
            <img className="w-full h-full object-contain" src="/images/illus2.svg" alt="" />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default SignUp;
