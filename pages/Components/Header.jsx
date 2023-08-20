import Link from "next/link"
import Logo from "../../assets/hs-low-resolution-logo-color-on-transparent-background.png"
import {useEffect, useState} from "react"
import Image from "next/image"
import {useRouter} from "next/router"
import {useTranslation} from "react-i18next"
import ChangeLanguage from "./changeLanguage"
// import {serverSideTranslations} from "next-i18next/serverSideTranslations"
export const Header = () => {
  const {t: translate} = useTranslation("mobileNav")
  const [open, setOpen] = useState(false)
  const {pathname} = useRouter()
  const [client, setClient] = useState(false)
  const handelToggle = () => {
    setOpen(!open)
  }
  useEffect(() => {
    setClient(true)
  }, [])
  return (
    <>
      <header className="m-auto">
        {client && (
          <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <Link href="/" className="flex items-center">
                <Image src={Logo} priority className="w-10" alt="Logo" />
              </Link>
              <div className="flex items-center">
                <ChangeLanguage />
                <button
                  data-collapse-toggle="navbar-hamburger"
                  type="button"
                  className=" md:hidden inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 "
                  aria-controls="navbar-hamburger"
                  onClick={handelToggle}
                  aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              className={`${
                open ? "" : "hidden"
              } m-4  w-full" id="navbar-hamburger`}>
              <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 ">
                {pathname === "/" ? null : (
                  <li onClick={handelToggle}>
                    <Link
                      href="/"
                      className="block py-2 pl-3 text-gray-900 pr-4 rounded hover:bg-gray-700 hover:text-white  ">
                      {translate("home")}
                    </Link>
                  </li>
                )}
                <li onClick={handelToggle}>
                  <Link
                    href="/about"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-700  hover:text-white">
                    {translate("about")}
                  </Link>
                </li>
                <li onClick={handelToggle}>
                  <Link
                    href="/work"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-700 hover:text-white ">
                    {translate("work")}
                  </Link>
                </li>
                <li onClick={handelToggle}>
                  <Link
                    href="/contact"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-700 hover:text-white">
                    {translate("connect")}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
// export async function getStaticProps({locale}) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, [
//         "index",
//         "about",
//         "mobileNav",
//       ])),
//     },
//   }
// }
