import OpeningAnimation from "./Components/OpeningAnimation"
import SideNav from "./Components/SideNav"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./home"
import {motion} from "framer-motion"
import Head from "next/head"
import {animation} from "../Animate/HomeAnimate"

export default function App() {
  const {locales} = useRouter()
  return (
    <div className="APP">
      <Head>
        <title>HN Portfolio</title>
      </Head>
      <OpeningAnimation />
      <Header />
      <motion.div
        className="relative"
        variants={animation}
        initial={"hidden"}
        animate={"show"}>
        <SideNav />
        <Home />
      </motion.div>
      <Footer />
    </div>
  )
}

import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import {useRouter} from "next/router"
export async function getStaticProps({locale}) {
  return {
    props: {...(await serverSideTranslations(locale, ["index", "mobileNav"]))},
  }
}
