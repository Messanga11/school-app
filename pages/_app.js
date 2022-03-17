import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { I18nProvider, LOCALES } from "../i18n/index";
import { Provider } from "react-redux";
import store from "../store/store"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <I18nProvider locale={LOCALES.ENGLISH}>
        <SessionProvider session={session}>
          <RecoilRoot>
            <ThemeProvider attribute="class">
              <Component {...pageProps} />
            </ThemeProvider>
          </RecoilRoot>
        </SessionProvider>
      </I18nProvider>
    </Provider>
  );
}

export default MyApp;
