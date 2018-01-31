'use strict';

require('dotenv').config();

const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const WebPackConfig = (module.exports = {});

const PRODUCTION = process.env.NODE_ENV === 'production';

WebPackConfig.entry = `${__dirname}/src/main.js`;
WebPackConfig.output = {
  filename: 'bundle.[hash].js',
  path: `${__dirname}/build`,
  publicPath: process.env.CDN_URL,
};

WebPackConfig.plugins = [
  new HTMLPlugin({ title: 'ScrambleVox' }),
  new EnvironmentPlugin(['NODE_ENV']),
  new DefinePlugin({
    __API_URL__: JSON.stringify(process.env.API_URL),
  }),
  new ExtractTextPlugin('bundle.[hash].css'),
];

if (PRODUCTION) {
  WebPackConfig.plugins = WebPackConfig.plugins.concat([new UglifyPlugin(), new CleanPlugin()]);
}

WebPackConfig.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
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

WebPackConfig.devtool = PRODUCTION ? undefined : 'eval-source-map';

WebPackConfig.devServer = {
  historyApiFallback: true,
};
