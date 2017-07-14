'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Sidebar = require('../components/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Home = require('../components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _NoMatch = require('../components/NoMatch');

var _NoMatch2 = _interopRequireDefault(_NoMatch);

var _Client = require('./Client');

var _Client2 = _interopRequireDefault(_Client);

var _Project = require('./Project');

var _Project2 = _interopRequireDefault(_Project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import components


var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        // Default States
        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.setActiveTab = function (tab) {
            _this.setState({
                activeTab: tab
            });
        };

        _this.setHeaderTitle = function (newTitle) {
            _this.setState({
                title: newTitle
            });
        };

        _this.state = {
            activeTab: 1,
            title: 'Dashboard'
        };
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'app-container' },
                _react2.default.createElement(_Sidebar2.default, { activeTab: this.state.activeTab }),
                _react2.default.createElement(
                    'div',
                    { id: 'dashboard' },
                    _react2.default.createElement(_Header2.default, { title: this.state.title }),
                    _react2.default.createElement(
                        _reactRouterDom.Switch,
                        null,
                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render() {
                                return _react2.default.createElement(_Home2.default, { setActiveTab: _this2.setActiveTab, setHeaderTitle: _this2.setHeaderTitle });
                            } }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: '/projects', render: function render() {
                                return _react2.default.createElement(_Project2.default, { setActiveTab: _this2.setActiveTab, setHeaderTitle: _this2.setHeaderTitle });
                            } }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: '/clients', render: function render() {
                                return _react2.default.createElement(_Client2.default, { setActiveTab: _this2.setActiveTab, setHeaderTitle: _this2.setHeaderTitle });
                            } }),
                        _react2.default.createElement(_reactRouterDom.Route, { component: _NoMatch2.default })
                    )
                )
            );
        }
    }]);

    return App;
}(_react.Component);

App.propTypes = {
    children: _react.PropTypes.node
};

exports.default = (0, _reactRouterDom.withRouter)(App);
