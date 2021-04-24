const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ['./src/index.tsx'],
  module: {
    rules: [
      {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
          resolve: {
            extensions: [".js", ".ts", ".tsx"]
          },
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: "dashesOnly", 
                localIdentName: "[local][hash:3]",
              },
            }
          },
          'less-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, 'src/assets'), to: path.join(__dirname, 'dist') },
      ],
    }),
  ],
  output: {
    filename: 'assets/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 3000
  }
}