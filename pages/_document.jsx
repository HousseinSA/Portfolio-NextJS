import Document, {Html, Head, Main, NextScript} from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
          />
          <link rel="shortcut icon" href="../public/hs-website-icon.svg" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async id="slcLiveChat" src="https://widget.sonetel.com/SonetelWidget.min.js" data-account-id="208419946"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
