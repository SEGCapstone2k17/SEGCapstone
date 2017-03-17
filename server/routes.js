import api from './api';
import path from 'path';
const routes = require('express').Router();

const _view_path = path.join(__dirname + '/../public/index.html');

routes.get('/', function(req, res){
    res.sendFile(_view_path);
});

routes.get('/home', function(req, res){
    res.sendFile(_view_path);
});

routes.get('/customers', function(req,res,next){
    console.log('Get customers');
    res.sendFile(_view_path);
});

routes.get('/customers/:id', function(req,res,next){
    console.log('Get customer by id');
    res.sendFile(_view_path);
});

routes.get('/addCustomer', function(req,res,next){
    console.log('Add customer form');
    res.sendFile(_view_path);
});

routes.get('/editCustomer/:id', function(req,res,next){
    console.log('Edit customer form');
    res.sendFile(_view_path);
});

routes.get('/projects', function(req, res, next){
    console.log("Get projects");
    res.sendFile(_view_path);
});

routes.get('/projects/:id', function(req,res,next){
    console.log('Get project by id');
    res.sendFile(_view_path);
});

routes.get('/addProject', function(req,res,next){
    console.log('Add project form');
    res.sendFile(_view_path);
});

routes.get('/editProject/:id', function(req,res,next){
    console.log('Edit project form');
    res.sendFile(_view_path);
});

routes.use('/api', api);

routes.get('*', function(req, res) {
    res.send('Sorry, this is an invalid URL. 404 error!');
});

module.exports = routes;
