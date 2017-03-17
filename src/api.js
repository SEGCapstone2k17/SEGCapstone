import axios from 'axios';

function fetchCustomers(query) {
      return axios.get('http://localhost:3000/api/customers/?' + query)
          .then(res => res.data.customers);
}

 function fetchCustomerById(param) {
     return axios.get('http://localhost:3000/api/customers/' + param)
         .then(res => res.data.customers);
}

function removeCustomer(id) {
    return axios.delete('http://localhost:3000/api/customers/' + id)
        .then(res => res.data.deleteSucessful);
}

function fetchProjects(query) {
    return axios.get('http://localhost:3000/api/projects/?' + query)
        .then(res => res.data.projects);
}

function fetchProjectById(param) {
      return axios.get('http://localhost:3000/api/projects/' + param)
          .then(res => res.data.projects);
}

function fetchCustomerProjects(param) {
    return axios.get('http://localhost:3000/api/customer-projects/' + param)
        .then(res => res.data.projects);
}

function removeProject(id) {
    return axios.delete('http://localhost:3000/api/projects/' + id)
        .then(res => res.data.deleteSucessful);
}

module.exports = {
    fetchCustomers: fetchCustomers,
    fetchCustomerById: fetchCustomerById,
    removeCustomer: removeCustomer,
    fetchProjects: fetchProjects,
    fetchProjectById: fetchProjectById,
    fetchCustomerProjects: fetchCustomerProjects,
    removeProject: removeProject
}
