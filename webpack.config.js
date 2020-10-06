const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');
var path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  devtool: 'source-map',
  performance: {
    maxEntrypointSize: 5120000,
    maxAssetSize: 5120000,
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-syntax-dynamic-import',
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|gif|png|svg|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              // publicPath: 'https://images-2.wuaki.tv/'
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: false,
      showErrors: true,
      cache: true,
    }),
    new Dotenv({
      path: './.env',
      safe: true,
    })
  ],
};
