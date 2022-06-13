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

const BecomeAVIP: NextPage = (): JSX.Element => {

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
      name: "phone_number",
      placeholder: "OM or MOMO phonenumber",
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
              Become a VIP student
            </h1>
            <p>Unlock unlimited content on the platform</p>
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

export default BecomeAVIP;
