'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProjectTypes = exports.getCities = exports.deleteProject = exports.deleteClient = exports.editProject = exports.editClient = exports.addProject = exports.addClient = exports.getProjectByID = exports.searchProjects = exports.getProjects = exports.getProjectsByClientID = exports.getClientByID = exports.searchClients = exports.getClients = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Get all clients
var getClients = exports.getClients = function getClients() {
    return _axios2.default.get('/api/clients').then(function (resp) {
        return resp.data.clients;
    });
};

// Search clients
var searchClients = exports.searchClients = function searchClients(query) {
    return _axios2.default.get('/api/clients?name=' + query.name + '&city=' + query.city).then(function (resp) {
        return resp.data.clients;
    });
};

// Get client by ID
var getClientByID = exports.getClientByID = function getClientByID(clientID) {
    return _axios2.default.get('/api/clients/' + clientID).then(function (resp) {
        return resp.data[0];
    });
};

// Get all projects by Client ID
var getProjectsByClientID = exports.getProjectsByClientID = function getProjectsByClientID(clientID) {
    return _axios2.default.get('/api/clients/' + clientID + '/projects').then(function (resp) {
        return resp.data.projects;
    });
};

// Get all projects
var getProjects = exports.getProjects = function getProjects() {
    return _axios2.default.get('/api/projects').then(function (resp) {
        return resp.data.projects;
    });
};

// Search Projects
var searchProjects = exports.searchProjects = function searchProjects(query) {
    return _axios2.default.get('/api/projects?name=' + query.name + '&city=' + query.city + '&type=' + query.type).then(function (resp) {
        return resp.data.projects;
    });
};

// Get project by ID
var getProjectByID = exports.getProjectByID = function getProjectByID(projectID) {
    return _axios2.default.get('/api/projects/' + projectID).then(function (resp) {
        return resp.data[0];
    });
};

// Add client
var addClient = exports.addClient = function addClient(client) {
    return _axios2.default.post('/api/clients', {
        clientName: client.clientName,
        email: client.email,
        telephone: client.telephone,
        street: client.street,
        postalCode: client.postalCode,
        cityID: client.cityID
    }).then(function (resp) {
        return resp.data;
    });
};

// Add project
var addProject = exports.addProject = function addProject(project) {
    return _axios2.default.post('/api/projects', {
        projectName: project.projectName,
        projectDescription: project.projectDescription,
        street: project.street,
        postalCode: project.postalCode,
        cityID: project.cityID,
        startDate: project.startDate,
        endDate: project.endDate,
        estimatedCost: project.estimatedCost,
        finalCost: project.finalCost,
        clientID: project.clientID,
        contract: 'contract',
        projectType: project.projectType
    }).then(function (resp) {
        return resp.data;
    });
};

// Edit client
var editClient = exports.editClient = function editClient(client) {
    return _axios2.default.put('/api/clients', {
        clientID: client.clientID,
        clientName: client.clientName,
        email: client.email,
        telephone: client.telephone,
        street: client.street,
        postalCode: client.postalCode,
        cityID: client.cityID
    }).then(function (resp) {
        return resp.data;
    });
};

// Edit Project
var editProject = exports.editProject = function editProject(project) {
    return _axios2.default.put('/api/projects', {
        projectID: project.projectID,
        projectName: project.projectName,
        projectDescription: project.projectDescription,
        street: project.street,
        postalCode: project.postalCode,
        cityID: project.cityID,
        startDate: project.startDate,
        endDate: project.endDate,
        estimatedCost: project.estimatedCost,
        finalCost: project.finalCost,
        clientID: project.clientID,
        contract: 'contract',
        projectType: project.projectType
    }).then(function (resp) {
        return resp.data;
    });
};

// Delete Client by ID
var deleteClient = exports.deleteClient = function deleteClient(clientID) {
    return _axios2.default.delete('/api/clients/' + clientID).then(function (resp) {
        return resp.data.deleteSucessful;
    });
};

// Delete Project by ID
var deleteProject = exports.deleteProject = function deleteProject(projectID) {
    return _axios2.default.delete('/api/projects/' + projectID).then(function (resp) {
        return resp.data.deleteSucessful;
    });
};

// Get cities
var getCities = exports.getCities = function getCities() {
    return _axios2.default.get('/api/cities').then(function (resp) {
        return resp.data.cities;
    });
};

// Get all projects
var getProjectTypes = exports.getProjectTypes = function getProjectTypes() {
    return _axios2.default.get('/api/projectTypes').then(function (resp) {
        return resp.data.projectTypes;
    });
};