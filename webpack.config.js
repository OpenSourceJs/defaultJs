
(function (webpack, path, HtmlWebpackPlugin, ExtractTextPlugin, HtmlTemplate, BUILD_DIR, APP_DIR, config, prodPlugins) {

  'use strict';
   webpack           = require('webpack');
   path              = require('path');
   HtmlWebpackPlugin = require('html-webpack-plugin');
   ExtractTextPlugin = require('extract-text-webpack-plugin');
   HtmlTemplate      = require('html-webpack-template');

   BUILD_DIR         = path.resolve(__dirname, './app/assets/dist');
   APP_DIR           = path.resolve(__dirname, './app/views/src');

   config = {
    entry:  ['whatwg-fetch', `${APP_DIR}/index.js`],
    output: {
      path:     BUILD_DIR,
      filename: '/js/[name].js',
    },
    cache:   true,
    debug:   true,
    devtool: 'eval-source-map',
    stats:   {
      colors:  true,
      reasons: true,
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        },
      }),
      new HtmlWebpackPlugin({
        title:      'Default',
        xhtml:      true,
        inject:     false,
        template:   HtmlTemplate,
        appMountId: 'root-container',
        favicon: '',
        meta: [
           {
             name: "description",
             content: " "
           },
           {
             name:"keywords",
             content: " "
           },
           {
             name: "author",
             content: " "
           },
           {
             property:"og:url",
             content: " "
           },
           {
             property: "og:title",
             content:" "
           },
           {
             content: "Content-Type",
             name: "http-equiv"
           },
           {
             content: "text/html; charset=UTF-8",
             name: "content"
           },
           {
             name: "viewport",
             content: "width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0"
           },
           {
             property: "og:type",
             content: "website"
           },
           {
             name: "theme-color",
             content: "#ffffff"
           }
        ],
        links: [
           "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/css/materialize.min.css",
           "https://fonts.googleapis.com/css?family=Open+Sans"
        ],
      }),
      new ExtractTextPlugin('/css/[name].css', {
        allChunks: true,
      }),
    ],

    module: {
      loaders: [
        { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
        { test: /\.(png|gif|jpg)$/, loader: 'file-loader?name=/images/[name].[ext]' },
        { test: /\.ico$/, loader: 'file-loader?name=/[name].[ext]' },
        { test: /\.jsx?$/, loader: 'babel' },
        {
          test:   /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=100&mimetype=application/font-woff&name=/fonts/[name].[ext]',
        },
        {
          test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader?name=/fonts/[name].[ext]'
        },
        {
          test:   /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=100&mimetype=application/octet-stream&name=/fonts/[name].[ext]',
        },
        {
          test:   /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader?name=/fonts/[name].[ext]',
        },

        {
          test: /\.html$/,
          loader: 'html-loader?attrs[]=video:src'
        },
        {
          test: /\.(webm|mp4)$/,
          loader: 'url-loader?limit=10000&mimetype=video/mp4&name=/video/[name].[exit]'
        },
        {
          test:   /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=100&mimetype=image/svg+xml&name=/fonts/[name].[ext]',
        },
      ],
    },
  };

  if (process.env && process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
     prodPlugins = [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: true,
        },
        output: {
          comments: false,
        },
      }),
      new webpack.optimize.CommonsChunkPlugin('/js/common.js'),
    ];

    config.plugins = config.plugins.concat(prodPlugins);

    config.cache = false;
    config.debug = false;
    config.devtool = undefined;
  }

  module.exports = config;

}.call(this));
