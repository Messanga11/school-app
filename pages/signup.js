import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";
import { useRouter, useParams } from "next/router"

function Home({ providers }) {

  const router = useRouter()
  const logged = true
  const selectedExam = router.query?.exam || "ordinaryGeneral"

  return (
    <div className="space-y-10 relative">
      <header className="flex justify-around items-center py-4">
        <div className="relative w-36 h-10">
          <p className="text-black font-bold">LOGO</p>
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink Icon={ExploreIcon} text="University" />
            <HeaderLink Icon={ExploreIcon} text="School" />
          </div>

          {Object.values(providers || {}).map((provider) => (
            <div key={provider.name}>
              <div className="pl-4">
                {logged ? 
                  <button
                  className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5"
                  onClick={() => history.push("/dashboard")}
                >
                  Dashboard
                </button>
                  : <button
                  className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign in
                </button>}
              </div>
            </div>
          ))}
        </div>
      </header>

      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10">
          <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0">
            Please sign up
          </h1>
          <div className="space-y-4 pb-8">
              <div>
                    <p className="text-black font-bold">First name *</p>
                    <input type="text" className="intent outline-none w-full" />
              </div>
              <div>
                    <p className="text-black font-bold">Last name *</p>
                    <input type="text" className="intent outline-none w-full" />
              </div>
              <div>
                    <p className="text-black font-bold">User name *</p>
                    <input type="text" className="intent outline-none w-full" />
              </div>
              <div>
                    <p className="text-black font-bold">Email *</p>
                    <input type="text" className="intent outline-none w-full" />
              </div>
              <div>
                    <p className="text-black font-bold">Password *</p>
                    <input type="password" className="intent outline-none w-full" />
              </div>
              <div>
                    <p className="text-black font-bold">Select subjects</p>
                    <select className="intent px-1 w-full" name="" id="">
                      { subjects[selectedExam]?.map((subject, i) => (
                        <option key={`subject_select_${i}`} value="">{subject.title}</option>
                      )) }
                    </select>
              </div>
              <div>
                    <p className="text-black font-bold">Confirm password *</p>
                    <input type="password" className="intent outline-none w-full" />
              </div>
              <div>
                    <p className="text-black font-bold">Guardian phone number *</p>
                    <input type="text" className="intent outline-none w-full" />
              </div>
              <div>
                    <p className="text-black font-bold">Phone number</p>
                    <input type="text" className="intent outline-none w-full" />
              </div>
                <button
                  className="w-full text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5"
                  onClick={() => router.push("/login")}
                >
                  Sign in
                </button>
          </div>
        </div>

        <div className="relative xl:absolute w-32 h-32 xl:w-[650px] xl:h-[650px] top-14 right-5">
          <Image className="absolute w-full h-full object-contain" src="/images/illus2.svg" layout="fill" priority />
        </div>
      </main>
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
