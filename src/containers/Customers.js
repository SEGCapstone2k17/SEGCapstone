/*jshint esversion: 6 */
import React, { Component, PropTypes } from 'react';
import { ListCustomers } from '../components/Customers.js';
import * as api from '../api';

class Customers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: null
        }
    }

    componentDidMount() {
        var query = window.location.href.split("?")[1] || '';
        this.fetchCustomers(query);
    }

    // Perform an async call to fetch customers
    fetchCustomers(query) {
        api.fetchCustomers(query).then(customers => {
          this.setState({
          customers
        });
      });
    }

    // Only render the component when we receive data from async call
    currentContent() {
      if (this.state.customers) {
        return <ListCustomers customers = { this.state.customers } />
      }

      return <h1> Fetching Customers...</h1>
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
