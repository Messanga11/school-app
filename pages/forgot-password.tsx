import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router"
import Link from "next/link";
import { useTranslation } from "../utils/hooks";

function Home({ providers }) {

  const router = useRouter()
  const t = useTranslation()

  return (
    <div className="space-y-10 relative">
      <Head>
        <title>LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-around items-center py-4">
        <div className="relative w-36 h-10">
          <p className="text-white font-bold">LOGO</p>
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink Icon={ExploreIcon} text="University" />
            <HeaderLink Icon={ExploreIcon} text="School" />
          </div>
        </div>
      </header>

      <div className="p-10 text-white bg-gradient-to-tr from-purple-800 to-pink-700" style={{margin: 0}}>
        <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
          <div className="space-y-6 xl:space-y-10">
            <div>
              <h1 className="text-3xl md:text-5xl text-white max-w-xl !leading-snug pl-4 xl:pl-0">
                Recover password
              </h1>
              <p>{t("a_code_was_sent")}</p>
            </div>
            <div className="space-y-4 pb-8">
                <div>
                      <p className="font-bold">Email/Phone number</p>
                      <input type="text" className="intent outline-none w-full" />
                </div>
                {false && <div>
                      <p className="font-bold">code</p>
                      <input type="text" className="intent outline-none w-full" />
                </div>}
                  <button
                    className="w-full bg-blue-700 font-semibold rounded-full border text-white border-transparent px-5 py-1.5"
                    onClick={() => router.push("/login")}
                  >
                    Send
                  </button>
            </div>
          </div>

          <div className="relative xl:absolute w-72 h-72 xl:w-[650px] xl:h-[650px] top-14 right-5">
            <Image src="/images/exams.svg" layout="fill" priority />
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
