'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_Component) {
    _inherits(Sidebar, _Component);

    function Sidebar() {
        _classCallCheck(this, Sidebar);

        return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
    }

    _createClass(Sidebar, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'sidebar' },
                _react2.default.createElement(
                    'div',
                    { id: 'sidebar-logo' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'TP'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: this.props.activeTab == 1 ? 'sidebar-action active' : 'sidebar-action' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/' },
                        _react2.default.createElement(
                            'svg',
                            { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', x: '0px', y: '0px', viewBox: '0 0 88 88', xmlSpace: 'preserve' },
                            _react2.default.createElement('path', { d: 'M28,0H12C5.4,0,0,5.4,0,12v16c0,6.6,5.4,12,12,12h16c6.6,0,12-5.4,12-12V12C40,5.4,34.6,0,28,0z M32,28                    \tc0,2.2-1.8,4-4,4H12c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4V28z M76,0H60c-6.6,0-12,5.4-12,12v16                    \tc0,6.6,5.4,12,12,12h16c6.6,0,12-5.4,12-12V12C88,5.4,82.6,0,76,0z M80,28c0,2.2-1.8,4-4,4H60c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4                    \th16c2.2,0,4,1.8,4,4V28z M76,48H60c-6.6,0-12,5.4-12,12v16c0,6.6,5.4,12,12,12h16c6.6,0,12-5.4,12-12V60C88,53.4,82.6,48,76,48z                    \t M80,76c0,2.2-1.8,4-4,4H60c-2.2,0-4-1.8-4-4V60c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4V76z M28,48H12C5.4,48,0,53.4,0,60v16                    \tc0,6.6,5.4,12,12,12h16c6.6,0,12-5.4,12-12V60C40,53.4,34.6,48,28,48z M32,76c0,2.2-1.8,4-4,4H12c-2.2,0-4-1.8-4-4V60                    \tc0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4V76z' })
                        ),
                        'Dashboard'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: this.props.activeTab == 2 ? 'sidebar-action active' : 'sidebar-action' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/projects' },
                        _react2.default.createElement(
                            'svg',
                            { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', x: '0px', y: '0px', viewBox: '0 0 88 88', xmlSpace: 'preserve' },
                            _react2.default.createElement('path', { d: 'M45,72.68L10.06,55.21,2,59.24l43,21.5,43-21.5-8.06-4Zm0-15.22L10.06,40,2,44l43,21.5L88,44l-8.06-4ZM88,28.77L45,7.27,2,28.77l43,21.5ZM45,15.28L72,28.77,45,42.26,18,28.77Z', transform: 'translate(-2 -7.27)' })
                        ),
                        'Projects'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: this.props.activeTab == 3 ? 'sidebar-action active' : 'sidebar-action' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/clients' },
                        _react2.default.createElement(
                            'svg',
                            { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', x: '0px', y: '0px', viewBox: '0 0 88 88', xmlSpace: 'preserve' },
                            _react2.default.createElement('path', { d: 'M59.28,50.5A21.2,21.2,0,0,0,66,35V24.29A21.75,21.75,0,0,0,44,2.79a21.75,21.75,0,0,0-22,21.5V35A21.2,21.2,0,0,0,28.72,50.5C12,53,0,59.67,0,67.38v7.08A10.87,10.87,0,0,0,11,85.21H77A10.87,10.87,0,0,0,88,74.46V67.4C88,59.69,76,53.06,59.28,50.5ZM29.33,35V24.29a14.67,14.67,0,0,1,29.33,0V35A14.67,14.67,0,0,1,29.33,35ZM80.67,74.46A3.63,3.63,0,0,1,77,78H11a3.63,3.63,0,0,1-3.67-3.58V67.38c0-.83,2.11-3.53,8.39-6.1,7.34-3,17.64-4.73,28.28-4.73s20.93,1.73,28.27,4.74c6.28,2.58,8.4,5.28,8.4,6.12v7.05Z', transform: 'translate(0 -2.79)' })
                        ),
                        'Clients'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: this.props.activeTab == 4 ? 'sidebar-action active' : 'sidebar-action' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/settings' },
                        _react2.default.createElement(
                            'svg',
                            { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', x: '0px', y: '0px', viewBox: '0 0 88 88', xmlSpace: 'preserve' },
                            _react2.default.createElement('path', { d: 'M77,54.24a10.85,10.85,0,1,0,0-21.69H75.12a32.11,32.11,0,0,0-1.34-3.18L75.11,28a10.74,10.74,0,0,0,0-15.34,11.11,11.11,0,0,0-15.56,0L58.23,14A33.07,33.07,0,0,0,55,12.7V10.85a11,11,0,0,0-22,0V12.7A33.07,33.07,0,0,0,29.77,14l-1.33-1.31a11.11,11.11,0,0,0-15.56,0,10.74,10.74,0,0,0,0,15.34l1.33,1.31a32.11,32.11,0,0,0-1.34,3.18H11a10.85,10.85,0,1,0,0,21.69h1.88a32.11,32.11,0,0,0,1.34,3.18l-1.33,1.31a10.74,10.74,0,0,0,0,15.34,11.11,11.11,0,0,0,15.56,0l1.33-1.31A33.07,33.07,0,0,0,33,74.08v1.85a11,11,0,0,0,22,0V74.08a33.07,33.07,0,0,0,3.23-1.32l1.33,1.31a11.11,11.11,0,0,0,15.56,0,10.74,10.74,0,0,0,0-15.34l-1.33-1.31a32.11,32.11,0,0,0,1.34-3.18H77ZM69.41,47a25,25,0,0,1-4.85,11.54l5.23,5.15,0.14,0.14a3.58,3.58,0,0,1,0,5.11,3.7,3.7,0,0,1-5.19,0l-0.14-.14-5.23-5.15a25.74,25.74,0,0,1-11.7,4.78v7.49a3.67,3.67,0,0,1-7.33,0V68.44a25.74,25.74,0,0,1-11.7-4.78L23.4,68.81,23.26,69a3.7,3.7,0,0,1-5.19,0,3.58,3.58,0,0,1,0-5.11l0.14-.14,5.23-5.15A25,25,0,0,1,18.59,47H11a3.62,3.62,0,1,1,0-7.23h7.59a25,25,0,0,1,4.85-11.54l-5.23-5.15-0.14-.14a3.58,3.58,0,0,1,0-5.11,3.7,3.7,0,0,1,5.19,0L23.4,18l5.23,5.15a25.74,25.74,0,0,1,11.7-4.78V10.85a3.67,3.67,0,0,1,7.33,0v7.49a25.74,25.74,0,0,1,11.7,4.78L64.6,18l0.14-.14a3.7,3.7,0,0,1,5.19,0,3.58,3.58,0,0,1,0,5.11l-0.14.14-5.23,5.15a25,25,0,0,1,4.85,11.54H77A3.62,3.62,0,1,1,77,47H69.41ZM44,28.93A14.46,14.46,0,1,0,58.67,43.39,14.57,14.57,0,0,0,44,28.93Zm0,21.69a7.23,7.23,0,1,1,7.33-7.23A7.28,7.28,0,0,1,44,50.62Z' })
                        ),
                        'Settings'
                    )
                )
            );
        }
    }]);

    return Sidebar;
}(_react.Component);

Sidebar.propTypes = {
    activeTab: _react.PropTypes.number.isRequired
};

exports.default = Sidebar;