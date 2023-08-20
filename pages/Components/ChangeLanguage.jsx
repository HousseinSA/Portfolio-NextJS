import {useState} from "react"
import {Translate} from "../../helpers/Translate"

const ChangeLanguage = () => {
  const {locale, locales, handleTranslate} = Translate()
  const [lang, setLang] = useState("en")
  function handelLanguage() {
    const language = locales.find((l) => l !== lang)
    setLang(language)
    handleTranslate(language)
  }

  return (
    <div>
      <button
        onClick={handelLanguage}
        className="rounded-full w-40 h-40 flex justify-center items-center bg-mainColor mx-2 p-1.5 text-white"
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {locale}
      </button>
    </div>
  )
}

export default ChangeLanguage
