const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main_bundle.js'
  },
  mode: 'production',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: /\.module\.\w+$/i,
                exportLocalsConvention: 'camelCase',
                localIdentName:
                                    '[name]__[local]--[hash:base64:5]'
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(ico|png|jpe?g|gif|eot|svg|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Github repos search',
    favicon: './src/assets/images/favicon/favicon.ico'
  })]
};
