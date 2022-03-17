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
import { useTranslation } from "../utils/hooks";
import Footer from "../components/Footer";
import { Icon } from "@iconify/react";

function Home({ providers }) {

  const logged = true

  const router = useRouter()
  const t = useTranslation()

  return (
    <div className="space-y-10 relative text-black bg-white">
      <Head>
        <title>Internet school</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between items-center py-4 px-10 shadow-xl bg-gray-100">
        <div className="relative h-10">
          <p className="text-black font-bold">LOGO</p>
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink Icon={ExploreIcon} text="University" />
            <HeaderLink Icon={GroupIcon} text="School" />
            {/* <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
            <HeaderLink Icon={BusinessCenterIcon} text="Jobs" /> */}
          </div>

          <div className="pl-4">
                {logged ?
                <button
                  className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5"
                  onClick={() => router.push("/dashboard")}
                >
                  Dashboard
              </button>
                :<button
                  className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5"
                  onClick={() => router.push("/login")}
                >
                  Log in
                </button>}
              </div>
        </div>
      </header>

       <div className="p-10 text-white bg-gradient-to-tr from-purple-800 to-pink-700" style={{margin: 0}}>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
                <h1 className="text-7xl font-bold mb-4">{t("page_home_an_online_shool")}</h1>
                <p className="text-xl leading-relaxed mt-4">{t("page_home_an_online_shool_text")}</p>
            </div>
            <div>
              <div>
                <p className="text-xl font-bold mb-4 ml-2">Become a student</p>
                <div className="grid gap-4 grid-cols-2">
                  <button className="intent font-bold h-16 text-center flex justify-between items-center">
                    GCE A Level <br /> Commercial
                    <ArrowForwardIosRoundedIcon className="text-gray-700 ml-6" />
                  </button>
                  <button className="intent font-bold h-16 text-center flex justify-between items-center">
                    GCE A Level <br /> Commercial
                    <ArrowForwardIosRoundedIcon className="text-gray-700 ml-6" />
                  </button>
                  <button className="intent font-bold h-16 text-center flex justify-between items-center">
                    GCE A Level <br /> Commercial
                    <ArrowForwardIosRoundedIcon className="text-gray-700 ml-6" />
                  </button>
                  <button className="intent font-bold h-16 text-center flex justify-between items-center">
                    GCE A Level <br /> Commercial
                    <ArrowForwardIosRoundedIcon className="text-gray-700 ml-6" />
                  </button>
                </div>
              </div>
           </div>
         </div>
         <div className="gird-cols-2 pb-56 mt-8" style={{backgroundImage: "url(https://d1csarkz8obe9u.cloudfront.net/posterpreviews/maroon-university-enrollment-banner-design-template-ed350a837743449b01870b3e812a72d5_screen.jpg?ts=1566582825)"}}></div>
       </div>
       <div className="py-4 px-6 text-white bg-black text-center" style={{margin: 0}}>
            <p>{t("page_home_school_is_reliable")}</p>
       </div>
      <main className="items-center mx-auto px-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          {[
            {
              title: "flexible",
              text: "page_home_flexible_text",
              icon: <Icon height={40} icon="mdi:hand-extended" />
            },
            {
              title: "supportive",
              text: "page_home_supportive_text",
              icon: <Icon height={40} icon="bx:support" />
            },
            {
              title: "affordable",
              text: "page_home_affordable_text",
              icon: <Icon height={40} icon="icon-park-outline:easy" />
            },
          ].map(({title, text, icon}) => (<div key={text} className="shadow-md rounded-md p-4 flex-grow">
            <h2 className="font-black text-2xl my-2 flex gap-4 items-center"> {icon} <span>{t(title)}</span></h2>
            <p className="text-xl leading-relaxed">{t(text)}</p>
          </div>
          ))}
        </div>

        <div className="text-center py-20">
          <h2 className="text-5xl font-black">{t("page_home_a_new_standard")}</h2>
          <p className="text-3xl font-semibold my-4">{t("page_home_control_over_the_way")}</p>
        </div>

        <div className="w-full bg-gray-300" style={{paddingBottom: "45%"}}>
            {/* Video goes here */}
        </div>

      </main>
      <div className="mt-10">
        <Footer />
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
