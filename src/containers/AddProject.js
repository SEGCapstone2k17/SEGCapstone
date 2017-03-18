import React, {Component, PropTypes} from 'react';
import {Sidebar} from '../components/Sidebar';
import {LoadingScreen} from '../components/LoadingScreen';
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
                    <Sidebar is_projects_active = "active" />
                    <AddProjectContent customers = {this.state.customers} />
                </div>
            )
        }
        else{
            return(
                <div>
                    <Sidebar is_projects_active = "active" />
                    <LoadingScreen />
                </div>
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
