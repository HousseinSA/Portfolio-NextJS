import Link from "next/link"
import {Animate} from "../Animate/Animate"
import Head from "next/head"
import {HeaderAnimate} from "./Components/HeaderAnimate"
import {useRouter} from "next/router"
import {SideNav} from "./Components"
import {Header} from "./Components"
import {useTranslation} from "next-i18next"
import {windowSize} from "../helpers/windowSize"
export default function Contact() {
  const width = windowSize()
  const route = useRouter()
  const {locale}=useRouter()
  const {t: translate} = useTranslation("connect")
  return (
    <Animate>
      <Head>
        <title>{translate("connect")}</title>
      </Head>
      {route.pathname !== "/" && <SideNav path={true} />}{" "}
      {width < 765 && <Header />}
      <main>
        <div className="gap-2 mx-4 min-h-H75 justify-between flex  ">
          <div className="place-self-center">
            <HeaderAnimate>
            {locale == "ar"? <h1 className=" nav_link text-6xl text-right md:text-7xl lg:text-8xl">
               
               {translate("connect")}
             </h1>: <h1 className=" nav_link text-6xl md:text-7xl lg:text-8xl">
               
               {translate("connect")}
             </h1>}
             
            </HeaderAnimate>
            <div className="max-w-md my-2 text-sm md:text-base">
              <p>{translate("disc")}</p>
              <span className="underline hover:line-through text-mainColor inline-block my-2  mr-2">
                <Link href={"mailto:nejihoussein1@gmail.com"}>
                  {translate("mail")}
                </Link>
              </span>
              <span className="underline hover:line-through text-mainColor inline-block my-2  mr-2">
                <Link href={"https://linkden.com/in/housseinsa"}>LinkedIn</Link>
              </span>
            </div>
          </div>
        </div>
      </main>
    </Animate>
  )
}
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
export async function getStaticProps({locale}) {
  return {
    props: {...(await serverSideTranslations(locale, ["connect"]))},
  }
}
