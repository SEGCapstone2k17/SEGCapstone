'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pikaday = require('pikaday');

var _pikaday2 = _interopRequireDefault(_pikaday);

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
            var newProject = {
                projectName: _this.refs.projectName.value,
                projectDescription: _this.refs.projectDescription.value,
                street: _this.refs.street.value,
                postalCode: _this.refs.postalCode.value,
                cityID: _this.refs.city.value,
                startDate: _this.refs.startDate.value == '' ? '1990-01-01' : _this.refs.startDate.value,
                endDate: _this.refs.endDate.value == '' ? '1990-01-01' : _this.refs.endDate.value,
                estimatedCost: _this.refs.estimatedCost.value == '' ? -1 : _this.refs.estimatedCost.value,
                finalCost: _this.refs.finalCost.value == '' ? -1 : _this.refs.finalCost.value,
                clientID: _this.refs.clientID.value,
                projectType: parseInt(_this.refs.projectType.value)
            };
            _this.props.addProject(newProject);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Add, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Update page title
            document.title = 'Add New Project';

            // Update Active Tab
            this.props.setHeaderTab(3);

            // Create datepickers
            new _pikaday2.default({ field: document.getElementById('project-start') });
            new _pikaday2.default({ field: document.getElementById('project-end') });
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
                            'Add a New Project'
                        ),
                        _react2.default.createElement(
                            'div',
                            { id: 'project-add', className: 'dashboard-block' },
                            _react2.default.createElement(
                                'form',
                                { onSubmit: this.handleSubmit },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'small-12 columns' },
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'project-name' },
                                            'Name ',
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'required' },
                                                '*'
                                            )
                                        ),
                                        _react2.default.createElement('input', { type: 'text', ref: 'projectName', name: 'name', className: 'project-text-form', id: 'project-name', required: true })
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
                                            { htmlFor: 'project-type' },
                                            'Type  ',
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'required' },
                                                '*'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'select',
                                            { name: 'type[]', ref: 'projectType', className: 'project-select-form', id: 'project-type', multiple: true, required: true },
                                            this.props.projectTypes.map(function (type) {
                                                return _react2.default.createElement(
                                                    'option',
                                                    { key: type.type_id, value: type.type_id },
                                                    type.type
                                                );
                                            })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'small-12 medium-6 columns' },
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'project-description' },
                                            'Description'
                                        ),
                                        _react2.default.createElement('textarea', { ref: 'projectDescription', name: 'description', className: 'project-textarea-form', id: 'project-description' })
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
                                            { htmlFor: 'project-street' },
                                            'Street ',
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'required' },
                                                '*'
                                            )
                                        ),
                                        _react2.default.createElement('input', { type: 'text', ref: 'street', name: 'street', className: 'project-text-form', id: 'project-street', required: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'small-12 medium-4 columns' },
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'project-postal-code' },
                                            'Postal Code ',
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'required' },
                                                '*'
                                            )
                                        ),
                                        _react2.default.createElement('input', { type: 'text', ref: 'postalCode', name: 'postalCode', className: 'project-text-form postal-code-field', id: 'project-postal-code', maxLength: '6', required: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'small-12 medium-4 columns' },
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'project-city' },
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
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'small-12 medium-6 columns' },
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'project-start' },
                                            'Start Date'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', ref: 'startDate', name: 'startDate', className: 'project-text-form', id: 'project-start', readOnly: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'small-12 medium-6 columns' },
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'project-end' },
                                            'End Date'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', ref: 'endDate', name: 'endDate', className: 'project-text-form', id: 'project-end', readOnly: true })
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
                                            { htmlFor: 'project-estimate' },
                                            'Estimated Cost ($)'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', ref: 'estimatedCost', name: 'estimatedCost', className: 'project-text-form', id: 'project-estimate' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'small-12 medium-6 columns' },
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'project-cost' },
                                            'Final Cost ($)'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', ref: 'finalCost', name: 'finalCost', className: 'project-text-form', id: 'project-cost' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'small-12 columns' },
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'project-contract' },
                                            'Contract'
                                        ),
                                        _react2.default.createElement('input', { type: 'file', ref: 'contract', name: 'contract', className: 'project-upload-form', id: 'project-contract' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'small-12 columns' },
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'project-client' },
                                            'Project Client ',
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'required' },
                                                '*'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'select',
                                            { ref: 'clientID', name: 'client', className: 'client-select-form', id: 'client-city', required: true },
                                            this.props.clients.map(function (client) {
                                                return _react2.default.createElement(
                                                    'option',
                                                    { key: client.client_id, value: client.client_id },
                                                    client.name
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
                                _react2.default.createElement('input', { type: 'submit', name: 'submit', className: 'btn', id: 'project-submit', value: 'Add Project' })
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
    addProject: _react.PropTypes.func.isRequired,
    cities: _react.PropTypes.array.isRequired,
    clients: _react.PropTypes.array.isRequired,
    projectTypes: _react.PropTypes.array.isRequired
};

exports.default = Add;
