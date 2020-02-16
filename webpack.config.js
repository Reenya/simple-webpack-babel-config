module.exports = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|jpg|gif|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name]-[sha1:hash:7].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(ttf|otf|eot|woff2)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
      {
        test: /\.(css)$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(s[ca]ss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
};
