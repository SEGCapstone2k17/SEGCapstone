/*jshint esversion: 6 */
import React, {Component, PropTypes } from 'react';
import { CustomerPage, CustomerPageEdit } from '../components/CustomerPage';
import * as api from '../api';
const serverString = 'localhost:3000';

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: null,
            editable: false
        }
        this.toggleEditFields = this.toggleEditFields.bind(this)
    }

    componentDidMount() {
        var param = window.location.href.split(serverString + "/customers/")[1] || '';
        this.fetchCustomerById(param);
    }

    toggleEditFields() {
        console.log("Edit!");
        if(this.state.editable){
            this.setState({
                editable: false
            });
        } else {
            this.setState({
                editable: true
            });
        }
    }

    // Perform an async call to fetch customers
    fetchCustomerById(param) {
        api.fetchCustomerById(param).then(customer => {
          this.setState({
          customer
        });
      });
    }

    // Only render the component when we receive data from async call
    currentContent() {
      if (this.state.customer) {
        if(this.state.editable){
          return (
              <div>
                  <CustomerPageEdit customer = { this.state.customer } />
                  <button type="button" onClick={ this.toggleEditFields }>Cancel</button>
              </div>
          );
        }
        return (
            <div>
                <CustomerPage customer = { this.state.customer } />
                <button type="button" onClick={ this.toggleEditFields }>Edit</button>
            </div>
        );
      }

      return <h1> Getting Customer...</h1>
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
  customer: PropTypes.array.isRequired,
}

export default Customer;
