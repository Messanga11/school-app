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

      <header>
        <img src="/images/mentor.png" alt="Mentor" className="main-image" />
        <main>
          <div className="header-body">
            <div className="container">
              <div>
                <h1 className="title">
                  Become a student
                </h1>
                <p>
                  Introducing the&nbsp;
                  <span>
                    Work Collection
                  </span>.
                  a line of minimalist bags designed for a&nbsp;
                  <u>
                    new generation specifically for the modern professional
                  </u>
                </p>
                <div
                  className="grid gap-4 grid-cols-1 mt-10"
                >
                </div>
                <ul className="pagination-mobile">
                  <li className="pag-active"></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="slider bg-black px-8 py-6 rounded-md bg-opacity-70">
                <div>

                  <div className="slider">
                    <div>
                      <p className="slider-count">
                        Register by selecting the exam you are passing
                      </p>
                      <div className="progress mb-4 mt-2">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <button className="flex whitespace-nowrap text-left text-white hover:text-[#e2c78c]"
                      onClick={() => router.push("/signup?exam=advancedCommercial")}>
                      GCE A Level Commercial &nbsp;
                      <Icon icon={"bytesize:arrow-right"} height={20} />
                    </button>
                    <button className="flex whitespace-nowrap text-left text-white hover:text-[#e2c78c]"
                      onClick={() => router.push("/signup?exam=advancedGrammar")}>
                      GCE A Level Grammar &nbsp;
                      <Icon icon={"bytesize:arrow-right"} height={20} />
                    </button>
                    <button className="flex whitespace-nowrap text-left text-white hover:text-[#e2c78c]"
                      onClick={() => router.push("/signup?exam=ordinaryCommercial")}>
                      GCE O Level Commercial &nbsp;
                      <Icon icon={"bytesize:arrow-right"} height={20} />
                    </button>
                    <button className="flex whitespace-nowrap text-left text-white hover:text-[#e2c78c]"
                      onClick={() => router.push("/signup?exam=ordinaryGrammar")}>
                      GCE O Level Grammar &nbsp;
                      <Icon icon={"bytesize:arrow-right"} height={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="container">
              <div>
                <div className="item">
                  <h4>EVENTS</h4>
                  <small>Pop-up @ Paul Messanga</small>
                  <small>Ekoumdoum - Sat, August 12 / 5-8PM</small>
                  <a href="#">Read More</a>
                </div>
                <div className="item item-centered">
                  <small>Pop-up @ Paul Messanga</small>
                  <small>TKC - Wed, June 15 / 5-8PM</small>
                </div>
              </div>
              <div>
                <img src="https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?cs=srgb&dl=pexels-pixabay-356065.jpg&fm=jpg" alt="img" className="thumbnail" />
                <div className="item">
                  <h4>Oxford University</h4>
                  <small>
                    Oxford wan't 11 cameroonian to lean in his rooms... &nbsp;
                    <span className="sub-title">
                      More informations
                    </span>, Click in more info below
                  </small>
                  <a href="#">More info</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </header>
      <div
        className="py-4 px-6 text-white bg-black text-center"
        style={{ margin: 0 }}
      >
        <p className="text-white text-sm">{t("page_home_school_is_reliable")}</p>
      </div>
      <main>
        <div className="value-section-home">
          <div className="container">
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
                <div key={text} className="value-card shadow-md rounded-md p-4 flex-grow">
                  {icon}
                  <h2>
                    <span>{t(title)}</span>
                  </h2>
                  <p className="text-base leading-relaxed">{t(text)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center py-20">
          <p className="title">
            {t("page_home_a_new_standard")}
          </p>
          <p>
            {t("page_home_control_over_the_way")}
          </p>
        </div>
        <div className="px-8 container-block">

        <div className="w-full bg-black rounded-md" style={{ paddingBottom: "45%" }}>
          {/* Video goes here */}
        </div>
        </div>
      </main>
      <div className="mt-10">
        <Footer />
      </div>
    </DefaultLayout>
  );
}

export default Home;
