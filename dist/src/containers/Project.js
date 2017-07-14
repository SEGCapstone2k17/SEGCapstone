'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _api = require('../api');

var api = _interopRequireWildcard(_api);

var _Summary = require('../components/projects/Summary');

var _Summary2 = _interopRequireDefault(_Summary);

var _Add = require('../components/projects/Add');

var _Add2 = _interopRequireDefault(_Add);

var _Edit = require('../components/projects/Edit');

var _Edit2 = _interopRequireDefault(_Edit);

var _View = require('../components/projects/View');

var _View2 = _interopRequireDefault(_View);

var _Search = require('../components/projects/Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import Client Components


var Project = function (_Component) {
    _inherits(Project, _Component);

    function Project(props) {
        _classCallCheck(this, Project);

        // States
        var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));

        _this.setHeaderTab = function (tab) {
            _this.setState({
                headerTab: tab
            });
        };

        _this.addProject = function (project) {
            api.addProject(project).then(function (resp) {
                _this.getProjects();
                _this.props.history.push('/projects/' + resp.projectID);
            });
        };

        _this.editProject = function (project) {
            api.editProject(project).then(function (resp) {
                _this.getProjects();
                _this.props.history.push('/projects/' + resp.projectID);
            });
        };

        _this.deleteProject = function (projectID) {
            api.deleteProject(projectID).then(function () {
                _this.getProjects();
                _this.props.history.push('/projects');
            });
        };

        _this.getProjects = function () {
            api.getProjects().then(function (projects) {
                _this.setState({
                    projects: projects
                });
            });
        };

        _this.getCities = function () {
            api.getCities().then(function (cities) {
                _this.setState({
                    cities: cities
                });
            });
        };

        _this.getClients = function () {
            api.getClients().then(function (clients) {
                _this.setState({
                    clients: clients
                });
            });
        };

        _this.getProjectTypes = function () {
            api.getProjectTypes().then(function (projectTypes) {
                _this.setState({
                    projectTypes: projectTypes
                });
            });
        };

        _this.searchProjects = function (query) {
            api.searchProjects(query).then(function (projects) {
                _this.setState({
                    projects: projects
                });
            });
        };

        _this.state = {
            headerTab: 1,
            cities: null,
            clients: null,
            projects: null,
            projectTypes: null
        };
        return _this;
    }

    _createClass(Project, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Update page title
            document.title = 'Projects Overview';

            // Update Active Tab
            this.props.setActiveTab(2);

            // Update Header Title
            this.props.setHeaderTitle('Projects');

            // Get cities
            this.getCities();

            // Get clients
            this.getClients();

            // Get projects
            this.getProjects();

            // Get project types
            this.getProjectTypes();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'projects' },
                _react2.default.createElement(
                    'div',
                    { id: 'page-navigation' },
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            { className: this.state.headerTab == 1 ? 'active' : '' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/projects' },
                                'Overview'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: this.state.headerTab == 2 ? 'active' : '' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/projects/search' },
                                'Search'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: this.state.headerTab == 3 ? 'active' : '' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/projects/add' },
                                'Add'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects', render: function render() {
                            return _react2.default.createElement(_Summary2.default, { setHeaderTab: _this2.setHeaderTab });
                        } }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/projects/search', render: function render() {
                            return _react2.default.createElement(_Search2.default, { setHeaderTab: _this2.setHeaderTab, searchProjects: _this2.searchProjects, projects: _this2.state.projects, cities: _this2.state.cities, projectTypes: _this2.state.projectTypes });
                        } }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/projects/add', render: function render() {
                            return _react2.default.createElement(_Add2.default, { setHeaderTab: _this2.setHeaderTab, addProject: _this2.addProject, cities: _this2.state.cities, clients: _this2.state.clients, projectTypes: _this2.state.projectTypes });
                        } }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/projects/:projectID/edit', render: function render(_ref) {
                            var match = _ref.match;
                            return _react2.default.createElement(_Edit2.default, { setHeaderTab: _this2.setHeaderTab, match: match, editProject: _this2.editProject, cities: _this2.state.cities, clients: _this2.state.clients, projectTypes: _this2.state.projectTypes });
                        } }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/projects/:projectID', render: function render(_ref2) {
                            var match = _ref2.match;
                            return _react2.default.createElement(_View2.default, { setHeaderTab: _this2.setHeaderTab, match: match, deleteProject: _this2.deleteProject });
                        } })
                )
            );
        }
    }]);

    return Project;
}(_react.Component);

Project.propTypes = {
    setActiveTab: _react.PropTypes.func.isRequired,
    setHeaderTitle: _react.PropTypes.func.isRequired,
    history: _react.PropTypes.any
};

exports.default = (0, _reactRouterDom.withRouter)(Project);