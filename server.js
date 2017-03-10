import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from './webpack.config.js';
var express = require('express');
var bodyParser = require('body-parser');
var react = require('react');
var reactdom = require('react-dom');

const routes = require('./routes');
const app = new express();
const compiler = webpack(config);

// declare static directory
app.use(express.static(__dirname + '/views'));

// Use middleware compiler
app.use(webpackMiddleware(compiler));

// for parsing application/json
app.use(bodyParser.json());

// for parsing applicaiton/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// Import routes
app.use('/', routes);

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
