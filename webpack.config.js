const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader', 'ts-loader'],
        // use: ['babel-loader', 'ts-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader'
        ]
      }

    ]
  },
  devServer: {
    open: false,
    port: 8080,
    progress: true
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [new MiniCssExtractPlugin(),
    new ESLintPlugin({ extensions: ['ts', 'js'], fix: false }),
    new HtmlWebpackPlugin({ template: './index.html' }),
    new StylelintPlugin({ fix: false })
  ]
}
