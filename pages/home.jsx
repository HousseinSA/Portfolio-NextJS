import {Animate} from "../Animate/Animate"
import {hi, homeLogo} from "../Animate/HomeAnimate"
import {Twitter, Github, Linkedin, Instagram} from "react-bootstrap-icons"
import Nav from "./Components/Nav"
import {motion} from "framer-motion"
import Logo from "../assets/hs-low-resolution-logo-color-on-transparent-background.png"
import Link from "next/link"
import Image from "next/image"
import {useTranslation} from "react-i18next"
import {useRouter} from "next/router"
export default function Home() {
  const {locale} = useRouter()
  const {t: translate} = useTranslation("index", "mobileNav")
  return (
    <Animate>
      <main>
        <div className="flex justify-center items-center gap-2 min-h-H75 md:justify-around ">
          <div className=" lg:place-self-end">
            <div className="main-info">
              {locale === "ar" ? (
                <h1 className="text-5xl lg:text-6xl">
                  {translate("name")}
                  <motion.span
                    variants={hi}
                    animate="show"
                    initial="hidden"
                    className="inline-block text-mainColor">
                    ,{translate("hi")}
                  </motion.span>
                  <br></br> {translate("Myname")}
                </h1>
              ) : (
                <h1 className="text-5xl lg:text-6xl">
                  <motion.span
                    variants={hi}
                    animate="show"
                    initial="hidden"
                    className="inline-block text-mainColor">
                    {translate("hi")}
                  </motion.span>
                  , {translate("name")}
                  <br></br>
                  {translate("Myname")}
                </h1>
              )}
              {locale === "ar" ? (
                <span className="my-2 block text-right">
                  {translate("web")}
                </span>
              ) : (
                <span className="my-2">{translate("web")}</span>
              )}
              {locale === "ar" ? (
                <p className="text-right"> {translate("disc")}</p>
              ) : (
                <p> {translate("disc")}</p>
              )}
            </div>
            <div className="flex gap-2 items-center  justify-between">
              <div className="flex justify-center md:justify-start gap-2 my-4 items-center">
                <Link href={"https://github.com/housseinsa"} target="_blank">
                  <Github size={20} className="cursor-pointer" />
                </Link>
                <Link href={"https://github.com/housseinsa"} target="_blank">
                  <Twitter size={20} className="cursor-pointer " />
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/husseinsa/"}
                  target="_blank">
                  <Linkedin size={20} className=" cursor-pointer " />
                </Link>
                <Link
                  href={"https://www.instagram.com/houssein_11"}
                  target="_blank">
                  <Instagram size={20} className=" cursor-pointer " />
                </Link>
              </div>
              {locale === "fr" ? (
                <Link
                  target="_blank"
                  href={
                    "https://drive.google.com/file/d/1YfADIJ8rD7XH2Xidm5JPQxNz7A4Z2rR1/view?usp=sharing"
                  }>
                  <div className="bg-mainColor cursor-pointer px-4 py-3 hover:bg-hoverColor h-fit text-white  rounded">
                    {translate("resume")}
                  </div>
                </Link>
              ) : (
                <Link
                  target="_blank"
                  href={
                    "https://drive.google.com/file/d/1J6PxOrxvE_Q04kXgePFuOb1hY3sE2klm/view?usp=sharing"
                  }>
                  <div className="bg-mainColor cursor-pointer px-4 py-3 hover:bg-hoverColor h-fit text-white  rounded">
                    {translate("resume")}
                  </div>
                </Link>
              )}
            </div>
          </div>
          <motion.div
            variants={homeLogo}
            initial="hidden"
            animate="show"
            className="absolute md:hidden max-w-xs visible -z-10">
            <Image src={Logo} alt="logo" priority />
          </motion.div>
          <Nav />
        </div>
      </main>
    </Animate>
  )
}
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
export async function getStaticProps({locale}) {
  return {
    props: {...(await serverSideTranslations(locale, ["index", "mobileNav"]))},
  }
}
