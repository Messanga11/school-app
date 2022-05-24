import Image from "next/image";
import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router"
import Link from "next/link";
import { useTranslation } from "../../utils/hooks";

function Home({ providers }) {

  const router = useRouter()
  const t = useTranslation()

  return (
    <div className="space-y-10 relative">
      <div className="p-10 text-white bg-gradient-to-tr from-purple-800 to-pink-700 min-h-screen" style={{margin: 0}}>
        <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto justify-center">
          <div className="space-y-6 xl:space-y-10">
            <div>
              <div className="relative w-36 h-10 mx-auto">
                <p className="text-white font-bold text-center">LOGO</p>
              </div>
              <h1 className="text-3xl md:text-5xl text-white max-w-xl !leading-snug pl-4 xl:pl-0">
                Hello!, please login
              </h1>
              <p>{t("login_text")}</p>
            </div>
            <div className="space-y-4 pb-8">
                <div>
                      <p className="font-bold">Email/Phone number</p>
                      <input type="text" className="intent outline-none w-full" />
                </div>
                <div className="mb-5">
                      <p className="font-bold">Password</p>
                      <input type="text" className="intent outline-none w-full" />
                </div>
                  <button
                    className="w-full bg-blue-700 font-semibold rounded-full border text-white border-transparent px-5 py-1.5"
                    onClick={() => router.push("/administration")}
                  >
                    Log in
                  </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
