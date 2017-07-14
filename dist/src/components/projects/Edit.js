'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pikaday = require('pikaday');

var _pikaday2 = _interopRequireDefault(_pikaday);

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

        _this.addDatepickers = function () {
            // Create datepickers

            new _pikaday2.default({ field: document.getElementById('project-edit-start') });
            new _pikaday2.default({ field: document.getElementById('project-edit-end') });
        };

        _this.getProject = function (projectID) {
            api.getProjectByID(projectID).then(function (project) {
                _this.setState({
                    project: project
                }, function () {
                    this.addDatepickers();
                });
            });
        };

        _this.handleSubmit = function (e) {
            e.preventDefault();
            var newProject = {
                projectID: _this.refs.projectID.value,
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
            _this.props.editProject(newProject);
        };

        _this.state = {
            project: null
        };
        return _this;
    }

    _createClass(Edit, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Update page title
            document.title = 'Edit Project ' + this.props.match.params.projectID;

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
                                'Update Project'
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'project-add', className: 'dashboard-block' },
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit },
                                    _react2.default.createElement('input', { type: 'hidden', ref: 'projectID', name: 'projecT_id', value: this.state.project.project_id }),
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
                                            _react2.default.createElement('input', { type: 'text', ref: 'projectName', name: 'name', className: 'project-text-form', id: 'project-name', defaultValue: this.state.project.name, required: true })
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
                                                { name: 'type[]', ref: 'projectType', className: 'project-select-form', id: 'project-type', multiple: true, defaultValue: [this.state.project.project_type], required: true },
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
                                            _react2.default.createElement('textarea', { ref: 'projectDescription', name: 'description', className: 'project-textarea-form', id: 'project-description', defaultValue: this.state.project.description })
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
                                            _react2.default.createElement('input', { type: 'text', ref: 'street', name: 'street', className: 'project-text-form', id: 'project-street', defaultValue: this.state.project.street, required: true })
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
                                            _react2.default.createElement('input', { onKeyPress: this.handlePostalCode, type: 'text', ref: 'postalCode', name: 'postalCode', className: 'project-text-form  postal-code-field', id: 'project-postal-code', defaultValue: this.state.project.postal_code, maxLength: '6', required: true })
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
                                                { ref: 'city', name: 'city', className: 'client-select-form', id: 'client-city', defaultValue: this.state.project.city_id, required: true },
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
                                            _react2.default.createElement('input', { type: 'text', ref: 'startDate', name: 'startDate', className: 'project-text-form', id: 'project-edit-start', defaultValue: this.state.project.start_date == '1990-01-01T05:00:00.000Z' ? '' : this.state.project.start_date, readOnly: true })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'small-12 medium-6 columns' },
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'project-end' },
                                                'End Date'
                                            ),
                                            _react2.default.createElement('input', { type: 'text', ref: 'endDate', name: 'endDate', className: 'project-text-form', id: 'project-edit-end', defaultValue: this.state.project.end_date == '1990-01-01T05:00:00.000Z' ? '' : this.state.project.end_date, readOnly: true })
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
                                            _react2.default.createElement('input', { type: 'text', ref: 'estimatedCost', name: 'estimatedCost', className: 'project-text-form', id: 'project-estimate', defaultValue: this.state.project.estimated_cost })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'small-12 medium-6 columns' },
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'project-cost' },
                                                'Final Cost ($)'
                                            ),
                                            _react2.default.createElement('input', { type: 'text', ref: 'finalCost', name: 'finalCost', className: 'project-text-form', id: 'project-cost', defaultValue: this.state.project.final_cost })
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
                                            _react2.default.createElement('input', { type: 'file', ref: 'contract', name: 'contract', className: 'project-upload-form', id: 'project-contract', defaultValue: this.state.project.contract })
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
                                                { ref: 'clientID', name: 'client', className: 'client-select-form', id: 'client-city', defaultValue: this.state.project.client_id, required: true },
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
                                    _react2.default.createElement('input', { type: 'submit', name: 'submit', className: 'btn', id: 'project-submit', value: 'Update Project' })
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
    projectTypes: _react.PropTypes.array.isRequired,
    cities: _react.PropTypes.array.isRequired,
    clients: _react.PropTypes.array.isRequired,
    editProject: _react.PropTypes.func.isRequired
};

exports.default = Edit;