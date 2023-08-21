import Link from "next/link"
import {motion} from "framer-motion"
import {useTranslation} from "react-i18next"
export default function Nav () {
  const {t: translate} = useTranslation("mobileNav")
  const hoverAnimate = {
    fontStyle: "italic",
    x: 5,
    transition: {type: "spring", ease: "linear"},
  }
  return (
    <nav className="md:block hidden">
      <div className="nav_link color text-7xl lg:text-9xl flex items-center justify-center  flex-col">
        <motion.div whileHover={hoverAnimate}>
          <Link href={"/work"}>{translate("work")}</Link>
        </motion.div>
        <motion.div whileHover={hoverAnimate}>
          <Link href={"/about"}>{translate("about")}</Link>
        </motion.div>
        <motion.div whileHover={hoverAnimate}>
          <Link href={"/contact"}>{translate("connect")}</Link>
        </motion.div>
      </div>
    </nav>
  )
}
