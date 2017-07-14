'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Add = function (_Component) {
    _inherits(Add, _Component);

    function Add() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Add);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Add.__proto__ || Object.getPrototypeOf(Add)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
            e.preventDefault();
            var newClient = {
                clientName: _this.refs.fName.value + ' ' + _this.refs.lName.value,
                email: _this.refs.email.value,
                telephone: _this.refs.phone.value,
                street: _this.refs.street.value,
                postalCode: _this.refs.postalCode.value,
                cityID: _this.refs.city.value
            };
            _this.props.addClient(newClient);
        }, _this.handlePhone = function (e) {
            e.target.value = e.target.value.replace(/^(\d{3})(\d{3})(\d)+$/, '($1) $2-$3');
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Add, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Update page title
            document.title = 'Add New Client';

            // Update Active Tab
            this.props.setHeaderTab(3);
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
                            'Add a New Client'
                        ),
                        _react2.default.createElement(
                            'div',
                            { id: 'client-add', className: 'dashboard-block' },
                            _react2.default.createElement(
                                'form',
                                { onSubmit: this.handleSubmit },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'small-12 medium-6 columns' },
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'client-first-name' },
                                            'First Name ',
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'required' },
                                                '*'
                                            )
                                        ),
                                        _react2.default.createElement('input', { type: 'text', ref: 'fName', name: 'fName', className: 'client-text-form', id: 'client-first-name', required: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'small-12 medium-6 columns' },
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'client-last-name' },
                                            'Last Name ',
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'required' },
                                                '*'
                                            )
                                        ),
                                        _react2.default.createElement('input', { type: 'text', ref: 'lName', name: 'lName', className: 'client-text-form', id: 'client-last-name', required: true })
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
                                        _react2.default.createElement('input', { type: 'email', ref: 'email', name: 'email', className: 'client-text-form', id: 'client-email' })
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
                                        _react2.default.createElement('input', { type: 'text', ref: 'phone', name: 'phone', className: 'client-text-form', id: 'client-phone', maxLength: '14', onKeyUp: this.handlePhone, required: true })
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
                                        _react2.default.createElement('input', { type: 'text', ref: 'street', name: 'street', className: 'client-text-form', id: 'client-street', required: true })
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
                                        _react2.default.createElement('input', { type: 'text', ref: 'postalCode', name: 'postalCode', className: 'client-text-form postal-code-field', id: 'client-postal-code', maxLength: '6', required: true })
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
                                            { ref: 'city', name: 'city', className: 'client-select-form', id: 'client-city', required: true },
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
                                _react2.default.createElement('input', { type: 'submit', name: 'submit', className: 'btn', id: 'client-submit', value: 'Add Client' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Add;
}(_react.Component);

Add.propTypes = {
    setHeaderTab: _react.PropTypes.func.isRequired,
    addClient: _react.PropTypes.func.isRequired,
    cities: _react.PropTypes.array.isRequired
};

exports.default = Add;
