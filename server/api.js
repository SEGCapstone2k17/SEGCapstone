var express = require('express');
var api_routes = express.Router();

var db = require('./queries');

api_routes.post('/addCustomer', function(req,res,next){
    console.log('Adding customer');
    db.addCustomer(req,res,next);
});

api_routes.post('/editCustomer', function(req,res,next){
    console.log('Editing customer');
    db.editCustomer(req,res,next);
});

// Get the current list of filtered customers
api_routes.get('/customers', function(req, res, next){
    console.log('Searching customers');
    db.searchCustomers(req, res, next);
});

api_routes.get('/customers/:id', function(req, res, next) {
    console.log('Getting customer by id');
    db.getCustomerById(req, res, next);
});

api_routes.delete('/customers/:id', function(req, res, next) {
    console.log('Deleting customer by id');
    db.deleteCustomerById(req, res, next);
});

api_routes.post('/addProject', function(req,res,next){
    console.log('Adding project');
    db.addProject(req,res,next);
});

api_routes.post('/editProject', function(req,res,next){
    console.log('Editing project');
    db.editProject(req,res,next);
});

// Get the current list of filtered projects
api_routes.get('/projects', function(req, res, next){
    console.log("Searching projects");
    db.searchProjectsWithCustomers(req, res, next);
});

api_routes.get('/projects/:id', function(req, res, next) {
    console.log('Getting project by id');
    db.getProjectById(req, res, next);
});

api_routes.delete('/projects/:id', function(req, res, next) {
    console.log('Deleting project by id');
    db.deleteProjectById(req, res, next);
});

module.exports = api_routes;
