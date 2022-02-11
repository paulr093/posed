module.exports = {
   reactStrictMode: true,
}

module.exports = {
   async headers() {
      return [
         {
            source:
               "https://rawcdn.githack.com/pmndrs/drei-assets/aa3600359ba664d546d05821bcbca42013587df2/hdri/potsdamer_platz_1k.hdr",
            headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
         },
      ]
   },
}

const withTM = require("next-transpile-modules")(["three"])
module.exports = withTM()
