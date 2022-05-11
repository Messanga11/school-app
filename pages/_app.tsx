import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { I18nProvider, LOCALES } from "../i18n/index";
import {wrapper} from "../store/store"
import { NextPage } from "next";
import toast, { Toaster } from "react-hot-toast";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserInfosEffect } from '../store/effects/auth';

interface MyAppProps {
  Component: NextPage,
  pageProps: any
}

function MyApp({ Component, pageProps: { session, ...pageProps } }:MyAppProps) {

  const dispatch = useDispatch()

  useEffect(() => {
    const isUserLogged = !!localStorage.getItem("token")
    if(isUserLogged) {
      dispatch(getUserInfosEffect({
        setLoading: () => undefined,
        successCb: () => undefined,
        failCb: () => toast.error("Something went wrong!"),
      }))
    }
  }, [dispatch])
  

  return (
    <RecoilRoot>
        {/* @ts-ignore */}
        <I18nProvider locale={LOCALES.ENGLISH}>
            <Fragment>
              <Component {...pageProps} />
              <Toaster />
            </Fragment>
        </I18nProvider>
    </RecoilRoot>
  );
}

export default wrapper.withRedux(MyApp);
