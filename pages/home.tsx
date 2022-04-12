import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useRouter } from "next/router";
import { useTranslation } from "../utils/hooks";
import Footer from "../components/Footer";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";

function Home() {
  
  const router = useRouter();
  const t = useTranslation();

  return (
    <DefaultLayout
      titleDesc="Welcome to the school next generation"
      noWidthLimit
    >
      <div className="bg-gradient-to-tr from-purple-800 to-pink-700">
        <div
          className="p-10 text-white max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h1 className="text-7xl font-bold mb-4">
                {t("page_home_an_online_shool")}
              </h1>
              <p className="text-xl leading-relaxed mt-4  text-gray-200">
                {t("page_home_an_online_shool_text")}
              </p>
            </div>
            <div>
              <div>
                <p className="text-xl font-bold mb-4 ml-2 text-gray-200">Become a student</p>
                <div
                  className="grid gap-4 grid-cols-2"
                >
                  <button className="intent font-bold h-16 flex justify-between text-left"
                  onClick={() => router.push("/signup?exam=advancedCommercial")}>
                    GCE A Level <br /> Commercial
                    <ArrowForwardIosRoundedIcon className="text-gray-700 ml-6" />
                  </button>
                  <button className="intent font-bold h-16 flex justify-between text-left"
                  onClick={() => router.push("/signup?exam=advancedGrammar")}>
                    GCE A Level <br /> Grammar
                    <ArrowForwardIosRoundedIcon className="text-gray-700 ml-6" />
                  </button>
                  <button className="intent font-bold h-16 flex justify-between text-left"
                  onClick={() => router.push("/signup?exam=ordinaryCommercial")}>
                    GCE O Level <br /> Commercial
                    <ArrowForwardIosRoundedIcon className="text-gray-700 ml-6" />
                  </button>
                  <button className="intent font-bold h-16 flex justify-between text-left"
                  onClick={() => router.push("/signup?exam=ordinaryGrammar")}>
                    GCE O Level <br /> Grammar
                    <ArrowForwardIosRoundedIcon className="text-gray-700 ml-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="gird-cols-2 pb-56 mt-8"
            style={{
              backgroundImage:
                "url(https://d1csarkz8obe9u.cloudfront.net/posterpreviews/maroon-university-enrollment-banner-design-template-ed350a837743449b01870b3e812a72d5_screen.jpg?ts=1566582825)",
            }}
          ></div>
        </div>
      </div>
      <div
        className="py-4 px-6 text-white bg-black text-center"
        style={{ margin: 0 }}
      >
        <p className="text-white">{t("page_home_school_is_reliable")}</p>
      </div>
      <main className="items-center mx-auto px-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          {[
            {
              title: "flexible",
              text: "page_home_flexible_text",
              icon: <Icon height={40} icon="mdi:hand-extended" />,
            },
            {
              title: "supportive",
              text: "page_home_supportive_text",
              icon: <Icon height={40} icon="bx:support" />,
            },
            {
              title: "affordable",
              text: "page_home_affordable_text",
              icon: <Icon height={40} icon="icon-park-outline:easy" />,
            },
          ].map(({ title, text, icon }) => (
            <div key={text} className="shadow-md rounded-md p-4 flex-grow bg-white">
              <h2 className="text-black text-2xl my-2 flex gap-4 items-center">
                {" "}
                {icon} <span>{t(title)}</span>
              </h2>
              <p className="text-xl leading-relaxed">{t(text)}</p>
            </div>
          ))}
        </div>

        <div className="text-center py-20">
          <h2 className="text-5xl font-bold text-black">
            {t("page_home_a_new_standard")}
          </h2>
          <p className="text-3xl font-semibold my-4">
            {t("page_home_control_over_the_way")}
          </p>
        </div>

        <div className="w-full bg-gray-300" style={{ paddingBottom: "45%" }}>
          {/* Video goes here */}
        </div>
      </main>
      <div className="mt-10">
        <Footer />
      </div>
    </DefaultLayout>
  );
}

export default Home;
