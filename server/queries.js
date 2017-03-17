var pgp = require('pg-promise')();
var connectionString = "postgres://postgres:1q2w3e4r@localhost:5432/CapstoneMock";
var db = pgp(connectionString);

// attempts to add a customer to the database
function addCustomer(req, res, next) {
    var query = '';
    if(req.body) {
        let values = `(\'${req.body.fName}\', \'${req.body.lName}\',\'${req.body.phone}\',\'${req.body.email}\',\'${req.body.street}\',\'${req.body.postalCode}\',\'${req.body.city}\')`;
        query = `INSERT INTO customer ("first_name", "last_name", "telephone", "email", "street", "postal_code", "city") VALUES ${values} RETURNING id`;
    }
    db.any(query)
        .then(data => {
            res.redirect('/customers/' + data[0].id);
        })
        .catch(err => {
            return next(err);
        });
}

// attempts to edit a customer in the database
function editCustomer(req, res, next) {
    var query = '';
    if(req.body) {
        let id = req.body.id;
        let values = `(\'${req.body.fName}\', \'${req.body.lName}\',\'${req.body.phone}\',\'${req.body.email}\',\'${req.body.street}\',\'${req.body.postalCode}\', \'${req.body.city}\')`;
        query = `UPDATE customer SET ("first_name", "last_name", "telephone", "email", "street", "postal_code", "city") = ${values} WHERE id = ${id} RETURNING id`;
    }
    db.any(query)
        .then(data => {
            res.redirect('/customers/' + data[0].id);
        })
        .catch(err => {
            return next(err);
        });
}

// searches for all customers
function searchCustomers(req, res, next) {
    var query = 'SELECT * FROM customer';
    if(req.query.s) {
        query = 'SELECT * FROM customer WHERE LOWER(first_name) LIKE LOWER(\'%' + req.query.s + '%\')';
    }
    db.any(query)
        .then(data => {
            res.send({customers: data});
        })
        .catch(err => {
            return next(err);
        });
}

// retrieves a specific customer
function getCustomerById(req, res, next) {
    var query = '';
    if(req.params.id) {
        query = 'SELECT * FROM customer WHERE id =' + req.params.id;
    }
    db.any(query)
        .then(data => {
            res.send({customers: data});
        })
        .catch(err => {
            return next(err);
        });
}

// deletes a specific customer
function deleteCustomerById(req, res, next) {
    var query = '';
    if(req.params.id) {
        query = 'DELETE FROM customer WHERE id =' + req.params.id;
    }
    db.any(query)
        .then(function(){
            res.send({deleteSucessful: true});
        })
        .catch(err => {
            return next(err);
        });
}

// attempts to add a project to the database
function addProject(req, res, next) {
    var query = '';
    if(req.body) {
        let values = `(\'${req.body.fName}\', \'${req.body.description}\',\'${req.body.street}\',\'${req.body.postalCode}\',\'${req.body.city}\',\'${req.body.startDate}\',\'${req.body.endDate}\',${req.body.estimatedCost},\'${req.body.actualCost}\',${req.body.type}, NULLIF(${req.body.customer}, -1))`;
        query = `INSERT INTO project ("name", "description","street", "postal_code", "city", "start_date", "end_date", "quote_cost", "actual_cost", "project_type_id", "customer_id") VALUES ${values} RETURNING id`;
    }
    db.any(query)
        .then(data => {
            res.redirect('/projects/' + data[0].id);
        })
        .catch(err => {
            return next(err);
        });
}

// deletes a specific project
function deleteProjectById(req, res, next) {
    var query = '';
    if(req.params.id) {
        query = 'DELETE FROM project WHERE id =' + req.params.id;
    }
    db.any(query)
        .then(function(){
            res.send({deleteSucessful: true});
        })
        .catch(err => {
            return next(err);
        });
}

// attempts to edit a project in the database
function editProject(req, res, next) {
    var query = '';
    if(req.body) {
        let id = req.body.id;
        let values = `(\'${req.body.fName}\', \'${req.body.description}\',\'${req.body.street}\',\'${req.body.postalCode}\',\'${req.body.city}\',\'${req.body.startDate}\',\'${req.body.endDate}\',${req.body.estimatedCost},\'${req.body.actualCost}\',${req.body.type}, NULLIF(${req.body.customer}, -1))`;
        query = `UPDATE project SET ("name", "description","street", "postal_code", "city", "start_date", "end_date", "quote_cost", "actual_cost", "project_type_id", "customer_id") = ${values} WHERE id = ${id} RETURNING id`;
    }
    db.any(query)
        .then(data => {
            res.redirect('/projects/' + data[0].id);
        })
        .catch(err => {
            return next(err);
        });
}

// retrieves a specific project
function getProjectById(req, res, next) {
    var query = '';
    if(req.params.id) {
        query = 'SELECT * FROM project WHERE id =' + req.params.id;
    }
    db.any(query)
        .then(data => {
            res.send({projects: data});
        })
        .catch(err => {
            return next(err);
        });
}

// retrieves all projects associated with a specific customer
function getCustomerProjects(req, res, next) {
    var query = '';
    if(req.params.id) {
        query = 'SELECT project.* FROM project ' +
                'INNER JOIN customer ' +
                'ON project.customer_id =' + req.params.id;
    }
    db.any(query)
        .then(data => {
            res.send({projects: data});
        })
        .catch(err => {
            return next(err);
        });
}

// searches for projects while also returning basic customer information
function searchProjects(req, res, next){
    var query = 'SELECT project.*, project_type.type, customer.first_name, customer.last_name '+
                'FROM project ' +
                'LEFT JOIN customer ' +
                'ON project.customer_id = customer.id ' +
                'LEFT JOIN project_type ' +
                'ON project.project_type_id = project_type.id ';
    if(req.query.s) {
        query = 'SELECT project.*, project_type.type, customer.first_name, customer.last_name '+
                'FROM project ' +
                'LEFT JOIN customer ' +
                'ON project.customer_id = customer.id '+
                'LEFT JOIN project_type ' +
                'ON project.project_type_id = project_type.id ' +
                'WHERE LOWER(project.name) LIKE LOWER(\'%' + req.query.s + '%\')';
    }
    db.any(query)
      .then(data => {
        res.send({projects: data});
      })
      .catch(err => {
        return next(err);
      });
}

module.exports = {
    searchCustomers: searchCustomers,
    getCustomerById: getCustomerById,
    addCustomer: addCustomer,
    deleteCustomerById: deleteCustomerById,
    editCustomer: editCustomer,
    addProject: addProject,
    deleteProjectById: deleteProjectById,
    editProject: editProject,
    getProjectById: getProjectById,
    getCustomerProjects: getCustomerProjects,
    searchProjects: searchProjects
};
