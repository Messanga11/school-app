import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import { useRouter } from "next/router"
import { subjects, genders } from "@/utils/common"
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

const SignUp: NextPage = (): JSX.Element => {

  const t = useTranslation()
  const dispatch: ApplicationDispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const selectedExam: ("ordinaryGrammar" | "ordinaryCommercial" | "advancedGrammar" | "advancedCommercial") = !!router.query?.exam
    ? String(router.query?.exam) as ("ordinaryGrammar" | "ordinaryCommercial" | "advancedGrammar" | "advancedCommercial")
    : "ordinaryGrammar"

  const validateConfirmPassword = (values: any) => {



    let error = "";
    if (values.password && values.confirm_password) {
      if (values.password !== values.confirm_password) {
        error = t("passwords_not_matches");
      }
    }
    return error;
  };

  const { fields, formik } = useCustomFormik([
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
      options: subjects[selectedExam]?.map(item => ({
        label: item?.title,
        value: item?.title
      })) || [],
      placeholder: t("select_subject"),
      validation: Yup.string()
    },
    {
      initialValue: "",
      name: "gender",
      type: "select",
      isMulti: false,
      options: genders?.map(item => ({
        label: item?.title,
        value: item?.title
      })) || [],
      placeholder: "Gender",
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
    (values:any) => {
      const payload = { ...values, exam: selectedExam, gender: JSON.parse(values['gender'])?.value }
      Reflect.deleteProperty(payload, "confirm_password")
      dispatch(createStudentEffect({
        payload,
        setLoading: setLoading,
        successCb: () => {
          router.push("/login")
          toast.success("Your account have been successfully created. Please login now")
        },
        failCb: (data:any) => {
          toast.error(typeof data?.detail === "string" ? data?.detail : "Something went wrong")
        },
      }))
    })

  return (
    <DefaultLayout titleDesc="Sign up to the platform" noWidthLimit>
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
              <p className="text-xs mb-2">By clicking on the submit button bellow, you are accepting, <a href="#">privacy and policy</a>, and <a href="#">term of use</a>.</p>
              <Button color="primary" className="w-full" loading={loading} type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default SignUp;
