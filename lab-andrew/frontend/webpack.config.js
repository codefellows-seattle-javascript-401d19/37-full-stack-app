'use strict';

require('dotenv').config();
const {DefinePlugin, EnvironmentPlugin} = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

const webPackConfig = module.exports = {};

const PRODUCTION = process.env.NODE_ENV === 'production';

webPackConfig.entry = `${__dirname}/src/main.js`;

webPackConfig.output = {
  filename: 'bundle.[hash].js',
  path: `${__dirname}/build`,
  publicPath: process.env.CDN_URL,
};

webPackConfig.plugins = [
  new HTMLPlugin({title: 'scrambleVox'}),
  new EnvironmentPlugin(['NODE_ENV']),
  new DefinePlugin({
    __API_URL__: JSON.stringify(process.env.API_URL),
  }),
  new ExtractPlugin({filename: 'bundle.[hash].css', disable: process.env.NODE_ENV !== 'production'}),
];

if (PRODUCTION) {
  webPackConfig.plugins = webPackConfig.plugins.concat([
    new UglifyPlugin(),
    new CleanPlugin(),
  ]);
}

webPackConfig.module = { 
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      loader: ExtractPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [`${__dirname}/src/style`],
            },
          },
        ],
      }),
    },
  ],
};

webPackConfig.devtool = PRODUCTION ? undefined : 'eval-source-map';

webPackConfig.devServer = {
  historyApiFallback: true,
};