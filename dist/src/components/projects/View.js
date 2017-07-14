'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

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

        _this.getProject = function (projectID) {
            api.getProjectByID(projectID).then(function (project) {
                _this.setState({
                    project: project
                }, function () {
                    document.title = 'Project - ' + _this.state.project.name;
                });
            });
        };

        _this.handleDelete = function (e) {
            e.preventDefault();
            _this.props.deleteProject(_this.props.match.params.projectID);
        };

        _this.formatDate = function (str) {
            return (0, _moment2.default)(str).format('MMMM D, YYYY');
        };

        _this.state = {
            project: null
        };
        return _this;
    }

    _createClass(View, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Update Active Tab (zero to hide)
            this.props.setHeaderTab(0);

            // Get Project
            this.getProject(this.props.match.params.projectID);
        }
    }, {
        key: 'currentContent',
        value: function currentContent() {
            if (this.state.project) {
                return _react2.default.createElement(
                    'div',
                    { id: 'dashboard-project' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'small-12 columns' },
                            _react2.default.createElement(
                                'h2',
                                null,
                                'Project Overview'
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'project-info', className: 'dashboard-block' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'small-12 large-8 columns' },
                                        _react2.default.createElement(
                                            'div',
                                            { id: 'project-info-basic' },
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
                                                        ' Project ID: '
                                                    ),
                                                    ' ',
                                                    this.state.project.project_id
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        _react2.default.createElement('i', { className: 'fa fa-tag', 'aria-hidden': 'true' }),
                                                        ' Name: '
                                                    ),
                                                    ' ',
                                                    this.state.project.name
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        _react2.default.createElement('i', { className: 'fa fa-home', 'aria-hidden': 'true' }),
                                                        ' Type: '
                                                    ),
                                                    ' ',
                                                    this.state.project.type
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        _react2.default.createElement(
                                                            'b',
                                                            null,
                                                            _react2.default.createElement('i', { className: 'fa fa-file-text-o', 'aria-hidden': 'true' }),
                                                            ' Description: '
                                                        ),
                                                        ' ',
                                                        this.state.project.description == '' ? 'N/a' : this.state.project.description
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        _react2.default.createElement('i', { className: 'fa fa-calendar', 'aria-hidden': 'true' }),
                                                        ' Start Date: '
                                                    ),
                                                    ' ',
                                                    this.state.project.start_date == '1990-01-01T05:00:00.000Z' ? 'N/a' : this.formatDate(this.state.project.start_date)
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        _react2.default.createElement('i', { className: 'fa fa-calendar', 'aria-hidden': 'true' }),
                                                        ' End Date: '
                                                    ),
                                                    ' ',
                                                    this.state.project.end_date == '1990-01-01T05:00:00.000Z' ? 'N/a' : this.formatDate(this.state.project.end_date)
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        _react2.default.createElement('i', { className: 'fa fa-usd', 'aria-hidden': 'true' }),
                                                        ' Estimated Cost: '
                                                    ),
                                                    ' ',
                                                    this.state.project.estimated_cost == null ? 'N/a' : '$ ' + parseInt(this.state.project.estimated_cost).toFixed(2)
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        _react2.default.createElement('i', { className: 'fa fa-usd', 'aria-hidden': 'true' }),
                                                        ' Actual Cost: '
                                                    ),
                                                    ' ',
                                                    this.state.project.final_cost == null ? 'N/a' : '$ ' + parseInt(this.state.project.final_cost).toFixed(2)
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { id: 'project-actions' },
                                                _react2.default.createElement(
                                                    _reactRouterDom.Link,
                                                    { className: 'btn-dark', to: '/clients/' + this.state.project.client_id },
                                                    'View Project Client'
                                                ),
                                                _react2.default.createElement(
                                                    _reactRouterDom.Link,
                                                    { className: 'btn-dark', to: '/projects/' + this.state.project.project_id + '/edit' },
                                                    'Edit Project'
                                                ),
                                                _react2.default.createElement(
                                                    'a',
                                                    { onClick: this.handleDelete, className: 'btn-warn', href: '#' },
                                                    'Delete Project'
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'small-12 large-4 columns' },
                                        _react2.default.createElement(
                                            'div',
                                            { id: 'project-info-location' },
                                            _react2.default.createElement(
                                                'h3',
                                                null,
                                                'Location'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { id: 'project-map' },
                                                _react2.default.createElement(_Map2.default, { google: window.google })
                                            ),
                                            _react2.default.createElement(
                                                'ul',
                                                null,
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    this.state.project.street
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    this.state.project.city,
                                                    ', ON ',
                                                    this.state.project.postal_code.toUpperCase()
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
                            { className: 'small-12 large-6 columns' },
                            _react2.default.createElement(
                                'h2',
                                null,
                                'Project Photos (6)'
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'project-photos', className: 'dashboard-block' },
                                _react2.default.createElement(
                                    'a',
                                    { id: 'add-project-photo', className: 'btn', href: '#' },
                                    'Add Project Photo'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row small-up-1 medium-up-2 large-up-4' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'column' },
                                        _react2.default.createElement('img', { src: '/assets/images/project-photo.jpg', alt: 'project-photo' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'column' },
                                        _react2.default.createElement('img', { src: '/assets/images/project-photo.jpg', alt: 'project-photo' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'column' },
                                        _react2.default.createElement('img', { src: '/assets/images/project-photo.jpg', alt: 'project-photo' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'column' },
                                        _react2.default.createElement('img', { src: '/assets/images/project-photo.jpg', alt: 'project-photo' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'column' },
                                        _react2.default.createElement('img', { src: '/assets/images/project-photo.jpg', alt: 'project-photo' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'column' },
                                        _react2.default.createElement('img', { src: '/assets/images/project-photo.jpg', alt: 'project-photo' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'column' },
                                        _react2.default.createElement('img', { src: '/assets/images/project-photo.jpg', alt: 'project-photo' })
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'small-12 large-6 columns' },
                            _react2.default.createElement(
                                'h2',
                                null,
                                'Project Notes (2)'
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'project-notes', className: 'dashboard-block' },
                                _react2.default.createElement(
                                    'a',
                                    { id: 'add-project-note', className: 'btn', href: '#' },
                                    'Add Project Note'
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    null,
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            'Added March 3, 2017 by Ryan'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sem felis. Fusce varius, eros sit amet dictum dictum, tortor purus auctor ligula, ut accumsan tortor massa id purus. Vivamus elit urna, fringilla non ipsum vel, molestie volutpat turpis.'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            'Added March 2, 2017 by Ryan'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sem felis. Fusce varius, eros sit amet dictum dictum, tortor purus auctor ligula, ut accumsan tortor massa id purus. Vivamus elit urna, fringilla non ipsum vel, molestie volutpat turpis.'
                                        )
                                    )
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
    deleteProject: _react.PropTypes.func.isRequired
};

exports.default = View;