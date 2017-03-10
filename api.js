var express = require('express');
var api_routes = express.Router();

var db = require('./queries');

// Get the current list of filtered customers
api_routes.get('/customers', function(req, res, next){
    console.log('Searching customers');
    db.searchCustomers(req, res, next);
});

api_routes.get('/customers/:id', function(req, res, next) {
    console.log('Getting customer by id');
    db.getCustomerById(req, res, next);
});

api_routes.post('/addCustomer', function(req,res,next){
    console.log('Adding customer');
    db.addCustomer(req,res,next);
});

api_routes.post('/addProject', function(req,res,next){
    console.log('Adding project');
    db.addProject(req,res,next);
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

module.exports = api_routes;
