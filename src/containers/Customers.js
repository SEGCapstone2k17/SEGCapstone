import React, { Component, PropTypes } from 'react';
import {Sidebar} from '../components/Sidebar';
import {LoadingScreen} from '../components/LoadingScreen';
import { ListCustomers } from '../components/Customers.js';
import * as api from '../api';

class Customers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: null
        }
        this.removeCustomer = this.removeCustomer.bind(this);
    }

    componentDidMount() {
        this.fetchCustomers(this.props.location.query);
    }

    // Perform an async call to fetch customers
    fetchCustomers(query) {
        api.fetchCustomers(query).then(customers => {
          this.setState({
          customers
        });
      });
    }

    removeCustomer(id,event) {
        var element = $(event.target).closest('.client-result');
        api.removeCustomer(id)
            .then(deleteSucessful => {
                element.addClass('deleted-item').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                    element.remove();
                 });
        })
    }

    // Only render the component when we receive data from async call
    currentContent() {
      if (this.state.customers) {
        return (
            <div>
                <Sidebar is_customers_active = "active" />
                <ListCustomers customers = {this.state.customers} removeCustomer = {this.removeCustomer} />
            </div>
        );
      }

      return (
            <div>
                <Sidebar is_customers_active = "active" />
                <LoadingScreen />
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.currentContent()}
            </div>

        )
    }
}

Customers.propTypes = {
  customers: PropTypes.array.isRequired
}

export default Customers;
