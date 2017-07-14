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

var Search = function (_Component) {
    _inherits(Search, _Component);

    function Search() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Search);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
            e.preventDefault();
            var query = {
                name: _this.refs.projectName.value,
                city: _this.refs.cityID.value,
                type: _this.refs.projectType.value
            };
            _this.props.searchProjects(query);
        }, _this.resetFilters = function (e) {
            e.preventDefault();
            _this.refs.projectName.value = '';
            _this.refs.cityID.value = '0';
            _this.refs.projectType.value = '0';
            _this.handleSubmit(event);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Search, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Update page title
            document.title = 'Search Projects';

            // Update Active Tab
            this.props.setHeaderTab(2);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'dashboard-other' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'small-12 columns' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            'Filter Results'
                        ),
                        _react2.default.createElement(
                            'div',
                            { id: 'project-filter', className: 'dashboard-block' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'small-12 large-8 columns' },
                                    _react2.default.createElement(
                                        'div',
                                        { id: 'project-search' },
                                        _react2.default.createElement(
                                            'button',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true' })
                                        ),
                                        _react2.default.createElement('input', { type: 'text', ref: 'projectName', name: 'searchProject', onKeyUp: this.handleSubmit, placeholder: 'Search for projects' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'small-12 large-2 columns' },
                                    _react2.default.createElement(
                                        'div',
                                        { id: 'project-refine' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'project-refine-result' },
                                            _react2.default.createElement(
                                                'select',
                                                { ref: 'projectType', onChange: this.handleSubmit },
                                                _react2.default.createElement(
                                                    'option',
                                                    { value: '0' },
                                                    'All Types'
                                                ),
                                                this.props.projectTypes.map(function (type) {
                                                    return _react2.default.createElement(
                                                        'option',
                                                        { key: type.type_id, value: type.type_id },
                                                        type.type
                                                    );
                                                })
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'small-12 large-2 columns' },
                                    _react2.default.createElement(
                                        'div',
                                        { id: 'project-refine' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'project-refine-result' },
                                            _react2.default.createElement(
                                                'select',
                                                { ref: 'cityID', onChange: this.handleSubmit },
                                                _react2.default.createElement(
                                                    'option',
                                                    { value: '0' },
                                                    'All Cities'
                                                ),
                                                this.props.cities.map(function (city) {
                                                    return _react2.default.createElement(
                                                        'option',
                                                        { key: city.city_id, value: city.city_id },
                                                        city.city
                                                    );
                                                })
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
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'small-12 large-8 columns' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            'Projects (',
                            this.props.projects.length,
                            ')'
                        ),
                        this.props.projects.length > 0 ? _react2.default.createElement(
                            'div',
                            { className: 'results' },
                            this.props.projects.map(function (project) {
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
                        ) : _react2.default.createElement(
                            'div',
                            { className: 'no-results' },
                            _react2.default.createElement(
                                'h2',
                                null,
                                'No results, please try another search.'
                            ),
                            _react2.default.createElement(
                                'a',
                                { onClick: this.resetFilters, href: '#' },
                                'Reset Search Filters'
                            )
                        )
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
                                'Did You Know?'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a cursus augue. Sed a euismod lorem. Pellentesque posuere molestie nisi vitae viverra. Etiam volutpat elit vel elit semper porttitor. Nam non eros nunc. Phasellus hendrerit felis tortor, at aliquet est scelerisque in. Aenean eget nibh a lacus iaculis tempor non ut magna.'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                'Learn More'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Search;
}(_react.Component);

Search.propTypes = {
    setHeaderTab: _react.PropTypes.func.isRequired,
    projects: _react.PropTypes.array.isRequired,
    cities: _react.PropTypes.array.isRequired,
    projectTypes: _react.PropTypes.array.isRequired,
    searchProjects: _react.PropTypes.func.isRequired
};

exports.default = Search;