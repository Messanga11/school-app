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

  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const source = new EventSource('http://localhost:5301/stream-logs')
    source.onmessage = (e) => {
      setData(state => [...state, e.data])
      console.log(e.data)
    }
  }, [])
  

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
                <h1 className="text-5xl font-semibold mb-8">
                {t("page_home_an_online_shool")}
                </h1>
                <p>
                {t("page_home_an_online_shool_text")}
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
              <div className="slider px-8 py-6 rounded-md bg-black/20">
                <div>

                  <div className="slider">
                    <div>
                      <p className="text-white font-semibold text-3xl">
                        Become a student
                      </p>
                      <p className="text-gray-100">Select a the exam you are passing to register</p>
                      <div className="progress mb-4 mt-2">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="block h-20 bg-white px-4 py-2 rounded-md"
                      onClick={() => router.push("/signup?exam=advancedCommercial")}>
                      GCE A Level Commercial
                    </button>
                    <button className="block h-20 bg-white px-4 py-2 rounded-md"
                      onClick={() => router.push("/signup?exam=advancedGrammar")}>
                      GCE A Level Grammar
                    </button>
                    <button className="block h-20 bg-white px-4 py-2 rounded-md"
                      onClick={() => router.push("/signup?exam=ordinaryCommercial")}>
                      GCE O Level Commercial
                    </button>
                    <button className="block h-20 bg-white px-4 py-2 rounded-md"
                      onClick={() => router.push("/signup?exam=ordinaryGrammar")}>
                      GCE O Level Grammar
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
                    Oxford wan&apos;t 11 cameroonian to lean in his rooms... &nbsp;
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
                <div key={text} className="value-card shadow-sm rounded-md p-4 flex-grow">
                  {icon}
                  <h2 className="mt-6 mb-4">
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

        <div className="w-full bg-white rounded-md" style={{ paddingBottom: "45%" }}>
          {/* Video goes here */}
          <video width="1200" controls muted>
            <source src="http://localhost:5301/video" type="video/mp4" />
          </video>
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
