var path = require('path');

var WebpackConfig = {
  entry: {
    app: './app.js'
  },

  output: {
    filename: 'out.js',

    path: path.resolve(__dirname, "dist"),

    publicPath: '/dist/',
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },

  module: {
    loaders: [
      { test: /\.html$/, loader: "raw" },

      { test: /\.css$/, loader: "style!css" },
      { test: /\.jpg$/, loader: "url?limit=50000" },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /src\/lib\/third\/.*\.js/],
        loader: 'babel'
      },
    ]
  }
}

module.exports = WebpackConfig;
