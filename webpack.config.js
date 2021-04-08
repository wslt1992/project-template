const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')

const { entry, htmlPlugin } = require('./page')

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: { ...entry },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
    library: {
      name: 'webpackNumbers',
      type: 'umd'
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.ts$/,
        use: ['babel-loader', 'ts-loader'],
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
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
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
    ...htmlPlugin,
    new StylelintPlugin({ fix: false })
  ]
}
