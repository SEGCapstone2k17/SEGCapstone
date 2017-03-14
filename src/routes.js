/*jshint esversion: 6 */
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, IndexRoute, Route, Link } from 'react-router'
import Root from './containers/Root';
import Projects from './containers/Projects';
import Customers from './containers/Customers';
import Customer from './containers/CustomerPage';
import Project from './containers/ProjectPage';
import { Summary } from './components/Summary';
import { AddCustomer } from './components/AddCustomer';
import AddProject from './containers/AddProject';

let rootElement = document.getElementById('app');

render((
        <Router history = {browserHistory}>
            <Route path = "/" component = {Root}>
                <IndexRoute component = { Summary } />
                <Route path = "customers" component = { Customers } />
                <Route path = "customers/:id" component = { Customer } />
                <Route path = "addCustomer" component = { AddCustomer } />
                <Route path = "projects" component = { Projects } />
                <Route path = "projects/:id" component = { Project } />
                <Route path = "addProject" component = { AddProject } />
            </Route>
        </Router>
), rootElement);
