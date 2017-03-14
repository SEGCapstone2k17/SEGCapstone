import React, {Component, PropTypes} from 'react';
import {AddProjectContent} from '../components/AddProject';
import * as api from '../api';


class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: null
        };
    }

    componentDidMount(){
        this.fetchCustomers('');
    }

    fetchCustomers(query){
        api.fetchCustomers(query).then(customers => {
            this.setState({
                customers
            });
        });
    }

    currentContent(){
        if(this.state.customers){
            return (
                <div>
                    <AddProjectContent customers = {this.state.customers} />
                </div>
            )
        }
        else{
            return(
                <h1>Preparing...</h1>
            )
        }
    }

    render(){
        return (
            <div>
                {this.currentContent()}
            </div>
        )
    }
}

export default AddProject;
