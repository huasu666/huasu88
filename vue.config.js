// const path = require("path");
let BASE_URL = process.env.NODE_ENV === 'production' ? 'huasu' : './'

module.exports = {
    publicPath: BASE_URL,
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [],
        },
    },
}