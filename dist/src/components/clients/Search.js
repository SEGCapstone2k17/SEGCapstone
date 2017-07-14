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

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.handleSubmit = function (e) {
            e.preventDefault();
            var query = {
                name: _this.refs.clientName.value,
                city: _this.refs.cityID.value
            };
            _this.props.searchClients(query);
        };

        _this.resetFilters = function (e) {
            e.preventDefault();
            _this.refs.clientName.value = '';
            _this.refs.cityID.value = '0';
            _this.handleSubmit(event);
        };

        return _this;
    }

    _createClass(Search, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Update page title
            document.title = 'Search Clients';

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
                            { id: 'client-filter', className: 'dashboard-block' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'small-12 large-8 columns' },
                                    _react2.default.createElement(
                                        'div',
                                        { id: 'client-search' },
                                        _react2.default.createElement(
                                            'button',
                                            null,
                                            _react2.default.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true' })
                                        ),
                                        _react2.default.createElement('input', { onKeyUp: this.handleSubmit, type: 'text', ref: 'clientName', name: 'searchClient', placeholder: 'Search for clients' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'small-12 large-4 columns' },
                                    _react2.default.createElement(
                                        'div',
                                        { id: 'client-refine' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'client-refine-result' },
                                            _react2.default.createElement(
                                                'select',
                                                { onChange: this.handleSubmit, ref: 'cityID' },
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
                            'Clients (',
                            this.props.clients.length,
                            ')'
                        ),
                        this.props.clients.length > 0 ? _react2.default.createElement(
                            'div',
                            { className: 'results' },
                            this.props.clients.map(function (client) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: client.client_id, className: 'client-result dashboard-block' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'small-12 large-9 columns' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'client-result-info' },
                                                _react2.default.createElement(
                                                    'h3',
                                                    null,
                                                    client.name
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        'Location: '
                                                    ),
                                                    client.city,
                                                    ', Ontario'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        'Email: '
                                                    ),
                                                    client.email
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        'Telephone: '
                                                    ),
                                                    client.telephone
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'small-12 large-3 columns' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'client-result-actions' },
                                                _react2.default.createElement(
                                                    _reactRouterDom.Link,
                                                    { className: 'btn-dark', to: '/clients/' + client.client_id },
                                                    'View Client'
                                                ),
                                                _react2.default.createElement(
                                                    _reactRouterDom.Link,
                                                    { className: 'btn-dark', to: '/clients/' + client.client_id + '/edit' },
                                                    'Edit Client'
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
    clients: _react.PropTypes.array.isRequired,
    cities: _react.PropTypes.array.isRequired,
    searchClients: _react.PropTypes.func.isRequired
};

exports.default = Search;