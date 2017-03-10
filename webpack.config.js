var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/');
var BUILD_DIR = path.resolve(__dirname, 'src/app');

module.exports = {
  entry: ['babel-polyfill',APP_DIR + '/routes.js'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  target: 'node',
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015']
      }
    }]
},
plugins: [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'global': {}, // bizarre lodash(?) webpack workaround
    'global.GENTLY': false // superagent client fix
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    mangle: true,
    sourcemap: false,
    beautify: false,
    dead_code: true
  })
]

};
