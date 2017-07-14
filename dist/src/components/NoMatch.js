'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoMatch = function NoMatch() {
    return _react2.default.createElement(
        'div',
        { id: 'page404' },
        _react2.default.createElement(
            'h1',
            null,
            '404'
        ),
        _react2.default.createElement(
            'h2',
            null,
            'It looks like the page you were looking for cannot be found.'
        ),
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            'Click Here To Go Back'
        )
    );
};

exports.default = NoMatch;