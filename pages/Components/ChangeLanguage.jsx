import {useState} from "react"
import {Translate} from "../../helpers/Translate"
import {loadLanguages} from "i18next"

export default function ChangeLanguage() {
  const {locale, locales, handleTranslate} = Translate()
  function handelLanguage(language) {
    handleTranslate(language)
  }
  return (
    <div>
      <select
        value={locale}
        onChange={(e) => handelLanguage(e.target.value)}
        className=" p-1 bg-bodyColor rounded-lg border border-gray-300 focus:outline-none focus:border-mainColor">
        {locales.map((lang) => {
          return (
            <option
              value={lang}
              key={lang}
              onClick={() => handelLanguage(lang)}
              className="rounded-full p-2 w-40 h-40 flex justify-center items-center bg-mainColor text-white">
              {lang}
            </option>
          )
        })}
      </select>
    </div>
  )
}
