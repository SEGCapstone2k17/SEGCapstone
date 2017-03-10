/*jshint esversion: 6 */
import axios from 'axios';

function fetchCustomers(query) {
      return axios.get('http://localhost:3000/api/customers/?' + query)
          .then(res => res.data.customers);
}

 function fetchCustomerById(param) {
     return axios.get('http://localhost:3000/api/customers/' + param)
         .then(res => res.data.customers);
}

function fetchProjects(query) {
    return axios.get('http://localhost:3000/api/projects/?' + query)
        .then(res => res.data.projects);
}

function fetchProjectById(param) {
      return axios.get('http://localhost:3000/api/projects/' + param)
          .then(res => res.data.projects);
}

module.exports = {
    fetchCustomers: fetchCustomers,
    fetchCustomerById: fetchCustomerById,
    fetchProjects: fetchProjects,
    fetchProjectById: fetchProjectById
}
