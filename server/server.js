import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.js';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './routes';
import methodOverride from 'method-override';

const app = new express();
const compiler = webpack(config);
const _view_dir = path.join(__dirname + '/../public');

// override with POST having ?_method=PUT
app.use(methodOverride('_method'));

// declare static directory
app.use(express.static(_view_dir));

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
