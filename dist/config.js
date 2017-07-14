'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var env = process.env;

var nodeEnv = exports.nodeEnv = env.NODE_ENV || 'development';

var logStars = exports.logStars = function logStars(message) {
    console.info('**********');
    console.info(message);
    console.info('**********');
};

exports.default = {
    connectionString: 'postgres://postgres:password@localhost:5432/capstone',
    port: env.PORT || 8080,
    host: env.HOST || 'localhost',
    get serverUrl() {
        return 'http://' + this.host + ':' + this.port;
    }
};