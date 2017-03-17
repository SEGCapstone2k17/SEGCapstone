import React, {PropTypes, Component} from 'react';
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
        var param = window.location.href.split(serverString + "/editCustomer/")[1] || '';
        this.fetchCustomerById(param);
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
          return <EditCustomerPage customer = {this.state.customer} />
        }
        else{
          return <h1> Getting Customer...</h1>
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
