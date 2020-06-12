//@ts-check
require('dotenv').config({ path: '.env' });
const path = require('path');

const isProduction = process.argv.indexOf('production') >= 0;
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './dist');

console.log('Running webpack in ' + (isProduction ? 'PRODUCTION' : 'DEVELOPMENT') + ' mode\n');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const fs = require('fs');

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist');
}

/**@type {import('webpack').Configuration} */
const config = {
  context: sourcePath,
  mode: isProduction ? 'production' : 'development',
  entry: {
    main: ['./app.tsx'],
  },
  output: {
    path: outPath,
    publicPath: '/',
    filename: `[name].bundle${isProduction ? '.[contenthash]' : ''}.js`,
    chunkFilename: `chunk-[name]${isProduction ? '.[contenthash]' : ''}.js`,
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    mainFields: ['browser', 'main'],
  },
  optimization: {
    removeAvailableModules: true,
    namedModules: true,
    namedChunks: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    providedExports: true,
    usedExports: true,
    sideEffects: true,
    minimize: isProduction,
    runtimeChunk: {
      name: 'manifest',
    },
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: isProduction ? '[hash:base64:8]' : '[local]__[hash:base64:5]' },
              sourceMap: true,
              importLoaders: 1,
            },
          },
          'sass-loader?sourceMap',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      hash: isProduction,
      minify: isProduction && {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[hash].css' : '[name].css',
      chunkFilename: isProduction ? '[name].[hash].css' : '[name].css',
    }),
  ],
  devtool: 'source-map',
};

module.exports = config;
