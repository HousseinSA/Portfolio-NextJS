const {i18n} = require("./next-i18next.config")

module.exports = {
  i18n,
  head: {
    link: [
      {
        rel: "icon",
        href: "./public/hs-website-icon.svg", // Path to your favicon image
        type: "image/png", // Specify the type of the image
      },
    ],
  },
}
