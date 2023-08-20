import {useTranslation} from "react-i18next"

export const Footer = () => {
  const {t: translate} = useTranslation("index")
  const dateYear = new Date().getFullYear()
  return (
    <div className="footer m-auto px-5 py-2 ">
      <h4>{translate("footer")}</h4>
      <span className="text-mainColor"> &copy; {dateYear}</span>
    </div>
  )
}
