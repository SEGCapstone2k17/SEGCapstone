var api = require('./api');
var path = require ('path');
const routes = require('express').Router();

routes.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

routes.get('/home', function(req, res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

routes.get('/customers', function(req,res,next){
    console.log('Get customers');
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

routes.get('/customers/:id', function(req,res,next){
    console.log('Get customer by id');
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

routes.get('/addCustomer', function(req,res,next){
    console.log('Add customer form');
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

routes.get('/projects', function(req, res, next){
    console.log("Get projects");
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

routes.get('/projects/:id', function(req,res,next){
    console.log('Get project by id');
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

routes.get('/addProject', function(req,res,next){
    console.log('Add project form');
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

routes.use('/api', api);

routes.get('*', function(req, res) {
    res.send('Sorry, this is an invalid URL. 404 error!');
});

module.exports = routes;
