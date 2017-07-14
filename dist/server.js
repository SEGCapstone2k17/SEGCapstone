'use strict';

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

server.use(_bodyParser2.default.json());

server.use('/api', _api2.default);
server.use(_express2.default.static('public'));

// Show login
server.get('/login', function (req, res) {
    res.sendFile(_path2.default.join(__dirname + '/public/login.html'));
});

// Send all routes the index
server.get('*', function (req, res) {
    res.sendFile(_path2.default.join(__dirname + '/public/index.html'));
});

server.listen(_config2.default.port, _config2.default.host, function () {
    console.info('Express listening on port', _config2.default.port);
});
