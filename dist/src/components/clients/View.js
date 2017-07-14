'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _api = require('../../api');

var api = _interopRequireWildcard(_api);

var _Loading = require('../Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _Map = require('../Map');

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var View = function (_Component) {
    _inherits(View, _Component);

    function View(props) {
        _classCallCheck(this, View);

        var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, props));

        _this.getClient = function (clientID) {
            api.getClientByID(clientID).then(function (client) {
                _this.setState({
                    client: client
                }, function () {
                    document.title = 'Client - ' + _this.state.client.name;
                });
            });
        };

        _this.getProjects = function (clientID) {
            api.getProjectsByClientID(clientID).then(function (projects) {
                _this.setState({
                    projects: projects
                });
            });
        };

        _this.handleDelete = function (e) {
            e.preventDefault();
            _this.props.deleteClient(_this.props.match.params.clientID);
        };

        _this.state = {
            client: null,
            projects: null
        };
        return _this;
    }

    _createClass(View, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Update Active Tab (zero to hide)
            this.props.setHeaderTab(0);

            // Get client
            this.getClient(this.props.match.params.clientID);

            // Get client projects
            this.getProjects(this.props.match.params.clientID);
        }
    }, {
        key: 'currentContent',
        value: function currentContent() {
            if (this.state.client && this.state.projects) {
                return _react2.default.createElement(
                    'div',
                    { id: 'dashboard-client' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'small-12 columns' },
                            _react2.default.createElement(
                                'h2',
                                null,
                                'Client Overview'
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'client-info', className: 'dashboard-block' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'small-12 large-8 columns' },
                                        _react2.default.createElement(
                                            'div',
                                            { id: 'client-info-basic' },
                                            _react2.default.createElement(
                                                'h3',
                                                null,
                                                'Basic Information'
                                            ),
                                            _react2.default.createElement(
                                                'ul',
                                                null,
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        _react2.default.createElement('i', { className: 'fa fa-hashtag', 'aria-hidden': 'true' }),
                                                        ' Client ID: '
                                                    ),
                                                    ' ',
                                                    this.state.client.client_id
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        _react2.default.createElement('i', { className: 'fa fa-user', 'aria-hidden': 'true' }),
                                                        ' Name: '
                                                    ),
                                                    ' ',
                                                    this.state.client.name
                                                ),
                                                this.state.client.email && _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        _react2.default.createElement('i', { className: 'fa fa-envelope-o', 'aria-hidden': 'true' }),
                                                        ' Email: '
                                                    ),
                                                    ' ',
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: 'mailto:' + this.state.client.email },
                                                        this.state.client.email
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        _react2.default.createElement('i', { className: 'fa fa-phone', 'aria-hidden': 'true' }),
                                                        ' Phone Number: '
                                                    ),
                                                    ' ',
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: 'tel:' + this.state.client.telephone },
                                                        this.state.client.telephone
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { id: 'client-actions' },
                                                _react2.default.createElement(
                                                    _reactRouterDom.Link,
                                                    { className: 'btn-dark', to: '/clients/' + this.state.client.client_id + '/edit' },
                                                    'Edit Client'
                                                ),
                                                _react2.default.createElement(
                                                    'a',
                                                    { onClick: this.handleDelete, className: 'btn-warn', href: '#' },
                                                    'Delete Client'
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'small-12 large-4 columns' },
                                        _react2.default.createElement(
                                            'div',
                                            { id: 'client-info-location' },
                                            _react2.default.createElement(
                                                'h3',
                                                null,
                                                'Location'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { id: 'client-map' },
                                                _react2.default.createElement(_Map2.default, { google: window.google })
                                            ),
                                            _react2.default.createElement(
                                                'ul',
                                                null,
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    this.state.client.street
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    this.state.client.city,
                                                    ', ON ',
                                                    this.state.client.postal_code.toUpperCase()
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    'Canada'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'a',
                                                { href: '#' },
                                                'Get Directions'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'small-12 large-8 columns' },
                            _react2.default.createElement(
                                'h2',
                                null,
                                'Client Projects (',
                                this.state.projects.length,
                                ')'
                            ),
                            this.state.projects.map(function (project) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: project.project_id, className: 'project-result dashboard-block' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'small-12 large-9 columns' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'project-result-info' },
                                                _react2.default.createElement(
                                                    'h3',
                                                    null,
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'project-result-status complete' },
                                                        'Complete'
                                                    ),
                                                    ' ',
                                                    project.name
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        'Location: '
                                                    ),
                                                    project.city,
                                                    ', Ontario'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        'Type: '
                                                    ),
                                                    project.type
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    project.description
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'small-12 large-3 columns' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'project-result-actions' },
                                                _react2.default.createElement(
                                                    _reactRouterDom.Link,
                                                    { className: 'btn-dark', to: '/projects/' + project.project_id },
                                                    'View Project'
                                                ),
                                                _react2.default.createElement(
                                                    _reactRouterDom.Link,
                                                    { className: 'btn-dark', to: '/projects/' + project.project_id + '/edit' },
                                                    'Edit Project'
                                                )
                                            )
                                        )
                                    )
                                );
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'small-12 large-4 columns' },
                            _react2.default.createElement(
                                'div',
                                { className: 'search-tips dashboard-block' },
                                _react2.default.createElement(
                                    'h3',
                                    null,
                                    'Actions'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'List of possible actions such as Add Project for this client, add project in general, search project, search clients'
                                )
                            )
                        )
                    )
                );
            }

            return _react2.default.createElement(_Loading2.default, null);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.currentContent()
            );
        }
    }]);

    return View;
}(_react.Component);

View.propTypes = {
    match: _react.PropTypes.any,
    setHeaderTab: _react.PropTypes.func.isRequired,
    deleteClient: _react.PropTypes.func.isRequired
};

exports.default = View;