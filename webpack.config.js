const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js", // Основной JS
    styles: "./src/input.css", // CSS-файл
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/parquets/",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      // Обработка HTML
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      // Обработка изображений
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/imgs/[name][ext]",
        },
      },
      // Обработка шрифтов
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
      // Обработка CSS
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    // Копируем статические HTML-файлы из src
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/index.html",
          to: "index.html",
        },
      ],
    }),
    // Обработка HTML с автоматическим добавлением скриптов
    new HtmlWebpackPlugin({
      template: "./src/en/index.html",
      filename: "en/index.html",
      chunks: ["main", "styles"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/en/prices/index.html",
      filename: "en/prices/index.html",
      chunks: ["main", "styles"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/en/services/installation/index.html",
      filename: "en/services/installation/index.html",
      chunks: ["main", "styles"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/en/services/repair/index.html",
      filename: "en/services/repair/index.html",
      chunks: ["main", "styles"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/en/services/restoration/index.html",
      filename: "en/services/restoration/index.html",
      chunks: ["main", "styles"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/en/services/sanding/index.html",
      filename: "en/services/sanding/index.html",
      chunks: ["main", "styles"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/en/services/scraping/index.html",
      filename: "en/services/scraping/index.html",
      chunks: ["main", "styles"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/en/services/varnishing/index.html",
      filename: "en/services/varnishing/index.html",
      chunks: ["main", "styles"],
    }),
  ],
};
