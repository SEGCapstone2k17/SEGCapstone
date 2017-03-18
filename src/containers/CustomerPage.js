import React, {Component, PropTypes} from 'react';
import {Sidebar} from '../components/Sidebar';
import {LoadingScreen} from '../components/LoadingScreen';
import {CustomerPage} from '../components/CustomerPage';
import * as api from '../api';
const serverString = 'localhost:3000';

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: null,
            projects: null
        }
        this.removeCustomer = this.removeCustomer.bind(this);
        this.removeProject = this.removeProject.bind(this);
    }

    componentWillMount() {
        const script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCOjbuBTgrJHH1hhpXqPCCThoIkFKWm3Wk&callback=initMap";
        script.async = true;
        document.body.appendChild(script);
    }

    componentDidMount() {
        var param = window.location.href.split(serverString + "/customers/")[1] || '';
        this.fetchCustomerById(param);
        this.fetchProjects(param);
    }

    removeCustomer(removed_customer) {
        api.removeCustomer(removed_customer.id)
            .then(deleteSucessful => {
                alert(`[${removed_customer.id}] ${removed_customer.first_name} ${removed_customer.last_name} was successfully removed!`);
                window.location.href = "/customers";
        })
    }

    // Perform an async call to fetch customers
    fetchCustomerById(param) {
        api.fetchCustomerById(param).then(customer => {
          this.setState({
          customer
        });
      });
    }

    // Perform an async call to fetch projects
    fetchProjects(param) {
        api.fetchCustomerProjects(param).then(projects => {
          this.setState({
          projects
        });
      });
    }

    removeProject(id,event) {
        var element = $(event.target).closest('.project-result');
        api.removeProject(id)
            .then(deleteSucessful => {
                element.addClass('deleted-item').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                    element.remove();
                 });
        })
    }

    // Only render the component when we receive data from async call
    currentContent() {
        if (this.state.customer && this.state.projects) {
            return (
                <div>
                    <Sidebar is_customers_active = "active" />
                    <CustomerPage customer = {this.state.customer} projects = {this.state.projects} removeProject = {this.removeProject} removeCustomer = {this.removeCustomer}/>
                </div>
            );
        }
        else{
          return (
              <div>
                  <Sidebar is_customers_active = "active" />
                  <LoadingScreen />
              </div>
          );
        }
    }

    render() {
        return (
            <div>
                {this.currentContent()}
            </div>
        )
    }
}

Customer.propTypes = {
  customer: PropTypes.array.isRequired
}

export default Customer;
