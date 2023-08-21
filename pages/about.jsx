import {Animate} from "../Animate"
import {
  userImageAnimate,
  containerIcon,
  iconsAnimation,
} from "../Animate/aboutAnimate"
import HeaderAnimate from "./Components/HeaderAnimate"
import {motion} from "framer-motion"
import Image from "next/image"
import Head from "next/head"
import userImage from "../assets/IMG_20230225_231859.jpg"
import SideNav from "./Components/SideNav"
import Header from "./Components/Header"
import {windowSize} from "../helpers/windowSize"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import {useTranslation} from "react-i18next"
import {Translate} from "../helpers/Translate"
import {useEffect, useState} from "react"
export default function About() {
  const {t: translate} = useTranslation("about", "mobileNav")
  const width = windowSize()
  const [client, setClient] = useState(false)
  const {locale, pathname} = Translate()
  useEffect(() => {
    setClient(true)
  }, [])
  return (
    <Animate>
      {client && (
        <>
          <Head>
            <title>About Me</title>
          </Head>
          {width < 765 && <Header />}
          {pathname !== "/" && <SideNav path={true} />}
          <main>
            <div className="flex gap-2 justify-center flex-wrap lg:flex-nowrap min-h-H75 items-center ">
              <div className="text-md max-w-md md:max-w-xl p-3 ">
                <HeaderAnimate>
                  {locale === "ar" ? (
                    <h1 className="nav_link text-6xl md:text-7xl text-center md:text-right lg:text-8xl">
                      {translate("title")}
                    </h1>
                  ) : (
                    <h1 className="nav_link text-6xl md:text-7xl text-center md:text-left lg:text-8xl">
                      {translate("title")}
                    </h1>
                  )}
                </HeaderAnimate>
                {locale === "ar" ? (
                  <span className="about-text text-right text-sm md:text-base">
                    {translate("about")}
                  </span>
                ) : (
                  <span className="about-text text-sm md:text-base">
                    {translate("about")}
                  </span>
                )}
              </div>
              <motion.div
                variants={userImageAnimate}
                initial="hidden"
                whileInView={"show"}
                className="relative lg:block hidden right-0 md:-right-5 lg:-right-36 rounded max-w-xs md:max-w-sm my-2">
                <Image
                  src={userImage}
                  className="rounded shadow-xl"
                  alt="developer"
                />
              </motion.div>
            </div>
            <motion.div
              variants={containerIcon}
              initial="hidden"
              animate="show"
              className="flex justify-center flex-wrap gap-2 items-center">
              <motion.div
                variants={iconsAnimation}
                className=" w-16 h-16 flex items-center justify-center rounded-full bg-yellow-200">
                <i className="devicon-javascript-plain colored text-white text-4xl"></i>
              </motion.div>
              <motion.div
                variants={iconsAnimation}
                className=" w-16 h-16 flex items-center  justify-center rounded-full bg-red-300">
                <i className="devicon-html5-plain colored text-white text-4xl"></i>
              </motion.div>
              <motion.div
                variants={iconsAnimation}
                className="  w-16 h-16 flex items-center  justify-center rounded-full bg-blue-300">
                <i className="devicon-css3-plain colored text-white text-4xl"></i>
              </motion.div>
              <motion.div
                variants={iconsAnimation}
                className="  w-16 h-16 flex items-center justify-center rounded-full bg-green-200">
                <i className="devicon-react-plain colored text-white text-4xl"></i>
              </motion.div>
              <motion.div
                variants={iconsAnimation}
                className=" w-16 h-16 flex items-center  justify-center rounded-full bg-purple-300">
                <i className="devicon-sass-plain colored text-white text-4xl"></i>
              </motion.div>
              <motion.div
                variants={iconsAnimation}
                className=" w-16 h-16 flex items-center   justify-center rounded-full bg-indigo-300">
                <i className="devicon-redux-plain colored text-white text-4xl"></i>
              </motion.div>
              <motion.div
                variants={iconsAnimation}
                className="  w-16 h-16 flex items-center  justify-center rounded-full bg-pink-300">
                <i className="devicon-mongodb-plain colored text-white text-4xl"></i>
              </motion.div>
              <motion.div
                variants={iconsAnimation}
                className="  w-16 h-16 flex items-center  justify-center rounded-full bg-yellow-300">
                <i className="devicon-express-original-wordmark text-white text-4xl"></i>
              </motion.div>
              <motion.div
                variants={iconsAnimation}
                className=" w-16 h-16 flex items-center  justify-center rounded-full bg-blue-300">
                <i className="devicon-python-plain colored text-white text-4xl"></i>
              </motion.div>
              <motion.div
                variants={iconsAnimation}
                className=" w-16 h-16 flex items-center  justify-center rounded-full bg-green-300">
                <i className="devicon-tailwindcss-plain colored text-4xl"></i>
              </motion.div>
              <motion.div
                variants={iconsAnimation}
                className=" w-16 h-16 flex items-center  justify-center rounded-full bg-orange-300">
                <i className="devicon-git-plain colored text-4xl"></i>
              </motion.div>
              <motion.div
                variants={iconsAnimation}
                className=" w-16 h-16 flex items-center  justify-center rounded-full bg-yellow-200">
                <i className="devicon-firebase-plain-wordmark colored text-4xl"></i>
              </motion.div>
              <motion.div
                variants={iconsAnimation}
                className=" w-16 h-16 flex items-center  justify-center rounded-full bg-blue-200">
                <i className="devicon-nextjs-original-wordmark colored text-4xl"></i>
              </motion.div>
            </motion.div>
          </main>
        </>
      )}
    </Animate>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {...(await serverSideTranslations(locale, ["about", "mobileNav"]))},
  }
}
