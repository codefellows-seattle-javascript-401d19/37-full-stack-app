'use strict';

const webPackConfig = module.exports = {};

const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//=======================================

webPackConfig.entry = `${__dirname}/src/main.js`;
webPackConfig.output = {
  path: `${__dirname}/build`,
  filename: 'bundle.[hash].js',
},

//=======================================

webPackConfig.plugins = [
  new HTMLWebpackPlugin(),
  new ExtractTextPlugin('bundle.[hash].css'),
];

//=======================================

webPackConfig.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test:  /\.scss$/,
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

webPackConfig.devtool = 'eval-source-map';

webPackConfig.devServer = {
  historyApiFallback: true,
};
