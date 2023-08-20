import {useRouter} from "next/router"
export const Translate = () => {
  const {locale, locales, push, pathname} = useRouter()
  function handleTranslate(lang) {
    push(pathname, undefined, {locale: lang})
  }
  return {locale, locales, handleTranslate , pathname}
}
