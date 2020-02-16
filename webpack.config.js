const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExptactPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  const isProd = evn.mode === "production";
  const isDev = evn.mode === "development";
  return {
    mode: isProd ? "production" : isDev && "development",

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node-modules/,
          loader: "babel-loader"
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
          test: /\.(css)$/,
          use: [MiniCssExptactPlugin.loader, "css-loader"]
        },
        {
          test: /\.(s[ca]ss)$/,
          use: [MiniCssExptactPlugin.loader, "css-loader", "sass-loader"]
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: "Hello",
        buildTime: new Date(),
        template: "public/index.html"
      }),
      new MiniCssExptactPlugin({
        filename: "main-[hash:8].css"
      })
    ],

    devServer: {
      open: true
    }
  };
};
