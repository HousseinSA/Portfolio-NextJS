import {Animate} from "../Animate/Animate"
import {workProjectAnimation} from "../Animate/workAnimate"
import HeaderAnimate from "./Components/HeaderAnimate"
import ImageAnimate from "./Components/ImageAnimate"
import {motion} from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import budgetRegister from "../assets/budget-register.png"
import cinaInfo from "../assets/cina-info.png"
import ebbokStore from "../assets/ebook-sotre.png"
import googleDocs from "../assets/google-docs-clone.png"
import weatherViewer from "../assets/weather-viewer.png"
import Head from "next/head"
import SideNav from "./Components/SideNav"
import {useRouter} from "next/router"
import Header from "./Components/Header"
import {windowSize} from "../helpers/windowSize"
export default function Work() {
  const {pathname, locale} = useRouter()
  const {t: translate} = useTranslation("work")
  const width = windowSize()
  return (
    <Animate>
      {pathname !== "/" && <SideNav path={true} />}{" "}
      <Head>
        <title>{translate("work")}</title>
      </Head>
      {width < 765 && <Header />}
      <main>
        <div className="flex flex-col mx-4 justify-center min-h-H75 items-around">
          <div className="text-md max-w-md md:max-w-xl p-3">
            <HeaderAnimate>
              {locale == "ar" ? (
                <h1 className="nav_link text-right text-6xl md:text-7xl lg:text-8xl">
                  {translate("work")}
                </h1>
              ) : (
                <h1 className="nav_link text-6xl md:text-7xl lg:text-8xl">
                  {translate("work")}
                </h1>
              )}
            </HeaderAnimate>
            <span className="text-sm md:text-base ">
              {translate("workDisc")}
            </span>
          </div>
          <div className="flex gap-24 my-10 flex-col">
            <motion.div
              variants={workProjectAnimation}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.5}}
              className="flex justify-center md:justify-between flex-wrap md:flex-nowrap lg:gap-0 gap-14 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  Cina-info
                </h2>
                <p className="my-3 max-w-md text-sm md:text-base">
                  {translate("cina-info")}
                </p>
              </div>
              <ImageAnimate>
                <Link href={"https://cina-info.netlify.app"} target="_blank">
                  <div className=" shadow-lg max-w-xs lg:max-w-md">
                    <Image src={cinaInfo} alt="cina-info" />
                  </div>
                </Link>
              </ImageAnimate>
            </motion.div>
            <motion.div
              variants={workProjectAnimation}
              initial="hidden"
              viewport={{once: false, amount: 0.5}}
              whileInView={"show"}
              className="flex justify-center flex-wrap md:flex-nowrap md:justify-between gap-14 lg:gap-0 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  Ebook-Store
                </h2>
                <p className="my-3 max-w-md text-sm md:text-base">
                  {translate("ebook-store")}
                </p>
              </div>
              <ImageAnimate>
                <Link href={"https://ebook-shop.netlify.app"} target="_blank">
                  <div className=" shadow-lg max-w-xs lg:max-w-md">
                    <Image src={ebbokStore} alt="ebookStore" />
                  </div>
                </Link>
              </ImageAnimate>
            </motion.div>
            <motion.div
              variants={workProjectAnimation}
              initial="hidden"
              viewport={{once: false, amount: 0.5}}
              whileInView={"show"}
              className="flex justify-center flex-wrap md:flex-nowrap md:justify-between gap-14 lg:gap-0 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  Docs-editor
                </h2>
                <p className="my-3 max-w-md text-sm md:text-base">
                  {translate("docs-editor")}
                </p>
              </div>
              <ImageAnimate>
                <Link href={"https://docs-editor.netlify.app"} target="_blank">
                  <div className="shadow-lg max-w-xs lg:max-w-md">
                    <Image src={googleDocs} alt="docs" />
                  </div>
                </Link>
              </ImageAnimate>
            </motion.div>
            <motion.div
              variants={workProjectAnimation}
              initial="hidden"
              viewport={{once: false, amount: 0.5}}
              whileInView={"show"}
              className="flex justify-center flex-wrap md:flex-nowrap md:justify-between gap-14 lg:gap-0 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  Budget Manager
                </h2>
                <p className="my-3 max-w-md text-sm md:text-base">
                  {translate("budget-manager")}
                </p>
              </div>
              <ImageAnimate>
                <Link
                  href={"https://budget-register.netlify.app"}
                  target="_blank">
                  <div className="shadow-lg max-w-xs lg:max-w-md">
                    <Image src={budgetRegister} alt="budget register" />
                  </div>
                </Link>
              </ImageAnimate>
            </motion.div>
            <motion.div
              variants={workProjectAnimation}
              initial="hidden"
              viewport={{once: false, amount: 0.5}}
              whileInView={"show"}
              className="flex justify-center flex-wrap md:flex-nowrap md:justify-between gap-14 lg:gap-0 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  Weather-viewer
                </h2>
                <p className="my-3 max-w-md text-sm md:text-base">
                  {translate("weather-viewer")}
                </p>
              </div>
              <ImageAnimate>
                <Link
                  href={"https://theweather101.netlify.app"}
                  target="_blank">
                  <div className="shadow-lg max-w-xs lg:max-w-md">
                    <Image src={weatherViewer} alt="weather viewer" />
                  </div>
                </Link>
              </ImageAnimate>
            </motion.div>
          </div>
        </div>
      </main>
    </Animate>
  )
}
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import {useTranslation} from "react-i18next"

export async function getStaticProps({locale}) {
  return {
    props: {...(await serverSideTranslations(locale, ["work"]))},
  }
}
