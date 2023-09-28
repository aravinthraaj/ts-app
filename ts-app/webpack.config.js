const path = require("path")
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [path.join(__dirname, "styles")],
                prependData: `@import './src/styles/main.scss';`,
              },
            },
          },
        ],
      },
    ],
  },
}
