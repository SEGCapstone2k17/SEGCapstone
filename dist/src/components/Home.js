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

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Update page title
            document.title = 'Dashboard';

            // Update Header Title
            this.props.setHeaderTitle('Dashboard');

            // Update Active Tab
            this.props.setActiveTab(1);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'home' },
                _react2.default.createElement(
                    'div',
                    { id: 'dashboard-actions' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'small-12 columns' },
                            _react2.default.createElement(
                                'h2',
                                null,
                                'Quick Actions'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'row small-up-1 medium-up-2 large-up-4' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'column' },
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { className: 'quick-action rounded', to: '/projects' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'qa-icon' },
                                            _react2.default.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'qa-text' },
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                'Projects Overview'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'column' },
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { className: 'quick-action rounded', to: '/clients' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'qa-icon' },
                                            _react2.default.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'qa-text' },
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                'Clients Overview'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'dashboard-other' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'small-12 large-6 columns' },
                            _react2.default.createElement(
                                'h2',
                                null,
                                'Project Overview'
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'dashboard-overview', className: 'rounded' },
                                'Content to be determined'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'small-12 large-6 columns' },
                            _react2.default.createElement(
                                'h2',
                                null,
                                'Client Overview'
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'dashboard-notifications', className: 'rounded' },
                                'Content to be determined'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

Home.propTypes = {
    setActiveTab: _react.PropTypes.func.isRequired,
    setHeaderTitle: _react.PropTypes.func.isRequired,
    history: _react.PropTypes.any
};

exports.default = Home;