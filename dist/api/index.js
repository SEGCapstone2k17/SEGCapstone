'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pgp = require('pg-promise')();

// Create router
var router = _express2.default.Router();

// Connect to db
var db = pgp(_config2.default.connectionString);

// GET Routes
router.get('/clients', function (req, res) {
    var query = void 0;
    if (Object.keys(req.query).length !== 0) {
        if (parseInt(req.query.city) !== 0) {
            query = 'SELECT * FROM client, city WHERE client.city_id=city.city_id AND LOWER(client.name) LIKE LOWER(\'%' + req.query.name + '%\') AND client.city_id=' + parseInt(req.query.city);
        } else {
            query = 'SELECT * FROM client, city WHERE client.city_id=city.city_id AND LOWER(client.name) LIKE LOWER(\'%' + req.query.name + '%\')';
        }
    } else {
        query = 'SELECT * FROM client, city WHERE client.city_id=city.city_id';
    }
    db.any(query).then(function (data) {
        res.send({ clients: data });
    }).catch(function (error) {
        console.error(error);
        res.status(404).send('Bad Request');
    });
});

router.get('/clients/:clientID/projects', function (req, res) {
    var query = 'SELECT * FROM project, city, project_type WHERE project.client_id=' + req.params.clientID + ' AND project.city_id=city.city_id AND project.project_type=project_type.type_id';
    db.any(query).then(function (data) {
        res.send({ projects: data });
    }).catch(function (error) {
        console.error(error);
        res.status(404).send('Bad Request');
    });
});

router.get('/clients/:clientID', function (req, res) {
    var query = 'SELECT * FROM client, city WHERE client_id=' + req.params.clientID + ' AND client.city_id=city.city_id';
    db.any(query).then(function (data) {
        res.send(data);
    }).catch(function (error) {
        console.error(error);
        res.status(404).send('Bad Request');
    });
});

router.get('/projects', function (req, res) {
    var query = void 0;
    if (Object.keys(req.query).length !== 0) {
        if (parseInt(req.query.city) !== 0 && parseInt(req.query.type) === 0) {
            query = 'SELECT * FROM project, city, project_type WHERE project.city_id=city.city_id AND project.project_type=project_type.type_id AND LOWER(project.name) LIKE LOWER(\'%' + req.query.name + '%\') AND project.city_id=' + req.query.city;
        } else if (parseInt(req.query.city) === 0 && parseInt(req.query.type) !== 0) {
            query = 'SELECT * FROM project, city, project_type WHERE project.city_id=city.city_id AND project.project_type=project_type.type_id AND LOWER(project.name) LIKE LOWER(\'%' + req.query.name + '%\') AND project.project_type=' + req.query.type;
        } else if (parseInt(req.query.city) !== 0 && parseInt(req.query.type) !== 0) {
            query = 'SELECT * FROM project, city, project_type WHERE project.city_id=city.city_id AND project.project_type=project_type.type_id AND LOWER(project.name) LIKE LOWER(\'%' + req.query.name + '%\') AND project.project_type=' + req.query.type + ' AND project.city_id=' + req.query.city;
        } else {
            query = 'SELECT * FROM project, city, project_type WHERE project.city_id=city.city_id AND project.project_type=project_type.type_id AND LOWER(project.name) LIKE LOWER(\'%' + req.query.name + '%\')';
        }
    } else {
        query = 'SELECT * FROM project, city, project_type WHERE project.city_id=city.city_id AND project.project_type=project_type.type_id';
    }
    db.any(query).then(function (data) {
        res.send({ projects: data });
    }).catch(function (error) {
        console.error(error);
        res.status(404).send('Bad Request');
    });
});

router.get('/projects/:projectID', function (req, res) {
    var query = 'SELECT * FROM project, city, project_type WHERE project_id=' + req.params.projectID + ' AND project.city_id=city.city_id AND project.project_type=project_type.type_id';
    db.any(query).then(function (data) {
        res.send(data);
    }).catch(function (error) {
        console.error(error);
        res.status(404).send('Bad Request');
    });
});

router.get('/cities', function (req, res) {
    var query = 'SELECT * FROM city';
    db.any(query).then(function (data) {
        res.send({ cities: data });
    }).catch(function (error) {
        console.error(error);
        res.status(404).send('Bad Request');
    });
});

