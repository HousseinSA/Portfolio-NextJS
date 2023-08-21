import Layout from "../app/layout"
import Head from "next/head"
import {appWithTranslation} from "next-i18next"

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hs-website-icon.svg" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
export default appWithTranslation(MyApp)
