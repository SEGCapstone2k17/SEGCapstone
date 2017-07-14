'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _api = require('../../api');

var api = _interopRequireWildcard(_api);

var _Loading = require('../Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edit = function (_Component) {
    _inherits(Edit, _Component);

    function Edit(props) {
        _classCallCheck(this, Edit);

        var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).call(this, props));

        _this.getClient = function (clientID) {
            api.getClientByID(clientID).then(function (client) {
                _this.setState({
                    client: client
                });
            });
        };

        _this.handleSubmit = function (e) {
            e.preventDefault();
            var newClient = {
                clientID: _this.refs.clientID.value,
                clientName: _this.refs.name.value,
                email: _this.refs.email.value,
                telephone: _this.refs.phone.value,
                street: _this.refs.street.value,
                postalCode: _this.refs.postalCode.value,
                cityID: _this.refs.city.value
            };
            _this.props.editClient(newClient);
        };

        _this.handlePhone = function (e) {
            e.target.value = e.target.value.replace(/^(\d{3})(\d{3})(\d)+$/, '($1) $2-$3');
        };

        _this.state = {
            client: null
        };
        return _this;
    }

    _createClass(Edit, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Update page title
            document.title = 'Edit Client ' + this.props.match.params.clientID;

            // Update Active Tab (zero to hide)
            this.props.setHeaderTab(0);

            // Get client
            this.getClient(this.props.match.params.clientID);
        }
    }, {
        key: 'currentContent',
        value: function currentContent() {
            if (this.state.client) {
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
                                'Update Client'
                            ),
                            _react2.default.createElement(
                                'form',
                                { onSubmit: this.handleSubmit },
                                _react2.default.createElement('input', { type: 'hidden', ref: 'clientID', name: 'client_id', value: this.state.client.client_id }),
                                _react2.default.createElement(
                                    'div',
                                    { id: 'client-add', className: 'dashboard-block' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'small-12 columns' },
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'client-first-name' },
                                                'Name ',
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'required' },
                                                    '*'
                                                )
                                            ),
                                            _react2.default.createElement('input', { type: 'text', ref: 'name', name: 'name', className: 'client-text-form', id: 'client-first-name', defaultValue: this.state.client.name, required: true })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'small-12 medium-6 columns' },
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'client-email' },
                                                'Email'
                                            ),
                                            _react2.default.createElement('input', { type: 'email', ref: 'email', name: 'email', className: 'client-text-form', id: 'client-email', defaultValue: this.state.client.email })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'small-12 medium-6 columns' },
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'client-phone' },
                                                'Phone Number ',
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'required' },
                                                    '*'
                                                )
                                            ),
                                            _react2.default.createElement('input', { type: 'text', ref: 'phone', name: 'phone', className: 'client-text-form', id: 'client-phone', maxLength: '14', onKeyUp: this.handlePhone, defaultValue: this.state.client.telephone, required: true })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'small-12 medium-4 columns' },
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'client-street' },
                                                'Street ',
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'required' },
                                                    '*'
                                                )
                                            ),
                                            _react2.default.createElement('input', { type: 'text', ref: 'street', name: 'street', className: 'client-text-form', id: 'client-street', defaultValue: this.state.client.street, required: true })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'small-12 medium-4 columns' },
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'client-postal-code' },
                                                'Postal Code ',
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'required' },
                                                    '*'
                                                )
                                            ),
                                            _react2.default.createElement('input', { type: 'text', ref: 'postalCode', name: 'postalCode', className: 'client-text-form postal-code-field', id: 'client-postal-code', defaultValue: this.state.client.postal_code, maxLength: '6', required: true })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'small-12 medium-4 columns' },
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'client-city' },
                                                'City ',
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'required' },
                                                    '*'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'select',
                                                { name: 'city', ref: 'city', className: 'client-select-form', id: 'client-city', defaultValue: this.state.client.city_id, required: true },
                                                this.props.cities.map(function (city) {
                                                    return _react2.default.createElement(
                                                        'option',
                                                        { key: city.city_id, value: city.city_id },
                                                        city.city
                                                    );
                                                })
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'required-info' },
                                        'Fields marked with * are required.'
                                    ),
                                    _react2.default.createElement('input', { type: 'submit', name: 'submit', className: 'btn', id: 'client-submit', value: 'Update Client' })
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

    return Edit;
}(_react.Component);

Edit.propTypes = {
    match: _react.PropTypes.any,
    setHeaderTab: _react.PropTypes.func.isRequired,
    cities: _react.PropTypes.array.isRequired,
    editClient: _react.PropTypes.func.isRequired
};

exports.default = Edit;