router.get('/projectTypes', function (req, res) {
    var query = 'SELECT * FROM project_type';
    db.any(query).then(function (data) {
        res.send({ projectTypes: data });
    }).catch(function (error) {
        console.error(error);
        res.status(404).send('Bad Request');
    });
});

router.get('*', function (req, res) {
    res.status(404).send('404 - Bad Request');
});

// POST Routes
router.post('/clients', function (req, res) {
    var newClient = req.body;
    var query = 'INSERT INTO client(date_created, name, telephone, email, street, postal_code, city_id) VALUES (now(), $1, $2, $3, $4, $5, $6) RETURNING client_id';
    db.one(query, ['' + newClient.clientName, '' + newClient.telephone, '' + newClient.email, '' + newClient.street, '' + newClient.postalCode, '' + newClient.cityID]).then(function (data) {
        res.send({ clientID: data.client_id });
    }).catch(function (error) {
        console.error(error);
        res.status(404).send('Bad Request');
    });
});

router.post('/projects', function (req, res) {
    var newProject = req.body;
    var query = 'INSERT INTO project(date_created, name, description, street, postal_code, city_id, start_date, end_date, estimated_cost, final_cost, contract, client_id, project_status, project_type) VALUES (now(), \'' + newProject.projectName + '\', \'' + newProject.projectDescription + '\', \'' + newProject.street + '\', \'' + newProject.postalCode + '\', ' + newProject.cityID + ', \'' + newProject.startDate + '\', \'' + newProject.endDate + '\', NULLIF(' + newProject.estimatedCost + ', -1), NULLIF(' + newProject.finalCost + ', -1), \'' + newProject.contract + '\', ' + newProject.clientID + ', 1, ' + newProject.projectType + ') RETURNING project_id';
    db.any(query).then(function (data) {
        res.send({ projectID: data[0].project_id });
    }).catch(function (error) {
        console.error(error);
        res.status(404).send('Bad Request');
    });
});

// PUT Routes
router.put('/clients', function (req, res) {
    var updateClient = req.body;
    var query = 'UPDATE client SET name=\'' + updateClient.clientName + '\', telephone=\'' + updateClient.telephone + '\', email=\'' + updateClient.email + '\', street=\'' + updateClient.street + '\', postal_code=\'' + updateClient.postalCode + '\', city_id=' + updateClient.cityID + ' WHERE client_id=' + updateClient.clientID;
    db.any(query).then(function () {
        res.send({ clientID: updateClient.clientID });
    }).catch(function (error) {
        console.error(error);
        res.status(404).send('Bad Request');
    });
});

router.put('/projects', function (req, res) {
    var updateProject = req.body;
    var query = 'UPDATE project SET name=\'' + updateProject.projectName + '\', description=\'' + updateProject.projectDescription + '\', street=\'' + updateProject.street + '\', postal_code=\'' + updateProject.postalCode + '\', city_id=' + updateProject.cityID + ', start_date=\'' + updateProject.startDate + '\', end_date=\'' + updateProject.endDate + '\', estimated_cost=NULLIF(' + updateProject.estimatedCost + ', -1), final_cost=NULLIF(' + updateProject.finalCost + ', -1), contract=\'' + updateProject.contract + '\', client_id=' + updateProject.clientID + ', project_type=' + updateProject.projectType + ' WHERE project_id=' + updateProject.projectID;
    db.any(query).then(function () {
        res.send({ projectID: updateProject.projectID });
    }).catch(function (error) {
        console.error(error);
        res.status(404).send('Bad Request');
    });
});

// DELETE Routes
router.delete('/clients/:clientID', function (req, res) {
    var query = 'DELETE FROM client WHERE client_id=' + req.params.clientID;
    db.any(query).then(function () {
        res.send({ deleteSuccessful: 1 });
    }).catch(function (error) {
        console.error(error);
        res.status(404).send('Bad Request');
    });
});

router.delete('/projects/:projectID', function (req, res) {
    var query = 'DELETE FROM project WHERE project_id=' + req.params.projectID;
    db.any(query).then(function () {
        res.send({ deleteSuccessful: 1 });
    }).catch(function (error) {
        console.error(error);
        res.status(404).send('Bad Request');
    });
});

// Export api router
exports.default = router;
