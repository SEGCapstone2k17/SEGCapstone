import React, {PropTypes, Component} from 'react';
import {Sidebar} from '../components/Sidebar';
import {LoadingScreen} from '../components/LoadingScreen';
import {EditCustomerPage} from '../components/EditCustomer';
import * as api from '../api';
const serverString = 'localhost:3000';

class EditCustomer extends Component {
    constructor(props){
        super(props);
        this.state = {
            customer: null
        };
    }

    componentDidMount() {
        this.fetchCustomerById(this.props.params.id);
    }

    // Perform an async call to fetch customers
    fetchCustomerById(param) {
        api.fetchCustomerById(param).then(customer => {
          this.setState({
          customer
        });
      });
    }

    currentContent() {
        if (this.state.customer) {
          return (
              <div>
                  <Sidebar is_customers_active = "active" />
                  <EditCustomerPage customer = {this.state.customer} />
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

EditCustomer.propTypes = {
    customer: PropTypes.array.isRequired
}

export default EditCustomer;
