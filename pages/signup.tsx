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
import Container from '../components/Container';

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
      <div className="bg-dotted">
        <Container>
          <div className="flex justify-between max-w-6xl mx-auto bg-white rounded-xl overflow-hidden shadow-xl" style={{maxHeight: 700, height: "calc(100vh - 150px)"}}>
            <div className="bg-purple-500 flex-shrink-0 p-8 flex justify-center items-center flex-col w-1/2">
                <div className="w-4/5 h-full">
                  <h2 className="text-white text-3xl mb-8">Register an join our amazing team of students!</h2>
                  <div className="h-2/3 w-full bg-white bg-opacity-50 rounded-xl flex justify-center items-center">
                    <img className="rounded-xl object-cover object-left-bottom" style={{width: "95%", height: "95%"}} src="/images/sign-in-illustration.jpg" alt="" />
                  </div>
                </div>
            </div>
            <div className="p-8 w-1/2 overflow-y-auto flex-shrink-0">
              <div className="space-y-6 xl:space-y-10">
                <div>
                  <h1 className="text-xl md:text-3xl !leading-snug pl-4 xl:pl-0 font-bold">
                    Please sign  up
                  </h1>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <form className="space-y-4" onSubmit={formik.handleSubmit}>
                {fields}
                <div className="py-8">
                <Button color="primary" className="w-full" loading={loading} type="submit">Submit</Button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </DefaultLayout>
  );
}

export default SignUp;
