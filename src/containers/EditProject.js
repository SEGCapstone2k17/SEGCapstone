import React, {PropTypes, Component} from 'react';
import {EditProjectPage} from '../components/EditProject';
import * as api from '../api';
const serverString = 'localhost:3000';

class EditProject extends Component {
    constructor(props){
        super(props);
        this.state = {
            project: null,
            customers: null
        };
    }

    componentDidMount() {
        var param = window.location.href.split(serverString + "/editProject/")[1] || '';
        this.fetchProjectById(param);
        this.fetchCustomers('');
    }

    // Perform an async call to fetch specific project
    fetchProjectById(param) {
        api.fetchProjectById(param).then(project => {
          this.setState({
          project
        });
      });
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
        if (this.state.project && this.state.customers) {
              return <EditProjectPage project = {this.state.project} customers = {this.state.customers} />
        }
        else{
          return <h1> Getting Project...</h1>
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

export default EditProject;
