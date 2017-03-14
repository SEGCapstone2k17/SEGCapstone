var pgp = require('pg-promise')();
var connectionString = "postgres://postgres:1q2w3e4r@localhost:5432/MockProject";
var db = pgp(connectionString);

// attempts to add a customer to the database
function addCustomer(req, res, next) {
    var query = '';
    if(req.body) {
        let values = `(\'${req.body.fname}\', \'${req.body.lname}\',\'${req.body.gender}\',\'${req.body.title}\')`;
        query = `INSERT INTO "Customer" ("First_Name", "Last_Name", "Gender", "Title") VALUES ${values} RETURNING "Customer_ID"`;
    }
    db.any(query)
        .then(data => {
            console.log("Data is: " + data[0].Customer_ID);
            res.redirect('/customers/' + data[0].Customer_ID);
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
        let values = `(\'${req.body.fname}\', \'${req.body.lname}\',\'${req.body.gender}\',\'${req.body.title}\')`;
        query = `UPDATE "Customer" SET ("First_Name", "Last_Name", "Gender", "Title") = ${values} WHERE "Customer"."Customer_ID" = ${id} RETURNING "Customer_ID"`;
    }
    db.any(query)
        .then(data => {
            console.log("Data is: " + data[0].Customer_ID);
            res.redirect('/customers/' + data[0].Customer_ID);
        })
        .catch(err => {
            return next(err);
        });
}

// searches for all customers
function searchCustomers(req, res, next) {
    var query = 'SELECT * FROM "Customer"';
    if(req.query.s) {
        query = 'SELECT * FROM "Customer" WHERE LOWER("First_Name") LIKE LOWER(\'%' + req.query.s + '%\')';
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
        query = 'SELECT * FROM "Customer" WHERE "Customer_ID" =' + req.params.id;
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
        query = 'DELETE FROM "Customer" WHERE "Customer_ID" =' + req.params.id;
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
        let values = `(\'${req.body.name}\', \'${req.body.description}\',${req.body.cost},\'${req.body.currency}\', NULLIF(${req.body.customer}, -1))`;
        query = `INSERT INTO "Project" ("Name", "Description", "Cost", "Currency", "Customer_ID") VALUES ${values} RETURNING "Project_ID"`;
    }
    db.any(query)
        .then(data => {
            res.redirect('/projects/' + data[0].Project_ID);
        })
        .catch(err => {
            return next(err);
        });
}

// deletes a specific project
function deleteProjectById(req, res, next) {
    var query = '';
    if(req.params.id) {
        query = 'DELETE FROM "Project" WHERE "Project_ID" =' + req.params.id;
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
        let values = `(\'${req.body.name}\', \'${req.body.description}\',${req.body.cost},\'${req.body.currency}\', NULLIF(${req.body.customer}, -1))`;
        query = `UPDATE "Project" SET ("Name", "Description", "Cost", "Currency", "Customer_ID") = ${values} WHERE "Project"."Project_ID" = ${id} RETURNING "Project_ID"`;
    }
    db.any(query)
        .then(data => {
            res.redirect('/projects/' + data[0].Project_ID);
        })
        .catch(err => {
            return next(err);
        });
}

// retrieves a specific project
function getProjectById(req, res, next) {
    var query = '';
    if(req.params.id) {
        query = 'SELECT * FROM "Project" WHERE "Project_ID" =' + req.params.id;
    }
    db.any(query)
        .then(data => {
            res.send({projects: data});
        })
        .catch(err => {
            return next(err);
        });
}

// searches for projects without returning any customer information
function searchProjects(req, res, next){
    var query = 'SELECT * FROM "Project"';
    if(req.query.s) {
        query = 'SELECT * FROM "Project" WHERE LOWER("Name") LIKE LOWER(\'%' + req.query.s + '%\')';
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
function searchProjectsWithCustomers(req, res, next){
    var query = 'SELECT "Project".*, "Customer"."First_Name", "Customer"."Last_Name"'+
            'FROM "Project"' +
            'LEFT JOIN "Customer"' +
            'ON "Project"."Customer_ID" = "Customer"."Customer_ID"';
    if(req.query.s) {
        query = 'SELECT "Project".*, "Customer"."First_Name", "Customer"."Last_Name"'+
                'FROM "Project"' +
                'LEFT JOIN "Customer"' +
                'ON "Project"."Customer_ID" = "Customer"."Customer_ID"'+
                'WHERE LOWER("Project"."Name") LIKE LOWER(\'%' + req.query.s + '%\')';
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
    searchProjects: searchProjects,
    searchProjectsWithCustomers: searchProjectsWithCustomers
};
